import PropTypes from 'prop-types';
import {
  StatsStat,
  StatsItem,
  StatsLabel,
  StatsPercentage
} from './Stats.styled'

export const Stats = ({label, percentage}) => {
    
    return <StatsStat className="stat-list">
    <StatsItem className="item">
      <StatsLabel className="label">{label}</StatsLabel>
      <StatsPercentage className="percentage">{percentage}%</StatsPercentage>
    </StatsItem>
    
  </StatsStat>
}
Stats.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
}

