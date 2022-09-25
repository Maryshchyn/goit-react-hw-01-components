import PropTypes from 'prop-types';
import { Stats } from '../stats/Stats';
import {Title} from '../title/Title'

export const StatsBoard = ({ stats }) => {
    console.log(stats)
    return <section class="statistics"><Title />
        {stats.map(({id, label, percentage}) => (
        <Stats
                key={id}
                label={label}
                percentage={percentage} />
            
        ))}
    </section>
}

StatsBoard.propTypes = {
    stats:  PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
  }),),
}