import { UserProfile } from './Profile/Profile';
import user from '../data/user.json';

import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json';

import { FriendList } from './FriendList/FriendList';
import friends from '../data/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

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
