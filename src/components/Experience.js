import React from 'react';
import { EXPERIENCE } from '../data/experience';
export default function Experience({ details }) {
  const filterData =
    EXPERIENCE &&
    EXPERIENCE.filter((item) => {
      return item.userId == details.id;
    });
  console.log(filterData);
  return (
    <div>
      <h4>Experience Details</h4>
      <ol>
        {filterData &&
          filterData.map((item) => {
            return (
              <li>
                <div>
                  {item.title} from {item.college} on {item.passingYear}
                </div>
                <div>Major in {item.major}</div>
                <div>Description: {item.description}</div>
                <div>Achievements : {item.achievements}</div>
                <div>certificates:{item.certificates}</div>
              </li>
            );
          })}
      </ol>
    </div>
  );
}
