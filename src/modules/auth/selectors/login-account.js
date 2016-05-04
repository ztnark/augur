import { formatRep, formatEther } from '../../../utils/format-number';

import memoizerific from 'memoizerific';

import { exportAccount } from '../../account/actions/export-account';

import store from '../../../store';

export default function() {
	var { loginAccount } = store.getState();
	return {
		...loginAccount,
		rep: formatRep(loginAccount.rep, { zero: true, decimalsRounded: 0 }),
		ether: formatEther(loginAccount.ether, { zero: true, decimalsRounded: 0 }),
		realEther: formatEther(loginAccount.realEther, { zero: true, decimalsRounded: 0 }),
		exportAccount: selectExportAccount(store.dispatch)
	};
}

export const selectExportAccount = memoizerific(1)(function(dispatch) {
	return () => dispatch(exportAccount());
});