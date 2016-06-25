import {
	assert
} from 'chai';
import proxyquire from 'proxyquire';
import sinon from 'sinon';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe(`modules/transactions/actions/update-existing-transaction.js`, () => {
	proxyquire.noPreserveCache().noCallThru();
	const middlewares = [thunk];
	const mockStore = configureMockStore(middlewares);
	const mockUpdateTransData = {
		updateTransactionsData: sinon.stub().returns({
			type: 'UPDATE_TRANSACTION_DATA'
		})
	};
	const mockUpdateAssets = {
		updateAssets: sinon.stub().returns({
			type: 'UPDATE_ASSETS'
		})
	};

	const store = mockStore({
		transactionsData: {
			'txn_2': {
				id: 'txn_2',
				type: 'buy_shares',
				data: {
					txns: []
				}
			},
			'txn_3': {
				id: 'txn_2',
				type: 'buy_shares',
				data: {
					txns: [{
						hash: "abcdef123456",
						message: "initial message"
					}]
				}
			}
		}
	});

	beforeEach(() => {
		store.clearActions();
	});

	describe("updateExistingTransaction()", () => {
		const { updateExistingTransaction } = proxyquire('../../../src/modules/transactions/actions/update-existing-transaction', {
			'../../transactions/actions/update-transactions-data': mockUpdateTransData,
			'../../auth/actions/update-assets': mockUpdateAssets
		});

		it(`shouldn't dispatch actions if there is no transaction data to update`, () => {
			const txn = {
				id: 'txn_1'
			};

			store.dispatch(updateExistingTransaction(txn.id, txn));
			store.dispatch(updateExistingTransaction(txn.id, null));

			assert(!mockUpdateTransData.updateTransactionsData.called);
			assert(!mockUpdateAssets.updateAssets.called);
			assert(store.getActions(), [], `Dispatched actions when it shouldn't have.`);
		});

		it(`should update an existing transaction`, () => {
			const txn = {
				id: 'txn_2',
				message: 'test message!',
				status: 'success',
				type: 'register'
			};

			const out = [{
				type: 'UPDATE_TRANSACTION_DATA'
			}, {
				type: 'UPDATE_ASSETS'
			}];

			store.dispatch(updateExistingTransaction(txn.id, txn));

			assert(mockUpdateTransData.updateTransactionsData.calledOnce);
			assert(mockUpdateAssets.updateAssets.calledOnce);
			assert.deepEqual(store.getActions(), out, `Didn't dispatch the expected action objects`);
		});
	});

	// describe("updateTransactionTxn()", () => {
	// 	const actions = proxyquire('../../../src/modules/transactions/actions/update-existing-transaction', {
	// 		'../../transactions/actions/update-transactions-data': mockUpdateTransData,
	// 		'../../auth/actions/update-assets': mockUpdateAssets
	// 	});
	// 	const { updateTransactionTxn } = actions;
	//
	// 	before(() => {
	// 		updateExistingTransactionStub = sinon.stub(actions, "updateExistingTransaction");
	// 	});
	//
	// 	afterEach(() => {
	// 		// updateExistingTransactionSpy.reset();
	// 	});
	//
	// 	it("shouldn't dispatch actions if there is no transaction to update", () => {
	// 		const ethTxn = {
	// 			hash: "abcdef123456",
	// 			message: "message"
	// 		};
	// 		store.dispatch(updateTransactionTxn("id_of_non-existing_txn", ethTxn));
	// 		store.dispatch(updateTransactionTxn("id_of_non-existing_txn", null));
	// 		assert(store.getActions(), [], `Dispatched actions when it shouldn't have.`);
	// 	});
	//
	// 	it('should add eth txn if there is none yet', () => {
	// 		const ethTxn = {
	// 			hash: "abcdef123456",
	// 			message: "message"
	// 		};
	//
	// 		store.dispatch(updateTransactionTxn("txn_2", ethTxn));
	// 		// assert(store.getActions(), [], `Dispatched actions when it shouldn't have.`);
	//
	// 		// assert(actions.updateExistingTransaction.callCount);
	// 	});
	//
	// 	it("should update eth txn if it's there already", () => {
	//
	// 	});
	// });
});
