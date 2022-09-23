

export const Stats = ({events}) => {
    console.log(events)
    return <ul className="stat-list">
    <li className="item">
      <span className="label">.docx</span>
      <span className="percentage">4%</span>
    </li>
    <li className="item">
      <span className="label">.mp3</span>
      <span className="percentage">14%</span>
    </li>
    <li className="item">
      <span className="label">.pdf</span>
      <span className="percentage">41%</span>
    </li>
    <li className="item">
      <span className="label">.mp4</span>
      <span className="percentage">12%</span>
    </li>
  </ul>
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