import PropTypes from 'prop-types';
import { FriendListTd } from './item.sryled';

export const Items = ({type, amount, currency }) => {
    return (
    <>
      <FriendListTd>{type}</FriendListTd>
      <FriendListTd>{amount}</FriendListTd>
      <FriendListTd>{currency}</FriendListTd>
    </>
    )
}
Items.propTypes = {
    transaction: PropTypes.exact({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }),
}

