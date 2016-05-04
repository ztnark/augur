import { saveAccount } from "../../../services/file-saver"

/**
 * Author: priecint
 */

export function exportAccount() {
    return (dispatch, getState) => {
        let { loginAccount } = getState();
        saveAccount(loginAccount);
    }
}