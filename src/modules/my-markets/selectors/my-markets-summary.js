import selectMyMarkets from '../../../modules/my-markets/selectors/my-markets';
import { formatNumber, formatEther } from '../../../utils/format-number';

export default function () {
	const markets = selectMyMarkets();

	const numMarkets = formatNumber(markets.length, { denomination: 'markets'});
	const totalValue = formatEther(markets.reduce((prevTotal, currentMarket) => prevTotal + currentMarket.fees.value, 0), { denomination: 'eth' });

	return {
		numMarkets,
		totalValue
	};
}
