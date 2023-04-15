import React, { useState, useEffect } from 'react';
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
import { Navbar, Searchbox } from './components/';
import { USERS } from './data/users';
export default function App() {
  const [search, searchclicked] = useState('');
  const [filterData, setFilterData] = useState(USERS);
    if (search.length > 0) {
      const filterData =
        USERS &&
        USERS.includes((item) => {
          return item.name == search;
        });
      setFilterData(filterData);
    }
  return (
    <div>
      <Navbar />
      <Searchbox
        value={search}
        onChange={(e) => searchclicked(e.target.value)}
      />
      <Routes>
        <Route path="/search" element={<Search users={filterData} />}></Route>
        <Route
          path="/profiles"
          element={<Profiles users={filterData} />}
        ></Route>
        <Route
          path={`/profile/:id`}
          element={<Profile users={filterData} />}
        ></Route>
        <Route
          path="/dashboard"
          element={<Dashboard users={filterData} />}
        ></Route>
        <Route path="/inbox" element={<Inbox users={filterData} />}></Route>
        <Route
          path="/subscription"
          element={<Subscription users={filterData} />}
        ></Route>
        <Route path="/" exact element={<Home users={filterData} />}></Route>
      </Routes>
    </div>
  );
}
