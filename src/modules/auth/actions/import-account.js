import { augur } from '../../../services/augurjs';
import {
	loadLoginAccountDependents,
	loadLoginAccountLocalStorage
} from '../../auth/actions/load-login-account';
import { authError } from '../../auth/actions/auth-error';
import { updateLoginAccount } from '../../auth/actions/update-login-account';

export function importAccount(name, password, rememberMe, keystore) {
	return (dispatch, getState) => {
		const { links } = require('../../../selectors');
		const localStorageRef = typeof window !== 'undefined' && window.localStorage;
		augur.web.importAccount(name, password, keystore, (loginAccount) => {
			if (loginAccount.error) {
				dispatch(authError(loginAccount));
				return;
			}
			if (!loginAccount || !loginAccount.id) {
				return;
			}
			if (rememberMe && localStorageRef && localStorageRef.setItem) {
				const persistentAccount = Object.assign({}, loginAccount);
				if (Buffer.isBuffer(persistentAccount.privateKey)) {
					persistentAccount.privateKey = persistentAccount.privateKey.toString('hex');
				}
				localStorageRef.setItem('account', JSON.stringify(persistentAccount));
			}
			dispatch(loadLoginAccountLocalStorage(loginAccount.id));
			dispatch(updateLoginAccount(loginAccount));
			dispatch(loadLoginAccountDependents());
			if (links && links.marketsLink)	{
				links.marketsLink.onClick(links.marketsLink.href);
			}
			return;
		});
	};
}
