import React from 'react';
import { NavLink } from 'react-router-dom';

function Post(props) {
  return (
    <div className="post">
      <NavLink to={`/posts/:${props.post.id}`}>
        <img src={props.post.coverUrl} alt="cover" />
        <div> {props.post.title}</div>
        <div> {props.post.tags}</div>
      </NavLink>
    </div>

  );
}

export default Post;
