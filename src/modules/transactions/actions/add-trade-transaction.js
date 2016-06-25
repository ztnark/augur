import { formatEther, formatShares } from '../../../utils/format-number';
import {
	MULTI_TRADE,
	BUY_SHARES,
	SELL_SHARES,
// BID_SHARES,
// ASK_SHARES
} from '../../transactions/constants/types';
// import { updateExistingTransaction } from '../../transactions/actions/update-existing-transaction';
import { processOrder } from '../../trade/actions/place-trade';
import { addTransaction } from '../../transactions/actions/add-transactions';

export const makeTradeTransaction =
(isSell, market, outcome, numShares, limitPrice, totalCostWithoutFeeEther, feeEther, gas, dispatch) => {
	const totalEther = totalCostWithoutFeeEther + feeEther;
	const type = !isSell ? BUY_SHARES : SELL_SHARES;
	const outcomeID = outcome.id;
	const obj = {
		type: type,
		shares: numShares,
		sharesNegative: formatShares(-numShares),
		limitPrice,
		ether: totalEther,
		etherNegative: formatEther(-totalEther),
		gas,
		data: {
			marketID: market.id,
			outcomeID: outcomeID,
			marketDescription: market.description,
			outcomeName: outcome.name,
			avgPrice: formatEther(totalCostWithoutFeeEther / numShares),
			feeToPay: formatEther(feeEther),
			txns: []
		},
		action: (transactionID) => {
			dispatch(processOrder(transactionID, obj.data.marketID, obj.data.outcomeID, type === BUY_SHARES ? 'buy' : 'sell', obj.limitPrice, obj.ether.value, obj.shares.value));
		}
	};
	return obj;
};

export const addTradeTransaction =
(isSell, market, outcome, numShares, totalCostWithoutFeeEther, feeEther, gas) =>
  (dispatch, getState) =>
    dispatch(
			addTransaction(
				makeTradeTransaction(
					isSell, market, outcome,
					numShares, totalCostWithoutFeeEther, feeEther,
					gas, dispatch
				)
			)
		);
