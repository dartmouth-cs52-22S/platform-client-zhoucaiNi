import React from 'react';
import './style.scss';
import {
  BrowserRouter as Router, Routes, Route, NavLink,
} from 'react-router-dom';
// import Post from './components/Post/NewPost';
import NewPost from './components/Post/NewPost';
import Posts from './components/Post/Posts';
import PostDetails from './components/Post/PostDetail';

function FallBack(props) {
  return <div>post not found </div>;
}

function App(props) {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/posts/new" element={<NewPost />} />
          <Route path="/posts/:postID" element={<PostDetails />} />
          <Route path="*" element={FallBack} />
        </Routes>
      </div>
    </Router>
  );
}

function Nav(props) {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Epic Blog</NavLink></li>
        <li><NavLink to="/posts/new">New Post</NavLink></li>
        {/* <li><NavLink to="/test/">test id1</NavLink></li> */}
        {/* <li><NavLink to="/test/id2">test id2</NavLink></li> */}
      </ul>
    </nav>
  );
}

export default App;
