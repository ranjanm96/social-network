import './App.css';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <div className="app__header">
        <img className="app__headerImage" src="https://cdn.pixabay.com/photo/2025/02/04/23/03/fish-9382908_1280.jpg" alt="Header" />
      </div>
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;