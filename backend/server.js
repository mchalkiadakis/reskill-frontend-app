const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000; 
app.use(cors());

app.get('/posts', async (req, res) => {
  try {
    const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = await axios.get('https://jsonplaceholder.typicode.com/photos');

    const posts = postsResponse.data;
    const photos = photosResponse.data;

    // Combine posts and photos
    const combinedData = posts.map(post => ({
      ...post,
      photo: photos.find(photo => photo.id === post.id) 
    }));

    res.json(combinedData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error });
  }
});
app.get('/photos', async (req, res) => {
    try {
      const photosResponse = await axios.get('https://jsonplaceholder.typicode.com/photos');
      const photos = photosResponse.data;
  
      res.json(photos); 
    } catch (error) {
      res.status(500).json({ message: 'Error fetching photos', error });
    }
  });


  app.get('/post/:id', async (req, res) => {
    try {
      const postId = req.params.id;

      const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const photoResponse = await axios.get(`https://jsonplaceholder.typicode.com/photos/${postId}`);
  
      const post = postResponse.data;
      const photo = photoResponse.data;
  
      if (!post || Object.keys(post).length === 0) {
        return res.status(404).json({ message: `Post with id ${postId} not found` });
      }
  
      if (!photo || Object.keys(photo).length === 0) {
        return res.status(404).json({ message: `Photo with id ${postId} not found` });
      }

      const combinedData = {
        ...post,
        photo
      };
  
      res.json(combinedData);
    } catch (error) {
      // Handle possible errors
      res.status(500).json({ message: 'Error fetching data', error });
    }
  });

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});