import PropTypes from 'prop-types';
import {
  Section,
  Description,
  UserImg,
  UserName,
  Tag,
  Location,
  StatsList,
  StatsListItem,
  Quantity,
  Label,
  Wrapper,
} from '../Profile/Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
} = []) => {
  return (
    <Section>
      <Wrapper>
        <Description>
          <UserImg src={avatar} alt="User avatar" />
          <UserName>{username}</UserName>
          <Tag>@{tag}</Tag>
          <Location>{location}</Location>
        </Description>
        <StatsList>
          <StatsListItem>
            <Label>Followers</Label>
            <Quantity>{followers}</Quantity>
          </StatsListItem>
          <StatsListItem>
            <Label>Views</Label>
            <Quantity>{views}</Quantity>
          </StatsListItem>
          <StatsListItem>
            <Label>Likes</Label>
            <Quantity>{likes}</Quantity>
          </StatsListItem>
        </StatsList>
      </Wrapper>
    </Section>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
