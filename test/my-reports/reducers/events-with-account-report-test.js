import { assert } from 'chai';
import { UPDATE_EVENTS_WITH_ACCOUNT_REPORT_DATA } from '../../../src/modules/my-reports/actions/update-events-with-account-report-data';
import { CLEAR_LOGIN_ACCOUNT } from '../../../src/modules/auth/actions/update-login-account';
import reducer from '../../../src/modules/my-reports/reducers/events-with-account-report';

describe('modules/my-reports/reducers/events-with-account-report.js', () => {
	it('should return updated events data', () => {
		const state = {
			oldestLoadedPeriod: 10,
			events: {
				'0xtest1': {
					test: 'test'
				},
			}
		};
		const updateAction1 = {
			type: UPDATE_EVENTS_WITH_ACCOUNT_REPORT_DATA,
			data: {
				events: {
					'0xtest1': {
						test: 'test-again'
					},
					'0xtest2': {
						test: 'test'
					}
				}
			}
		};
		const updateAction2 = {
			type: UPDATE_EVENTS_WITH_ACCOUNT_REPORT_DATA,
			data: {
				oldestLoadedPeriod: 5,
				events: {
					'0xtest3': {
						test: 'test'
					},
					'0xtest1': {
						test: 'testing'
					}
				}
			}
		};
		const clearAction = { type: CLEAR_LOGIN_ACCOUNT };
		const defaultAction = { type: null };

		const expectedInitialState = {
			oldestLoadedPeriod: null,
			events: {}
		};
		const expectedState1 = {
			oldestLoadedPeriod: 10,
			events: {
				'0xtest1': {
					test: 'test'
				}
			}
		};
		const expectedState2 = {
			oldestLoadedPeriod: 10,
			events: {
				'0xtest1': {
					test: 'test-again'
				},
				'0xtest2': {
					test: 'test'
				}
			}
		};
		const expectedState3 = {
			oldestLoadedPeriod: 5,
			events: {
				'0xtest1': {
					test: 'testing'
				},
				'0xtest2': {
					test: 'test'
				},
				'0xtest3': {
					test: 'test'
				}
			}
		};

		assert.deepEqual(reducer(undefined, defaultAction), expectedInitialState, `Undefined state didn't return the initial state`);
		assert.deepEqual(reducer(state, defaultAction), expectedState1, `Default action didn't return an unmodified state`);
		assert.deepEqual(reducer(state, clearAction), expectedInitialState, `Type of 'CLEAR_LOGIN_ACCOUNT' didn't return the initial state`);
		assert.deepEqual(reducer(state, updateAction1), expectedState2, `Didn't return the expected state`);
		assert.deepEqual(reducer(expectedState2, updateAction2), expectedState3, `Didn't return the expected state`);
	});
});