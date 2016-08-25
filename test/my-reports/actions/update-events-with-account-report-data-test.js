import { assert } from 'chai';
import proxyquire from 'proxyquire';
import sinon from 'sinon';
import * as mockStore from '../../mockStore';
import { UPDATE_EVENTS_WITH_ACCOUNT_REPORT_DATA, updateEventsWithAccountReportData } from '../../../src/modules/my-reports/actions/update-events-with-account-report-data';

describe('modules/my-reports/actions/update-events-with-account-report-data.js', () => {
	let testData, out;
	const { store } = mockStore.default;

	before(() => {
		store.clearActions();
	});

	it(`should update the events' state`, () => {
		testData = {
			test: 'test'
		};

		out = [{
			type: UPDATE_EVENTS_WITH_ACCOUNT_REPORT_DATA,
			data: {
				test: 'test'
			}
		}];

		store.dispatch(updateEventsWithAccountReportData(testData));
		assert.deepEqual(store.getActions(), out, `Didn't dispatch UPDATE_EVENTS_WITH_ACCOUNT_REPORT_DATA as expected`);
	});
});
