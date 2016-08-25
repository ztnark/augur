import { assert } from 'chai';
import proxyquire from 'proxyquire';
import { formatNumber, formatRep } from '../../../src/utils/format-number';
import assertions from 'augur-ui-react-components/lib/assertions';

describe('modules/my-reports/selectors/my-reports-summary.js', () => {
	proxyquire.noPreserveCache().noCallThru();

	let actual, expected;
	const mockSelectMyReports = () => (
		[
			{
				repEarned: formatRep(5)
			},
			{
				repEarned: formatRep(-2)
			},
			{
				repEarned: formatRep(5)
			}
		]
	);

	const proxiedSelector = proxyquire('../../../src/modules/my-reports/selectors/my-reports-summary', {
		'../../my-reports/selectors/my-reports': mockSelectMyReports
	});

	actual = proxiedSelector.default();
	expected = {
		numReports: formatNumber(3, { denomination: 'reports'}),
		netRep: formatRep(8, { denomination: 'rep' })
	};

	it('should return the expected object', () => {
		assert.deepEqual(actual, expected, `Didn't return the expected object`);
	});

	it('should deliver the expected shape to augur-ui-react-components', () => {
		assertions.myReportsSummary(actual);
	});
});