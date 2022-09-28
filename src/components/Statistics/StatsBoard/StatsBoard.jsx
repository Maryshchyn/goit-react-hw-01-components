import PropTypes from 'prop-types';
import { Stats } from '../stats/Stats';
import {StatsStatistics, TitleTitle} from './StatsBoard.styled'


export const Statistics = ({title, stats }) => {
    console.log(stats)
    return (
        <section className="statistics">
            <TitleTitle className="title">{ title}</TitleTitle>
        
        <StatsStatistics className="statistics">
       
        {stats.map(({id, label, percentage}) => (
        <Stats
                key={id}
                label={label}
                percentage={percentage} />
            
        ))}
    </StatsStatistics></section>)
}

Statistics.propTypes = {
    stats:  PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
  }),),
}