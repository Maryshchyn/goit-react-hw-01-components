import PropTypes from 'prop-types';
import {TitleTitle} from './Title.styled'


export const Title = ({ title }) => {
    return (<TitleTitle className="title">{title}</TitleTitle>)
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
}