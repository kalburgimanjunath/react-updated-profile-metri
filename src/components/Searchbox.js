import React from 'react';
export default function Searchbox({ search, onChange }) {
  return (
    <div>
      <input type="text" name="search" onChange={onChange} />
    </div>
  );
}
