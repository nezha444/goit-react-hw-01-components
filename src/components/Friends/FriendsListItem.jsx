import styles from './Friends.module.css'
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline}) => {
  return (
        <li className={styles.item}>
          <span
            className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}
          ></span>
          <img
            className={styles.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={styles.name}>{name}</p>
        </li>
  );
};