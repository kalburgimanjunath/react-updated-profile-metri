import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BasicDetails, Education, Experience, Avatar } from '../components/';
export default function Profile({ users }) {
  const [isConnected, setConnected] = useState(false);
  const { id } = useParams();
  const profileData =
    users &&
    users.filter((item) => {
      return item.id == id;
    });
  return (
    <div className="profile">
      <div>
        <div>
          <Avatar name={profileData[0].name} />
          <button type="button" onClick={() => setConnected(!isConnected)}>
            {!isConnected ? 'Connect Now' : 'Invitation Sent'}
          </button>
          <h3>About {profileData[0].name}</h3>
          <p>{profileData[0].bio}</p>
        </div>
        <div>{/* basic details */}</div>
        <div>
          <BasicDetails details={profileData[0]} />
        </div>
        <div>{/* family details */}</div>
        <div>
          <Education details={profileData[0]} />
        </div>
        <div>
          <Experience details={profileData[0]} />
        </div>
      </div>
    </div>
  );
}
