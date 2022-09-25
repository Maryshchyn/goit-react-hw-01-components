import PropTypes from 'prop-types';

export const FriendList = ({friend:{avatar, name, isOnline}}) => {
   
    return (
        <><span className="status">{isOnline ? 'yes' : 'nou'}</span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
       <p className="name">{name}</p>
       </>)


}

FriendList.propTypes = {
    friend:PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })
}