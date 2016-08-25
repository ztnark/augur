import selectMyReports from '../../my-reports/selectors/my-reports';
import { formatNumber, formatRep } from '../../../utils/format-number';

export default function () {
	const reports = selectMyReports();

	const numReports = formatNumber(reports.length, { denomination: 'reports' });
	const netRep = formatRep(reports.reduce((prevNet, report) => prevNet + report.repEarned.value, 0), { denomination: ' rep' });

	return {
		numReports,
		netRep
	};
}
