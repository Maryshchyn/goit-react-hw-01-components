import PropTypes from 'prop-types';
import { Stats } from '../stats/Stats';
import {StatsStatistics} from './StatsBoard.styled'


export const StatsBoard = ({ stats }) => {
    console.log(stats)
    return <StatsStatistics className="statistics">
       
        {stats.map(({id, label, percentage}) => (
        <Stats
                key={id}
                label={label}
                percentage={percentage} />
            
        ))}
    </StatsStatistics>
}

StatsBoard.propTypes = {
    stats:  PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
  }),),
}