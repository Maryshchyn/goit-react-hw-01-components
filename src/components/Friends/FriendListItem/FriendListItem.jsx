import PropTypes from 'prop-types';
import { FriendList } from '../Friend/Friend';

export const FriendListItem = ({friends}) => {
    return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li key={friend.id} className="item">
              <FriendList
                  friend={friend}
                       
              />
        </li>
      ))}
    </ul>
  );
};

FriendListItem.propTypes = {
    friends: PropTypes.array.isRequired,
}