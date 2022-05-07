import React from 'react';
import { NavLink } from 'react-router-dom';

function Post(props) {
  return (
    <div className="post">
      <NavLink className="navLink" to={`/posts/:${props.post.id}`}>
        <img src={props.post.coverUrl} alt="cover" />
        <h3> {props.post.title}</h3>
        <div> {props.post.tags}</div>
      </NavLink>
    </div>

  );
}

export default Post;
