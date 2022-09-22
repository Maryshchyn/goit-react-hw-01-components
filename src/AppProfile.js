
import Profile from './components/Profile/Profile.jsx'
import user from './user.json';
export default function App() {
    return <div> <Profile
  avatar={user.avatar}
  username={user.username}
  location={user.location}
  tag={user.tag}
  followers={user.stats.followers}
  views={user.stats.views}
  likes={user.stats.likes}
/> </div>
}