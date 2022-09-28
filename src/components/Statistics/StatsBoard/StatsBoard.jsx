import PropTypes from 'prop-types';
import { Stats } from '../stats/Stats';
import {StatsStatistics, TitleTitle} from './StatsBoard.styled'


export const StatsBoard = ({title, stats }) => {
    console.log(stats)
    return (
        <section class="statistics">
            <TitleTitle class="title">{ title}</TitleTitle>
        
        <StatsStatistics className="statistics">
       
        {stats.map(({id, label, percentage}) => (
        <Stats
                key={id}
                label={label}
                percentage={percentage} />
            
        ))}
    </StatsStatistics></section>)
}

StatsBoard.propTypes = {
    stats:  PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
  }),),
}