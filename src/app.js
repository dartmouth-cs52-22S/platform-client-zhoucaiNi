import React from 'react';
import './style.scss';
import {
  BrowserRouter as Router, Routes, Route, NavLink,
} from 'react-router-dom';
// import Post from './components/Post/NewPost';
import NewPost from './components/Post/NewPost';
import Posts from './components/Post/Posts';
import PostDetails from './components/Post/PostDetail';
import noteIcon from './img/note.png';
import newIcon from './img/new.png';

function FallBack(props) {
  return <div>post not found </div>;
}

function App(props) {
  return (
    <div className="main">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/posts/new" element={<NewPost />} />
          <Route path="/posts/:postID" element={<PostDetails />} />
          <Route path="*" element={FallBack} />
        </Routes>
      </Router>
    </div>
  );
}

function Nav(props) {
  return (
    <nav>
      <div className="nav">
        <NavLink className="navLink" to="/">
          <img src={noteIcon} className="note-icon" alt="icon" draggable="false" />
          <p> Post Board </p>
        </NavLink>
        <NavLink className="navLink" to="/posts/new">
          <img src={newIcon} className="note-icon" alt="icon" draggable="false" />
          <p> Create Posting </p>
        </NavLink>
      </div>

    </nav>
  );
}

export default App;
