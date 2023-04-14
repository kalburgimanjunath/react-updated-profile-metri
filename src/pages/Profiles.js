import React from 'react';
import { Cards } from '../components/';
import { USERS } from '../data/users';
export default function Profiles() {
  return (
    <>
      <Cards
        users={USERS}
        title="Premium Members"
        subtitle="Recently added premium members"
      />
      <Cards
        users={USERS}
        title="New Members"
        subtitle="Recently added new members"
      />
      <Cards
        users={USERS}
        title="Popular"
        subtitle="Most popular profile in the website"
      />
      <Cards users={USERS} title="Recent visitors" subtitle="" />
    </>
  );
}
