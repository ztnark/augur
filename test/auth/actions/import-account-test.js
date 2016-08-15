import {
	assert
} from 'chai';
import proxyquire from 'proxyquire';
import sinon from 'sinon';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import testState from '../../testState';

describe(`modules/auth/actions/import-account.js`, () => {
	proxyquire.noPreserveCache();
	const middlewares = [thunk];
	const mockStore = configureMockStore(middlewares);
	const store = mockStore(testState);
	const fakeAugurJS = {
		augur: { web: { importAccount: () => {} } }
	};
	const fakeLoadLoginAccount = {
		loadLoginAccountDependents: () => {},
		loadLoginAccountLocalStorage: () => {},
	};
	const fakeSelectors = { links: { marketsLink: { onClick: () => {} } } };
	const fakeWindow = { localStorage: { setItem: () => {} } };
	sinon.stub(fakeWindow.localStorage, 'setItem', (name, item) => {
		return { name, data: item };
	});
	sinon.stub(fakeAugurJS.augur.web, 'importAccount', (name, password, keystore, cb) => {
		cb({ name: name, keystore: keystore, id: `fakeAddress123`, });
	});
	sinon.stub(fakeLoadLoginAccount, 'loadLoginAccountDependents', () => {
		const obj = { type: 'LOAD_ACCOUNT_DEPENDENTS' };
		return obj;
	});
	sinon.stub(fakeLoadLoginAccount, `loadLoginAccountLocalStorage`, (id) => {
		const obj = { type: 'LOAD_ACCOUNT_LOCAL_STORAGE', id };
		return obj;
	});

	beforeEach(() => {
		store.clearActions();
		global.window = fakeWindow;
	});

	afterEach(() => {
		global.window = {};
		fakeWindow.localStorage.setItem.reset();
		fakeAugurJS.augur.web.importAccount.reset();
		fakeLoadLoginAccount.loadLoginAccountDependents.reset();
		fakeLoadLoginAccount.loadLoginAccountLocalStorage.reset();
		store.clearActions();
	});

	const action = proxyquire('../../../src/modules/auth/actions/import-account', {
		'../../../services/augurjs': fakeAugurJS,
		'../../auth/actions/load-login-account': fakeLoadLoginAccount,
		'../../../selectors': fakeSelectors
	});

	it('should import an account', () => {
		const keystore = {
			address: `fakeAddress123`,
			privateKey: new Buffer('someprivatekey', "hex")
		};
		const expected = [
			{ type: 'LOAD_ACCOUNT_LOCAL_STORAGE', id: 'fakeAddress123' },
			{ type: 'UPDATE_LOGIN_ACCOUNT', data: { name: 'myName', keystore, id: 'fakeAddress123' } },
			{ type: 'LOAD_ACCOUNT_DEPENDENTS' },
		];

		store.dispatch(action.importAccount('myName', 'myPass', false, keystore));
		assert.deepEqual(store.getActions(), expected, `didn't produce the expected actions`);
		assert(fakeAugurJS.augur.web.importAccount.calledOnce, `augur.web.importAccount wasn't called once as expected.`);
		assert(fakeLoadLoginAccount.loadLoginAccountDependents.calledOnce, `loadLoginAccountDependents wasn't called once as expected`);
		assert(fakeLoadLoginAccount.loadLoginAccountLocalStorage.calledOnce, `loadLoginAccountLocalStorage wasn't called once as expected.`);
		assert(fakeWindow.localStorage.setItem.callCount === 0, `localStorage.setItem was called when rememberMe flag was set to false.`);
	});

	it('should import an account and save to local storage', () => {
		const keystore = {
			address: `fakeAddress123`,
			privateKey: new Buffer('someprivatekey', "hex")
		};
		const expected = [
			{ type: 'LOAD_ACCOUNT_LOCAL_STORAGE', id: 'fakeAddress123' },
			{ type: 'UPDATE_LOGIN_ACCOUNT', data: { name: 'myName', keystore, id: 'fakeAddress123' } },
			{ type: 'LOAD_ACCOUNT_DEPENDENTS' },
		];

		store.dispatch(action.importAccount('myName', 'myPass', true, keystore));
		assert.deepEqual(store.getActions(), expected, `didn't produce the expected actions`);
		assert(fakeAugurJS.augur.web.importAccount.calledOnce, `augur.web.importAccount wasn't called once as expected.`);
		assert(fakeLoadLoginAccount.loadLoginAccountDependents.calledOnce, `loadLoginAccountDependents wasn't called once as expected`);
		assert(fakeLoadLoginAccount.loadLoginAccountLocalStorage.calledOnce, `loadLoginAccountLocalStorage wasn't called once as expected.`);
		assert(fakeWindow.localStorage.setItem.calledOnce, `localStorage.setItem wasn't called once as expected.`);
	});
});
