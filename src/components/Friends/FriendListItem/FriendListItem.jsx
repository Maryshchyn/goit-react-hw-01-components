import PropTypes from 'prop-types';
import { FriendList } from '../Friend/Friend';
import {FriendListList, FriendItem} from './FriendListItem.styled'

export const FriendListItem = ({friends}) => {
    return (
    <FriendListList className="friend-list">
      {friends.map((friend) => (
        <FriendItem key={friend.id} className="item">
              <FriendList
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
              />
        </FriendItem>
      ))}
    </FriendListList>
  );
};

FriendListItem.propTypes = {
    friends: PropTypes.array.isRequired,
}