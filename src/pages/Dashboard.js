import React from 'react';
import { Avatar, Cards } from '../components/';

export default function Dashboard({ users }) {
  const Events = () => {
    return <div className="events">Events</div>;
  };
  return (
    <div>
      <div className="profile-section">
        <div>
          <Avatar name="Manjunath Kalburgi" image="https://i.pravatar.cc/300" />
        </div>
        <div>
          <div>User ID:2782828</div>
          <div>Account Type:Free</div>
          <button type="button">Upgrage Now</button>
          <button type="button">Download profile</button>
        </div>
      </div>
      <Events />
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
    </div>
  );
}
