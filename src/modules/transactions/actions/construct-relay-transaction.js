import { constructBasicTransaction } from 'modules/transactions/actions/construct-transaction'
import unpackTransactionParameters from 'modules/transactions/actions/unpack-transaction-parameters'
import { addNotification, updateNotification } from 'modules/notifications/actions/update-notifications'

import makePath from 'modules/routes/helpers/make-path'

import { TRANSACTIONS } from 'modules/routes/constants/views'

export const constructRelayTransaction = tx => (dispatch, getState) => {
  const { hash, status, type } = tx
  const { notifications } = getState()
  const unpackedParams = unpackTransactionParameters(tx)
  const isDuplicate = notifications.findIndex(notification => notification.id === hash) !== -1
  console.log('unpacked:', JSON.stringify(unpackedParams, null, 2))
  const timestamp = tx.response.timestamp || parseInt(Date.now() / 1000, 10)
  const blockNumber = tx.response.blockNumber && parseInt(tx.response.blockNumber, 16)

  if (isDuplicate) {
    dispatch(updateNotification(hash, {
      ...unpackedParams,
      id: hash,
      timestamp,
      blockNumber,
      title: `${type} - ${status}`,
      description: unpackedParams._description || '',
      linkPath: makePath(TRANSACTIONS)
    }))
  } else {
    dispatch(addNotification({
      ...unpackedParams,
      id: hash,
      timestamp,
      blockNumber,
      title: `${type} - ${status}`,
      description: unpackedParams._description || '',
      linkPath: makePath(TRANSACTIONS)
    }))
  }

  return {
    [hash]: dispatch(constructBasicTransaction(hash, status, blockNumber, timestamp, tx.response.gasFees))
  }
}
