import PropTypes from 'prop-types';
import UserProfile from 'components/profile/Profile';

export default function UsersProfileList({ userCard }) {
  return (
    <ul className="profile-list">
      {userCard.map(item => (
        <li className="profile-item" key={item.tag}>
          <UserProfile
            username={item.username}
            tag={item.tag}
            location={item.location}
            avatar={item.avatar}
            stats={item.stats}
          />
        </li>
      ))}
    </ul>
  );
}

UsersProfileList.propTypes = {
  userCard: PropTypes.arrayOf(
    PropTypes.shape({
      tag: PropTypes.string.isRequired,
    })
  ),
};
