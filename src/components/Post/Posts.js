import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';
import Post from './Post';
import '../../style.scss';

class Posts extends Component {
  // eslint-disable-next-line no-useless-constructor
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    console.log('component');
    this.props.fetchPosts();
  }

  render() {
    console.log(this);

    const postList = this.props.posts.map((post) => {
      return <Post key={post.id} post={post} />;
    });
    return (
      <div>
        <h1> Posts Page Test </h1>
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
