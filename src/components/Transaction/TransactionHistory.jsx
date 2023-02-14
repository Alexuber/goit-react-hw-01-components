import PropTypes from 'prop-types';
import { Transaction } from './Transaction';
import { Table, Thead, HeadTh } from './TransactionHistory.styled';

export const TransactionHistory = ({ items = [] }) => {
  return (
    <Table className="transaction-history">
      <Thead>
        <tr>
          <HeadTh>Type</HeadTh>
          <HeadTh>Amount</HeadTh>
          <HeadTh>Currency</HeadTh>
        </tr>
      </Thead>
      <tbody>
        {items.map(transaction => {
          return (
            <Transaction transactionItem={transaction} key={transaction.id} />
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  transactionItem: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
