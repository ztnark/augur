import memoizerific from 'memoizerific';
import { MY_POSITIONS, MY_MARKETS, MY_REPORTS } from '../../../modules/app/constants/pages';
import selectMyPositionsSummary from '../../my-positions/selectors/my-positions-summary';
import selectMyMarketsSummary from '../../my-markets/selectors/my-markets-summary';
import selectMyReportsSummary from '../../my-reports/selectors/my-reports-summary';

export default function () {
	const { links } = require('../../../selectors');

	return selectPortfolioNavItems(links);
}

export const selectPortfolioNavItems = memoizerific(1)((links) => {
	const positionsSummary = selectMyPositionsSummary();
	const marketsSummary = selectMyMarketsSummary();
	const reportsSummary = selectMyReportsSummary();

	return [
		{
			label: 'Positions',
			link: links.myPositionsLink,
			page: MY_POSITIONS,
			leadingTitle: 'Total Positions',
			leadingValue: positionsSummary && positionsSummary.numPositions || 0,
			trailingTitle: 'Total Gain/Loss',
			trailingValue: positionsSummary && positionsSummary.netChange || 0
		},
		{
			label: 'Markets',
			link: links.myMarketsLink,
			page: MY_MARKETS,
			leadingTitle: 'Total Markets',
			leadingValue: marketsSummary && marketsSummary.numMarkets || 0,
			trailingTitle: 'Total Gain/Loss',
			trailingValue: marketsSummary && marketsSummary.totalValue || 0
		},
		{
			label: 'Reports',
			link: links.myReportsLink,
			page: MY_REPORTS,
			leadingTitle: 'Total Reports',
			leadingValue: reportsSummary && reportsSummary.numReports || 0,
			trailingTitle: 'Total Gain/Loss',
			trailingValue: reportsSummary && reportsSummary.netRep || 0
		}
	];
});
