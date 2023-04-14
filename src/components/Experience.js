import React from 'react';
import { EXPERIENCE } from '../data/experience';
export default function Experience({ details }) {
  const filterData =
    EXPERIENCE &&
    EXPERIENCE.filter((item) => {
      return item.userId == details.id;
    });
  return (
    <>
      {filterData && filterData.length > 0 ? (
        <>
          <h4>Experience Details</h4>
          <ol>
            {filterData &&
              filterData.map((item) => {
                return (
                  <li>
                    <div>
                      {item.jobtitle} at
                      {item.company} {item.yearFrom} - {item.yearTo}
                    </div>
                    <div>Major in {item.major}</div>
                    <div>Description: {item.description}</div>
                    <div>Achievements : {item.achievements}</div>
                    <div>certificates:{item.certificates}</div>
                  </li>
                );
              })}
          </ol>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
}
