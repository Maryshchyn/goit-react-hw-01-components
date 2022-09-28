import PropTypes from 'prop-types';
import { FriendStatus, FriendAvatar, FriendName } from './Friend.styled.js';
import cssIsOnline from './Friend.module.css';

export const FriendList = ({avatar, name, isOnline}) => {
   
    return (
        <><FriendStatus className={isOnline ? `${cssIsOnline.si}`:`${cssIsOnline.no}`}></FriendStatus>
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