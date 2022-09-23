import PropTypes from 'prop-types';


export const Title = ({ title }) => {
    return <section className="statistics">
  <h2 className="title">{title}</h2></section>
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
}