import user from 'components/dataSet/user.json';
import UsersProfileList from 'components/profile/ProfileList';

import data from 'components/dataSet/data.json';
import StatisticsList from 'components/statistics/StatisticList';

import friends from 'components/dataSet/friends.json';
import FriendList from 'components/friend/FriendList';

import transactions from 'components/dataSet/transactions.json';
import TransactionHistory from 'components/transactions/TransactionHistory';

export const App = () => {
  return (
    <div>
      <UsersProfileList userCard={user} />
      <StatisticsList title="Upload stats" stats={data} />
      <StatisticsList stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
