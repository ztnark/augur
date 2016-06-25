import * as AugurJS from '../../../services/augurjs';

import {
	PLACE_MULTI_TRADE,
	SUCCESS,
	FAILED
} from '../../transactions/constants/statuses';
import { addTransactions } from '../../transactions/actions/add-transactions';
import { updateExistingTransaction, updateTransactionTxn } from '../../transactions/actions/update-existing-transaction';
import { clearTradeInProgress } from '../../trade/actions/update-trades-in-progress';
import { selectMarket } from '../../market/selectors/market';
import { selectTransactionsLink } from '../../link/selectors/links';

export function placeTrade(marketID) {
	return (dispatch, getState) => {
		const market = selectMarket(marketID);

		dispatch(addTransactions(market.tradeSummary.tradeOrders));

		dispatch(clearTradeInProgress(marketID));

		selectTransactionsLink(dispatch).onClick();
	};
}

/**
 *
 * @param {Number} transactionID
 * @param {String} marketID
 * @param {String} outcomeID
 */
export function processOrder(transactionID, marketID, outcomeID, type, limitPrice, etherToBuy, sharesToSell) {
	return (dispatch, getState) => {
		let scalarMinMax;

		const market = selectMarket(marketID);

		const marketOrderBook = getState().marketOrderBooks[marketID];
		const outcome = market.outcomes[outcomeID];

		const tradeOrder = {
			type, outcomeID, limitPrice, etherToBuy, sharesToSell
		};

		dispatch(updateExistingTransaction(transactionID, { status: PLACE_MULTI_TRADE }));

		if (market.type === 'scalar') {
			scalarMinMax = {
				minValue: market.minValue,
				maxValue: market.maxValue
			};
		}

		AugurJS.processOrder(
			transactionID, marketID, marketOrderBook, tradeOrder, outcome.position, scalarMinMax,
			(transactionID, res) => {
				console.log('onTradeHash %o', res);
				let newTransactionData;
				if (res.error != null) {
					newTransactionData = {
						status: FAILED,
						message: res.error
					};
				}

				dispatch(updateExistingTransaction(transactionID, newTransactionData));
				dispatch(updateTransactionTxn(transactionID, { hash: res, status: 'received trade hash' }));
			},
			(transactionID, res) => {
				console.log('onCommitSent %o', res);

				dispatch(updateTransactionTxn(transactionID, { hash: res.txHash, status: 'commit sent' }));
			},
			(transactionID, res) => {
				console.log('onCommitSuccess %o', res);
				dispatch(updateTransactionTxn(transactionID, { hash: res.txHash, status: 'commit success' }));
			},
			(transactionID, res) => {
				console.log('onCommitFailed %o', res);
				dispatch(updateExistingTransaction(transactionID, { status: FAILED }));
				dispatch(updateTransactionTxn(transactionID, { hash: res.txHash, status: 'commit failed' }));
			},
			(transactionID, res) => {
				console.log('onNextBlock %o', res);
			},
			(transactionID, res) => {
				console.log('onTradeSent %o', res);
				dispatch(updateExistingTransaction(transactionID, { status: 'TradeSent' }));
				dispatch(updateTransactionTxn(transactionID, { hash: res.txHash, status: 'trade sent' }));
			},
			(transactionID, res) => {
				console.log('onTradeSuccess %o', res);
				dispatch(updateExistingTransaction(transactionID, { status: SUCCESS }));
				dispatch(updateTransactionTxn(transactionID, { hash: res.txHash, status: 'trade success' }));
			},
			(transactionID, res) => {
				console.log('onTradeFailed %o', res);
				dispatch(updateExistingTransaction(transactionID, { status: FAILED }));
				dispatch(updateTransactionTxn(transactionID, { hash: res.txHash, status: 'trade failed' }));
			},
			(transactionID, res) => {
				console.log('onBuySellSent %o', res);
				dispatch(updateTransactionTxn(transactionID, { hash: res.txHash, status: 'on sent' }));
			},
			(transactionID, res) => {
				console.log('onBuySellSuccess %o', res);
				dispatch(updateTransactionTxn(transactionID, { hash: res.txHash, status: 'on success' }));
				dispatch(updateExistingTransaction(transactionID, { status: SUCCESS }));
			},
			(transactionID, res) => {
				console.log('onBuySellFailed %o', res);
				dispatch(updateExistingTransaction(transactionID, { status: FAILED }));
			},
			(transactionID, res) => {
				console.log('onShortSellSent %o', res);
				dispatch(updateTransactionTxn(transactionID, { hash: res.txHash, status: 'sent' }));
			},
			(transactionID, res) => {
				console.log('onShortSellSuccess %o', res);
				dispatch(updateExistingTransaction(transactionID, { status: SUCCESS }));
				dispatch(updateTransactionTxn(transactionID, { hash: res.txHash, status: 'success' }));
			},
			(transactionID, res) => {
				console.log('onShortSellFailed %o', res);
				dispatch(updateExistingTransaction(transactionID, { status: FAILED }));
				dispatch(updateTransactionTxn(transactionID, { hash: res.txHash, status: 'failed' }));
			},
			(transactionID, res) => {
				console.log('onBuyCompleteSetsSent %o', res);
				dispatch(updateTransactionTxn(transactionID, { hash: res.txHash, status: 'sent' }));
			},
			(transactionID, res) => {
				console.log('onBuyCompleteSetsSuccess %o', res);
				dispatch(updateExistingTransaction(transactionID, { status: SUCCESS }));
				dispatch(updateTransactionTxn(transactionID, { hash: res.txHash, status: 'success' }));
			},
			(transactionID, res) => {
				console.log('onBuyCompleteSetsFailed %o', res);
				dispatch(updateExistingTransaction(transactionID, { status: FAILED }));
				dispatch(updateTransactionTxn(transactionID, { hash: res.txHash, status: 'failed' }));
			}
		);
	};
}
