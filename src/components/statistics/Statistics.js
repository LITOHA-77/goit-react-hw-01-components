import PropTypes from 'prop-types';
import css from './Statistic.module.css';
import getBgColor from 'util/changeBgColor';
export default function StatisticsItem({ label, percentage }) {
  return (
    <li className={css.item} style={{ backgroundColor: getBgColor() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
}

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
