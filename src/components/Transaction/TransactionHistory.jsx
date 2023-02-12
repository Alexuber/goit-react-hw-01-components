import PropTypes from "prop-types";
import { Transaction } from "./Transaction";

export const TransactionHistory = (({items}) => {

    return (
        <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {
        items.map(transaction => {
            return (
                <Transaction
                transactionItem = {transaction}
                key = {transaction.id}/>
            )
        })
        
    }
  </tbody>
</table>
    )
});

TransactionHistory.propTypes = {
    transactionItem:PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      }))
}