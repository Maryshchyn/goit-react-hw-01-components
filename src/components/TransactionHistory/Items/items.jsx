import PropTypes from 'prop-types';

export const Items = ({type, amount, currency }) => {
    return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
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

