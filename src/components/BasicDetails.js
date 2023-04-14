import React from 'react';
export default function BasicDetails({ details }) {
  console.log(details);
  return (
    <div>
      <h4>Basic Details</h4>
      <table>
        <tr>
          <td>Address: {details.address}</td>
          <td>Phone: {details.phone}</td>
          <td>Email: {details.email}</td>
        </tr>
      </table>
    </div>
  );
}
