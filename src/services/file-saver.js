/*
 * Author: priecint
 */
import { saveAs as saveFile } from "../../node_modules/filesaver.js"

/**
 * Tries several different ways to allow user downloading account file as JSON
 *
 * @param {Object} account
 */
export function saveAccount(account) {
    let accountJson = JSON.stringify(account);
    let uri = 'data:application/octet-stream,' + accountJson;
    let fileName = "UTC--" + new Date().toISOString() + "--" + account.address + ".json";

    let link = document.createElement('a');
    if (typeof link.download === 'string') {
        link.href = uri;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        try {
            let blob = new Blob([accountJson], {type: "application/json;charset=utf-8"});
            saveFile(blob, fileName);
        } catch (e) {
            window.open(uri);
        }
    }
}