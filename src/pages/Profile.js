import React from 'react';
import { useParams } from 'react-router-dom';
import { BasicDetails, Education, Experience } from '../components/';
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
          <p>{profileData[0].bio}</p>
        </div>
        <div>{/* basic details */}</div>
        <div>
          {/* contact details */}
          <BasicDetails details={profileData[0]} />
        </div>
        <div>{/* family details */}</div>
        <div>
          {/* education details */}
          <Education details={profileData[0]} />
        </div>
        <div>
          {/* career details */}
          <Experience details={profileData[0]} />
        </div>
      </div>
    </div>
  );
}
