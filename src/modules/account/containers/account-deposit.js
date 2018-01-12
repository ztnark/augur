import { connect } from 'react-redux'

import AccountDeposit from 'modules/account/components/account-deposit/account-deposit'
import { updateModal } from 'modules/modal/actions/update-modal'

const mapStateToProps = state => ({
  address: state.loginAccount.address
})

const mapDispatchToProps = dispatch => ({
  updateModal: options => dispatch(updateModal(options)),
})

const AccountDepositContainer = connect(mapStateToProps, mapDispatchToProps)(AccountDeposit)

export default AccountDepositContainer
