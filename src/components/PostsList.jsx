import React from 'react';
import PhotoGrid from './PhotoGrid';

function PostsList({ photos, loading, posts }) {
    if (loading) {
        return <div className="flex-grow flex items-center justify-center">Loading...</div>;
      }
      const firstPhoto = photos[0];
      const secondRowPhotos = photos.slice(1,3);
      const firstpost = posts.slice(0, 1);
      const secondParagraph = (posts.slice(4, 8)).map(post => post.body).join(' ');
      const thirdParagraph = (posts.slice(8,10)).map(post => post.body).join(' ');
      const fourthParagraph = (posts.slice(11,13)).map(post => post.body).join(' ');
      const fifthParagraph = (posts.slice(14,15)).map(post => post.body).join(' ');
      const combinedBodies = firstpost.map(post => post.body).join(' ');

      const photosForGrid = photos.slice(4,13);
     
      const loadingError = 'No posts available.'


  return (




  <main className="flex-grow flex flex-col items-center justify-center">
          
   <div className="w-full max-w-[100%] mx-auto">
        {/* Heading Section (Aligned with the image) */}
        <div className="w-full max-w-2xl text-left mb-6">
          <h1 className="text-5xl font-bold text-black-900">Posts List</h1>
          <div className="mb-8"></div>
          {/* Subheading */}
          <h3 className="text-lg text-gray-600 mb-6">
            A list of posts retrieved from the API
          </h3> 
        </div>

        {/* Photo 1 */}
        <div className="w-full max-w-[100%]">
          {firstPhoto ? (
            <img
              src={firstPhoto.url}
              alt={firstPhoto.title}
              className="w-full h-[75vh] object-cover rounded shadow-md"
            />
          ) : (
            <p>{loadingError}</p>
          )}
        </div>
        
        <div className="mb-20"></div>
      <div className="w-full max-w-[50%] mx-auto">
       {/* 2 Paragraphs Section */}
        
          {combinedBodies ? (
            <p className="text-left mb-4 text-black-800 text-base">
              {combinedBodies} {/* First paragraph */}
            </p>
          ) : (
            <p>{loadingError}</p>
          )}

          {secondParagraph ? (
            <p className="text-left mb-4 text-black-800 text-base">
              {secondParagraph} {/* Second paragraph */}
            </p>
          ) : (
            <p>{loadingError}</p>
          )}

          {thirdParagraph ? (
            <p className="text-left mb-4 text-black-800 text-base">
              {thirdParagraph} {/* Third paragraph */}
            </p>
          ) : (
            <p>{loadingError}</p>
          )}

      </div>
      <div className="mb-20"></div>
          <div className="flex w-full max-w-[100%] mt-8 gap-4">
            <div className="w-1/2">
            {secondRowPhotos[0] ? (
            <img
              src={secondRowPhotos[0].url}
              alt={secondRowPhotos[0].title}
              className="w-full h-[50vh] object-cover rounded shadow-md"
            />
          ) : (
            <p>{loadingError}</p>
          )}
            </div>
            <div className="w-1/2">
            {secondRowPhotos[1] ? (
            <img
              src={secondRowPhotos[1].url}
              alt={secondRowPhotos[1].title}
              className="w-full h-[50vh] object-cover rounded shadow-md"
            />
          ) : (
            <p>{loadingError}</p>
          )}
        </div>

      </div>


      <div className="mb-20"></div>

      <div className="w-full max-w-[50%] mx-auto">
       {/* Paragraphs Section beneath the two phots*/}
        
          {fourthParagraph ? (
            <p className="text-left mb-4 text-black-800 text-base">
              {fourthParagraph} {/* fourth paragraph */}
            </p>
          ) : (
            <p>{loadingError}</p>
          )}

          {fifthParagraph ? (
            <p className="text-left mb-4 text-black-800 text-base">
              {fifthParagraph} {/* fifth paragraph */}
            </p>
          ) : (
            <p>{loadingError}</p>
          )}

          

      </div>

      {/* 3x3 Photo Grid */}
      <h2 className="text-4xl font-bold text-left mb-3 mt-10">Related articles or posts</h2>
      <PhotoGrid photos={photosForGrid} />
      <div className="mb-20"></div>
    </div>
  </main>
        );
}

export default PostsList;