
import React from 'react';
import GridPhoto from './GridPhoto';

const PhotoGrid = ({ photos }) => {
  return (
    <div className="grid grid-cols-3 gap-y-10 gap-4 mt-10">
      {photos.slice(0, 9).map((photo, index) => (
        <div key={index} className="w-full">
         <GridPhoto
          key={index}
          photo={photo}
         
        />
        
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
