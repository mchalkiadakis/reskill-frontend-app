import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import PostsList from './components/PostsList';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SinglePost from './components/SinglePost';
import Header from './components/Header';

function App() {
  const [loading, setLoading] = useState(true); 
  const [photos, setPhotos] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/posts');
        setPosts(response.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/photos');
        setPhotos(response.data); 
      } catch (error) {
        console.error('Error fetching photos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <Router>
      <Routes>
        {/* Home page route*/}
        <Route 
          path="/" 
          element={
            <div className="min-h-screen flex flex-col">
              {/* Header Section */}
              
              <Header/>

              {/* Posts List */}
              <div className="mb-20"></div>
              {/* Alignment div p-4 */}
              <div className="p-4">
                <PostsList photos={photos} loading={loading} posts={posts} />




                <Footer />
              </div>

            </div>
          }
        />

        {/* Single Post page route*/}
        <Route path="/post/:id" element={<SinglePost />} />
      </Routes>
    </Router>
  );
}

export default App;
