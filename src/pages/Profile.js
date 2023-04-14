import React from 'react';
import { useParams } from 'react-router-dom';
import { BasicDetails } from '../components/';
export default function Profile({ users }) {
  const { id } = useParams();
  const profileData =
    users &&
    users.filter((item) => {
      return item.id == id;
    });
  return (
    <div>
      <div>
        <div>
          {/* about  */}
          <h3>About {profileData[0].name}</h3>
        </div>
        <div>
          {/* basic details */}
          <BasicDetails details={profileData[0]} />
        </div>
        <div>{/* contact details */}</div>
        <div>{/* family details */}</div>
        <div>{/* career details */}</div>
      </div>
    </div>
  );
}
