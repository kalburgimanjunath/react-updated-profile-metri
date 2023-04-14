import React from 'react';
import { useParams } from 'react-router-dom';
export default function Profile({ users }) {
  const { id } = useParams();
  const profileData =
    users &&
    users.filter((item) => {
      return item.id == id;
    });
  console.log(profileData[0]);
  return (
    <div>
      <div>
        <div>
          {/* about  */}
          <h3>About {profileData[0].name}</h3>
        </div>
        <div>{/* basic details */}</div>
        <div>{/* contact details */}</div>
        <div>{/* family details */}</div>
        <div>{/* career details */}</div>
      </div>
    </div>
  );
}
