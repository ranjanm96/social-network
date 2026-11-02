import './App.css';
import Post from './components/Post';
import React, { useState } from 'react';

function App() {
  const [posts, setPosts] = useState([
    {
      username: "TWD",
      caption: "Build a Messaging app with MERN Stack&#x1F525;",
      imageUrl: "https://cdn.pixabay.com/photo/2025/02/04/23/03/fish-9382908_1280.jpg",
      number: 1
    },
    {
      username: "nabendu82",
      caption: "Such a beautiful world",
      imageUrl: "https://quotefancy.com/media/wallpaper/3840x2160/126631-Charles-Dickens-Quote-And-a-beautiful-world-you-live-in-when-it-is.jpg",
      number: 2
     }
  ])
  return (
    <div className="App">
      <div className="app__header">
        <img className="app__headerImage" src="https://cdn.pixabay.com/photo/2025/02/04/23/03/fish-9382908_1280.jpg" alt="Header" />
      </div>
      {posts.map((post, index) => (
        <Post
          key={index}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
          number={post.number}
        />
      ))}
    </div>
  );
}

export default App;