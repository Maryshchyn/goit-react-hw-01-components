import PropTypes from 'prop-types';
import {FriendStatus, FriendAvatar, FriendName} from './Friend.styled.js';

export const FriendList = ({friend:{avatar, name, isOnline}}) => {
   
    return (
        <><FriendStatus className="status">{isOnline ? 'yes' : 'nou'}</FriendStatus>
  <FriendAvatar className="avatar" src={avatar} alt="User avatar" width="48" />
       <FriendName className="name">{name}</FriendName>
       </>)


}

FriendList.propTypes = {
    friend:PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })
}