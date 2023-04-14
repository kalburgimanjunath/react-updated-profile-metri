import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  Dashboard,
  Profiles,
  Search,
  Inbox,
  Subscription,
  Profile,
} from './pages/';
import { Navbar } from './components/';
import { USERS } from './data/users';
export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/search" element={<Search users={USERS} />}></Route>
        <Route path="/profiles" element={<Profiles users={USERS} />}></Route>
        <Route
          path={`/profile/:id`}
          element={<Profile users={USERS} />}
        ></Route>
        <Route path="/dashboard" element={<Dashboard users={USERS} />}></Route>
        <Route path="/inbox" element={<Inbox users={USERS} />}></Route>
        <Route
          path="/subscription"
          element={<Subscription users={USERS} />}
        ></Route>
        <Route path="/" exact element={<Home users={USERS} />}></Route>
      </Routes>
    </div>
  );
}
