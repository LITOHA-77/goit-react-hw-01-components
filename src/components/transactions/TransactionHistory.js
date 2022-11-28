import PropTypes from 'prop-types';
import css from './Transaction.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transaction}>
      <thead className={css.title}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr
            key={item.id}
            style={
              items.indexOf(item) % 2
                ? { backgroundColor: 'rgb(255, 255, 255)' }
                : { backgroundColor: 'rgb(236, 241, 243)' }
            }
          >
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
