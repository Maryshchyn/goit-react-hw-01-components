import PropTypes from 'prop-types';

export const Stats = ({label, percentage}) => {
    
    return <ul className="stat-list">
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
    
  </ul>
}
Stats.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
}

