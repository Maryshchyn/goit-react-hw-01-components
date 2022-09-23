import PropTypes from 'prop-types';

export const Stats = ({label, percentage}) => {
    // console.log(events)
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

// export const Stats = (label, percentage) => {
//     return <ul class="stat-list">
//     <li class="item">
//       <span class="label">{label}</span>
//       <span class="percentage">{percentage}</span>
//     </li>
//     <li class="item">
//       <span class="label">{label}</span>
//       <span class="percentage">{percentage}</span>
//     </li>
//     <li class="item">
//       <span class="label">{label}</span>
//       <span class="percentage">{percentage}</span>
//     </li>
//     <li class="item">
//       <span class="label">{label}</span>
//       <span class="percentage">{percentage}</span>
//     </li>
//   </ul>
// }