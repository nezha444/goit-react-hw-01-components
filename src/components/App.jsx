import React from "react";

import { Profile } from "./Profile/Profile.jsx";
import user from "./Profile/user.json"

import { FriendList } from "./Friends/FriendsList.jsx";
import friends from "./Friends/friends.json"

import { Statistics } from "./Statistics/Statistics.jsx";
import data from "./Statistics/data.json"

import { Transactions } from './Transactions/Transactions.jsx'
import transactions from "./Transactions/transactions.json"



export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics stats={data}/>

      <FriendList friends={friends}/>

      <Transactions transaction={transactions} />
    </>

  );
};
