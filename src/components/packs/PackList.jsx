import React from 'react';
import Pack from './pack';

const PackList = ({ packs }) => {
  return (
    <div className="pack-list flex flex-col items-center mt-5">
    <h1 className='text-2xl'>Maestros en Irlanda</h1>
    {/* Loop through the packs that are inserted from the packsData */}
      {packs.map((pack, index) => (
        <Pack key={index} {...pack} />
      ))}
    </div>
  );
};

export default PackList;
