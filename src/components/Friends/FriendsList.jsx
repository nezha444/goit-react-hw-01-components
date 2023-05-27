import styles from './Friends.module.css'
import PropTypes from 'prop-types';
import { FriendListItem } from './FriendsListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friend_list}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  )
};