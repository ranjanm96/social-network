import './App.css';
import Post from './components/Post';
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Modal from '@mui/material/Modal';
import { Button, Input } from '@mui/material';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
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

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = (event) => {
    event.preventDefault();
    // Add your sign-up logic here
    console.log('Sign Up:', { username, password, email });
  };

  return (
    <div className="App">
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <Input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={handleSignUp}>Sign Up</Button>
          </form>
        </div>
      </Modal>
      <div className="app__header">
        <img className="app__headerImage" src="https://cdn.pixabay.com/photo/2025/02/04/23/03/fish-9382908_1280.jpg" alt="Header" />
      </div>
    <Button onClick={() => setOpen(true)}>Sign Up</Button>
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