import PropTypes from 'prop-types';
import css from './Friend.module.css';
import FriendItem from 'components/friend/Friend';

export default function FriendList({ friends }) {
  return (
    <section className="friend-section">
      <ul className={css.list}>
        {friends.map(item => (
          <FriendItem
            isOnline={item.isOnline}
            avatar={item.avatar}
            name={item.name}
            key={item.id}
          />
        ))}
      </ul>
    </section>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
