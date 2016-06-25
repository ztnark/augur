import { updateTransactionsData } from '../../transactions/actions/update-transactions-data';
import { updateAssets } from '../../auth/actions/update-assets';

export function updateExistingTransaction(transactionID, newTransactionData) {
	return (dispatch, getState) => {
		const { transactionsData } = getState();

		// if the transaction doesn't already exist, probably/perhaps because user
		// logged out while a transaction was running and it just completed now,
		// do not update, ignore it
		if (!transactionID || !newTransactionData ||
		!transactionsData || !transactionsData[transactionID]) {
			return;
		}

		dispatch(updateTransactionsData({ [transactionID]: newTransactionData }));
		dispatch(updateAssets());
	};
}

/**
 * Updates eth txn related to augur transactions
 *
 * @param transactionID
 * @param newEthTxnData
 * @return {function()}
 */
export function updateTransactionTxn(transactionID, newEthTxnData) {
	return (dispatch, getState) => {
		const { transactionsData } = getState();

		// if the transaction doesn't already exist, probably/perhaps because user
		// logged out while a transaction was running and it just completed now,
		// do not update, ignore it
		if (!transactionID || !newEthTxnData ||
		!transactionsData || !transactionsData[transactionID]) {
			return;
		}

		const currentTransaction = transactionsData[transactionID];
		const indexOf = currentTransaction.data.txns.map((txn) => txn.hash).indexOf(newEthTxnData.hash);
		const newEthTxns = currentTransaction.data.txns.slice();
		if (indexOf > -1) {
			// it already exists -> update and replace
			const newEthTxn = {
				...currentTransaction.data.txns[indexOf],
				message: newEthTxnData.message
			};
			newEthTxns.splice(indexOf, 1, newEthTxn);
		} else {
			// doesn't exist -> add it
			newEthTxns.push(newEthTxnData);
		}
		
		const newTransaction = {
			...currentTransaction,
			data: {
				...currentTransaction.data,
				txns: newEthTxns
			}

		};

		dispatch(updateExistingTransaction(transactionID, newTransaction));
	};
}