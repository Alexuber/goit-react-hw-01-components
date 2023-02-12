import PropTypes, { arrayOf, shape } from "prop-types";

export const Transaction = (({transactionItem : {type, amount, currency}}) => {
    return (
        <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    )
})

Transaction.propTypes = {
    transactionItem:PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
}