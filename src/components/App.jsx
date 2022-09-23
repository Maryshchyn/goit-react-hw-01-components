import user from '../user.json';
import Profile from '../components/Profile/Profile';

import { Title } from './Statistics/title/Title';
import { Stats } from './Statistics/stats/Stats';
import data from '../data.json';

export const App = () => {
  return (
    <div>
      <Profile
  avatar={user.avatar}
  username={user.username}
  location={user.location}
  tag={user.tag}
  followers={user.stats.followers}
  views={user.stats.views}
  likes={user.stats.likes}
      />
      <Title title="Upload stats"/>
      <Stats events={data}/>
    </div>)
    
};
