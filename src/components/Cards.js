import React, { useState } from 'react';
import Avatar from './Avatar';
import { Link } from 'react-router-dom';
export default function Cards({ title, users, subtitle }) {
  const Card = ({ name, id }) => {
    const [isConnected, setConnected] = useState(false);
    return (
      <div className="card">
        <Link to={`./profile/${id}`}>
          <Avatar name={name} image="https://i.pravatar.cc/300" />
        </Link>
        <button type="button" onClick={() => setConnected(!isConnected)}>
          {!isConnected ? 'Connect Now' : 'Connected'}
        </button>
      </div>
    );
  };
  return (
    <div className="cards-main">
      <div className="card-header">
        <h3>{title}</h3>
        <a>See All</a>
      </div>
      <h6>{subtitle}</h6>
      <div className="cards">
        {users &&
          users.map((item) => {
            return <Card name={item.name} id={item.id} />;
          })}
      </div>
    </div>
  );
}
