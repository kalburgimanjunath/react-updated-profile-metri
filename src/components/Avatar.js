import React from 'react';
export default function Avatar({ name, image }) {
  return (
    <div className="avatar">
      <div className="avatar-image-container">
        <img
          className="avatar-image"
          src={image}
          style={{ width: 100, height: 100 }}
        />
      </div>
      <div>{name}</div>
    </div>
  );
}
