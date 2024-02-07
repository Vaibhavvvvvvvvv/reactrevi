import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const About = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <h1>Posts</h1>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {posts.map((post) => (
          <Card key={post.id} sx={{ minWidth: 275, margin: 1 }}>
            <CardContent>
              <Typography variant="h6" component="div">
                {post.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.body}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default About;
