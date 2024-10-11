import React from 'react';

const GridPhoto = ({ photo}) => {
  return (
    
    <div className="w-full">
        
      <img
        src={photo.url}
        alt={photo.title}
        className="w-full h-64 object-cover rounded shadow-md"
      />
      
      <p className="text-left font-semibold">Title</p> 
      <p className="text-left text-gray-600">Author</p> 
    </div>
  );
};

export default GridPhoto;