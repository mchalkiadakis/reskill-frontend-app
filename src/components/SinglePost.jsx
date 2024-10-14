import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';
import Header from './Header';

const SinglePost = () => {
  // Extract the 'id' for the url routing
  const { id } = useParams();

  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    
    const fetchSinglePost = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/post/${id}`);
        setPostData(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchSinglePost();
  }, [id]);

  if (loading) {
    return <p>Loading post...</p>;
  }

  if (error || !postData) {
    return <p>There was an error loading the post.</p>;
  }

  const { title, body, photo } = postData;
  const paragraphContent = body.slice(1,50);

  return (
    
    <div className="container mx-auto p-4">
        <Header/>
        <div className="bg-white rounded p-4 flex flex-col lg:flex-row items-start justify-between mt-20">
          {/* text on the left */}
         
            <div className="w-full max-w-2xl text-left mb-6 lg:w-2/3 pr-4">
                <h1 className="text-5xl font-bold text-black-900">Single Post</h1> {/* Main heading */}
                <div className="mb-8"></div>
                <h3 className="text-lg text-gray-600 mb-6">
                  Subheading for description or instructions
                </h3> {/* Subheading */}
              <p className="text-lg text-gray-800 leading-relaxed mb-6">{body}</p>
            </div>
           
         
        
          {/* Post Photo on the Right */}
          {photo && (
            <div className="w-full lg:w-1/3 flex justify-end">
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-[68vh] object-cover rounded"
              />
            </div>
          )}

          
        </div>

        <Footer />
    </div>
  );
};

export default SinglePost;
