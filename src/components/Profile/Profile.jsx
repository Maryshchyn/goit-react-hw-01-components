import PropTypes from 'prop-types';
import {
  ProfileProf,
  ProfileDescription,
  ProfileAvatar,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  ProfileLi,
  ProfileLabel,
  ProfileQuantity,
  ProfileStats,
} from './Profile.styled';
// import css from '../Profile/Profile.module.css';

export default function Profile({ avatar, username, tag, location, stats  }) {
  return (
    <ProfileProf className="profile">
  <ProfileDescription className="description">
    <ProfileAvatar
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <ProfileName className="name">{username}</ProfileName>
    <ProfileTag className="tag">@{tag}</ProfileTag>
    <ProfileLocation className="location">{location}</ProfileLocation>
  

  <ProfileStats className="stats">
    <ProfileLi>
      <ProfileLabel className="label">Followers</ProfileLabel>
      <ProfileQuantity className="quantity">{stats.followers}</ProfileQuantity>
    </ProfileLi>
    <ProfileLi>
      <ProfileLabel className="label">Views</ProfileLabel>
      <ProfileQuantity className="quantity">{stats.views}</ProfileQuantity>
    </ProfileLi>
    <ProfileLi>
      <ProfileLabel className="label">Likes</ProfileLabel>
      <ProfileQuantity className="quantity">{stats.likes}</ProfileQuantity>
    </ProfileLi>
        </ProfileStats>
        </ProfileDescription>
</ProfileProf>)
}

Profile.propTypes ={
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
}