import PropTypes from 'prop-types';
import {
  FriendsListItem,
  Chip,
  UserImg,
  UserName,
} from '../FriendList/FriendListItem.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <FriendsListItem>
      <Chip online={isOnline}></Chip>
      <UserImg src={avatar} alt="User avatar" width="48" />
      <UserName>{name}</UserName>
    </FriendsListItem>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
