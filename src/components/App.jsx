import user from '../user.json';
import Profile from '../components/Profile/Profile';

// import { Title } from './Statistics/title/Title';
import data from '../data.json';
import {StatsBoard} from './Statistics/StatsBoard/StatsBoard'


import {FriendListItem} from './Friends/FriendListItem/FriendListItem'
import friends from '../friends.json'


import transactions from '../transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory/TransactionHistory';


export const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        location={user.location}
        tag={user.tag}
         stats={user.stats}
      />
      
      <StatsBoard title="Upload stats" stats={data}/>
      

      <FriendListItem friends={friends} />

     
      <TransactionHistory transactions={transactions} />
     
    </div>)
    
};
