import { assert } from 'chai';
import selectLoginAccountReports from '../../../src/modules/my-reports/selectors/login-account-reports';
import assertions from 'augur-ui-react-components/lib/assertions';

describe('modules/my-reports/selectors/login-account-reports.js', () => {
	it('should return reports and reports summary', () => {
		const actual = selectLoginAccountReports();

		assertions.loginAccountReports(actual);
	});
});