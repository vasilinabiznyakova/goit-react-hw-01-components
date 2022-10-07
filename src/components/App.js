import { UserProfile } from './Profile/Profile';
import user from '../user.json';

import { Statistics } from './Statistics/Statistics';
import data from '../data.json';

import { FriendList } from './FriendList/FriendList';
import friends from '../friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';

import { Box } from './Box';

export const App = () => {
  return (
    <Box width="300px" mr="auto" ml="auto">
      <UserProfile user={user} />
      <Statistics title={'Upload stats'} data={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Box>
  );
};
