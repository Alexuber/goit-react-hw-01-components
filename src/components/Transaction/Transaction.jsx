import PropTypes from 'prop-types';
import { TrBody, TdBody } from './Transaction.styled';

export const Transaction = ({
  transactionItem: { type, amount, currency },
}) => {
  return (
    <TrBody>
      <TdBody>{type}</TdBody>
      <TdBody>{amount}</TdBody>
      <TdBody>{currency}</TdBody>
    </TrBody>
  );
};

Transaction.propTypes = {
  transactionItem: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
