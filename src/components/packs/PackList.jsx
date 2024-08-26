import React from 'react';
import Pack from './pack';

const PackList = ({ packs }) => {
  return (
    <div className="pack-list">
    <h1 className='text-2xl'>Maestros en Irlanda</h1>

      {packs.map((pack, index) => (
        <Pack key={index} {...pack} />
      ))}
    </div>
  );
};

export default PackList;
