import { assert } from 'chai';
import proxyquire from 'proxyquire';
import sinon from 'sinon';
import * as mockStore from '../../mockStore';

import { UPDATE_EVENTS_WITH_ACCOUNT_REPORT_DATA } from '../../../src/modules/my-reports/actions/update-events-with-account-report-data';

describe('modules/my-reports/actions/load-events-with-submitted-report', () => {
	proxyquire.noPreserveCache().noCallThru();

	let action, out;
	const { store } = mockStore.default;
	const { branch, blockchain } = store.getState();

	let stubbedAugurJS = { augur: {} };
	stubbedAugurJS.augur.getEventsWithSubmittedReport = sinon.stub().yields([
		'0xdbd851cc394595f9c50f32c1554059ec343471b49f84a4b72c44589a25f70ff3',
		'0x8ef100c8aad3c4f7b65a055643d54db7b9a506a542b1270047a314da931e37fb'
	]);

	let stubbedActions = {
		updateEventsWithAccountReportData: () => {}
	};
	sinon.stub(stubbedActions, 'updateEventsWithAccountReportData', (data) => (
		{
			type: UPDATE_EVENTS_WITH_ACCOUNT_REPORT_DATA,
			data
		}
	));

	action = proxyquire('../../../src/modules/my-reports/actions/load-events-with-submitted-report', {
		'../../../services/augurjs': stubbedAugurJS,
		'../../my-reports/actions/update-events-with-account-report-data': stubbedActions
	});

	it('should load events for a specific set of periods that a user has reported on', () => {
		out = [
			{
				type: UPDATE_EVENTS_WITH_ACCOUNT_REPORT_DATA,
				data: { oldestLoadedPeriod: blockchain.currentPeriod - 5 }
			},
			{
				type: UPDATE_EVENTS_WITH_ACCOUNT_REPORT_DATA,
				data: {
					events: {
						'0xdbd851cc394595f9c50f32c1554059ec343471b49f84a4b72c44589a25f70ff3': {
							branch: branch.id,
							period: blockchain.currentPeriod - 5
						},
						'0x8ef100c8aad3c4f7b65a055643d54db7b9a506a542b1270047a314da931e37fb': {
							branch: branch.id,
							period: blockchain.currentPeriod - 5
						}
					}
				}
			},
			{
				type: UPDATE_EVENTS_WITH_ACCOUNT_REPORT_DATA,
				data: {
					events: {
						'0xdbd851cc394595f9c50f32c1554059ec343471b49f84a4b72c44589a25f70ff3': {
							branch: branch.id,
							period: blockchain.currentPeriod - 4
						},
						'0x8ef100c8aad3c4f7b65a055643d54db7b9a506a542b1270047a314da931e37fb': {
							branch: branch.id,
							period: blockchain.currentPeriod - 4
						}
					}
				}
			}
		];

		store.dispatch(action.loadEventsWithSubmittedReport());
		assert.includeDeepMembers(store.getActions(), out, `Didn't properly dispatch the UPDATE_EVENTS_WITH_ACCOUNT_REPORT_DATA actions`);
		assert(stubbedActions.updateEventsWithAccountReportData.callCount === 7, `Didn't call 'updateEventsWithAccountReportData' the expected number of times`);
	});
});