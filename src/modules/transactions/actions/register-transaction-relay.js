import { abi, augur, rpc } from '../../../services/augurjs';
import { SUCCESS } from '../../transactions/constants/statuses';
import { NO_RELAY } from '../../transactions/constants/no-relay';
import { formatDate } from '../../../utils/format-date';
import { formatRealEther, formatRealEtherEstimate } from '../../../utils/format-number';
import { updateTransactionsData } from '../../transactions/actions/update-transactions-data';
import { constructTradingTransaction, constructTransaction, constructBasicTransaction } from '../../transactions/actions/convert-logs-to-transactions';

export function unpackTransactionParameters(tx) {
	const params = tx.data.params;
	const inputs = tx.data.inputs;
	const numInputs = inputs.length;
	const fixed = tx.data.fixed;
	const unfixedParams = params.slice();
	if (fixed && fixed.length) {
		const numFixed = fixed.length;
		for (let j = 0; j < numFixed; ++j) {
			unfixedParams[j] = abi.unfix(abi.hex(params[j], true), 'string');
		}
	}
	const unpacked = {};
	for (let i = 0; i < numInputs; ++i) {
		unpacked[inputs[i]] = unfixedParams[i];
	}
	return unpacked;
}

export function constructRelayTransaction(tx) {
	return (dispatch, getState) => {
		const p = { ...unpackTransactionParameters(tx), transactionHash: tx.response.hash };
		console.log('unpacked:', JSON.stringify(p, null, 2));
		switch (tx.data.method) {
			case 'buy':
				return dispatch(constructTradingTransaction('log_add_tx', { type: 'buy', ...p }, p.market, p.outcome));
			case 'sell':
				return dispatch(constructTradingTransaction('log_add_tx', { type: 'sell', ...p }, p.market, p.outcome));
			case 'trade':
				return; // dispatch(constructTradingTransaction('log_fill_tx', { type: 'buy', ...p }, p.market, p.outcome));
			case 'short_sell':
				return dispatch(constructTradingTransaction('log_fill_tx', { type: 'short', ...p }, p.market, p.outcome));
			case 'shortAsk':
				return dispatch(constructTradingTransaction('log_add_tx', { type: 'sell', ...p }, p.market, p.outcome));
			case 'cancel':
				return dispatch(constructTradingTransaction('log_cancel', p, p.market, p.outcome));
			default: {
				let transaction;
				switch (tx.data.method) {
					case 'submitReport':
						transaction = dispatch(constructTransaction('submittedReport', p));
						break;
					case 'submitReportHash':
						transaction = dispatch(constructTransaction('submittedReportHash', p));
						break;
					case 'penalizeWrong':
						transaction = dispatch(constructTransaction('penalized', p));
						break;
					case 'penalizationCatchup':
						transaction = dispatch(constructTransaction('penalizationCaughtUp', p));
						break;
					case 'collectFees':
						transaction = dispatch(constructTransaction('collectedFees', p));
						break;
					case 'claimProceeds':
						transaction = dispatch(constructTransaction('payout', p));
						break;
					case 'transfer':
						transaction = dispatch(constructTransaction('Transfer', p));
						break;
					case 'approve':
						transaction = dispatch(constructTransaction('Approve', p));
						break;
					case 'register':
						transaction = dispatch(constructTransaction('registration', p));
						break;
					case 'createMarket':
					case 'createSingleEventMarket':
						transaction = dispatch(constructTransaction('marketCreated', p));
						break;
					default:
						return null;
				}
				return {
					[tx.response.hash]: {
						...constructBasicTransaction(tx.response.hash, 'in progress', tx.response.blockNumber, tx.response.timestamp),
						...transaction
					}
				};
			}
		}
	};
}

export function registerTransactionRelay() {
	return (dispatch, getState) => {
		rpc.excludeFromTxRelay(NO_RELAY);
		rpc.registerTxRelay((tx) => {
			if (tx && tx.response && tx.data) {
				console.log('txRelay:', tx);
				const hash = tx.response.hash;
				const { transactionsData } = getState();
				if (hash) {
					const timestamp = tx.response.timestamp ?
						formatDate(new Date(tx.response.timestamp * 1000)) :
						formatDate(new Date());
					const gasFees = tx.response.gasFees ?
						formatRealEther(tx.response.gasFees) :
						formatRealEtherEstimate(augur.getTxGasEth({ ...tx.data }, rpc.gasPrice));
					if (!transactionsData[hash] || transactionsData[hash].status !== SUCCESS) {
						const relayTransaction = dispatch(constructRelayTransaction(tx));
						if (relayTransaction) {
							return dispatch(updateTransactionsData(relayTransaction));
						}
						if (!tx.description && tx.data.description) {
							tx.description = tx.data.description;
						}
						if (!tx.description && tx.data.inputs) {
							const params = tx.data.params.slice();
							if (tx.data.fixed) {
								const numFixed = tx.data.fixed.length;
								for (let i = 0; i < numFixed; ++i) {
									params[tx.data.fixed[i]] = abi.unfix(params[tx.data.fixed[i]], 'string');
								}
							}
							tx.description = tx.data.inputs.map((input, i) => `${input}: ${params[i]}`).join('\n');
						}
						// const contracts = augur.contracts;
						// const contract = Object.keys(contracts).find(c => contracts[c] === tx.to);
						// const events = augur.api.functions[contract][tx.data.method].events;
						if (transactionsData[hash] && transactionsData[hash].disableAutoMessage) {
							return dispatch(updateTransactionsData({
								[hash]: { ...tx, timestamp, gasFees, hash }
							}));
						}
						let message;
						if (tx.response.callReturn && (
							tx.response.callReturn.constructor === Array ||
							tx.response.callReturn.constructor === Object)
						) {
							message = JSON.stringify(tx.response.callReturn);
						} else {
							message = tx.response.callReturn;
						}
						dispatch(updateTransactionsData({
							[hash]: { ...tx, message, timestamp, gasFees, hash }
						}));
					} else if (tx.data.method !== 'trade') {
						dispatch(updateTransactionsData({
							[hash]: { ...tx, timestamp, gasFees, hash }
						}));
					}
				}
			}
		});
	};
}
