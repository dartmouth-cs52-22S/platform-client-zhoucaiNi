import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Draggable from 'react-draggable';
import { fetchPosts } from '../../actions';
import Post from './Post';
import '../../style.scss';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const postList = this.props.posts.map((post) => {
      return <Post key={post.id} post={post} />;
    });
    return (
      <div className="window post-window">
        <div className="title-bar">
          <div className="title-bar-text">Posts</div>
          <div className="title-bar-controls">
            <button type="button" aria-label="Minimize" />
            <button type="button" aria-label="Maximize" />
            <button type="button" aria-label="Close" />
          </div>
        </div>
        <div className="postList">
          {postList}
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    posts: reduxState.posts.all,
  };
}

export default connect(mapStateToProps, { fetchPosts })(Posts);
