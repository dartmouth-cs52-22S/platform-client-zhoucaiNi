import React from 'react';
import './style.scss';
import {
  BrowserRouter as Router, Routes, Route, NavLink,
} from 'react-router-dom';
// import Post from './components/Post/NewPost';
import { connect, useSelector } from 'react-redux';
import NewPost from './components/Post/NewPost';
import Posts from './components/Post/Posts';
import PostDetails from './components/Post/PostDetail';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import RequireAuth from './components/requireAuth';
import noteIcon from './img/note.png';
import newIcon from './img/new.png';
import { signoutUser } from './actions/index';
// import withRouter from './components/withRouter';

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
          <Route path="/posts/new" element={<RequireAuth> <NewPost /> </RequireAuth>} />
          <Route path="/posts/:postID" element={<PostDetails />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={FallBack} />
        </Routes>
      </Router>
    </div>
  );
}

function Nav(props) {
  const authenticated = useSelector((state) => state.auth.authenticated);
  console.log(` hi you are auth: ${authenticated}`);
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
        <NavLink className="navLink" to="/signup">
          <img src={newIcon} className="note-icon" alt="icon" draggable="false" />
          <p> sign up </p>
        </NavLink>
        <NavLink className="navLink" to="/signin">
          <img src={newIcon} className="note-icon" alt="icon" draggable="false" />
          <p> sign in </p>
        </NavLink>
        { authenticated
          ? (
            <NavLink className="navLink" to="/" onClick={signoutUser()}>
              <img src={newIcon} className="note-icon" alt="icon" draggable="false" />
              <p> sign out </p>
            </NavLink>
          )
          : <div> </div> }
      </div>
    </nav>
  );
}

export default (connect(null, { useSelector })(App));
