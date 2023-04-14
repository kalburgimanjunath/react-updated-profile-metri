import React from 'react';
import { USERS } from '../data/users';
import { Cards } from '../components/';
export default function Home({ users }) {
  return (
    <div>
      <Cards
        users={users}
        title="Premium Members"
        subtitle="Recently added premium members"
      />
      <Cards
        users={users}
        title="New Members"
        subtitle="Recently added new members"
      />
      <Cards
        users={users}
        title="Popular"
        subtitle="Most popular profile in the website"
      />
      <Cards users={users} title="Recent visitors" subtitle="" />
    </div>
  );
}
