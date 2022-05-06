/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { produce } from 'immer';
import { createPost } from '../../actions';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        title: '',
        tags: '',
        coverUrl: '',
        content: '',
      },
    };
  }

  onTitleChange = (event) => {
    this.setState(produce((draft) => {
      draft.post.title = event.target.value;
    }));
    // this.props.onSearchChange(event.target.value);
    console.log(event.target.value);
  };

  onTagChange = (event) => {
    this.setState(produce((draft) => {
      draft.post.tags = event.target.value;
    }));
    // this.props.onSearchChange(event.target.value);
    console.log(event.target.value);
  };

  onContentChange = (event) => {
    this.setState(produce((draft) => {
      draft.post.content = event.target.value;
    }));
    // this.props.onSearchChange(event.target.value);
    console.log(event.target.value);
  };

  onCoverURLChange = (event) => {
    this.setState(produce((draft) => {
      draft.post.coverUrl = event.target.value;
    }));
    // this.props.onSearchChange(event.target.value);
    console.log(event.target.value);
  };

  onSubmit = () => {
    // console.log(this.state.post);
    createPost(this.state.post);
  };

  render() {
    return (
      <div>
        <h1> Create New Post </h1>
        <div id="createPostForm">
          <h1> Create New Post </h1>

          <label htmlFor="title"> Titless
            <input onChange={this.onTitleChange} id="title" name="title" type="title" placeholder="Post Title" />
          </label>

          <label htmlFor="tags"> Tag
            <input onChange={this.onTagChange} id="tags" name="tags" type="tags" placeholder="Tags" />
          </label>

          <label htmlFor="content"> Content
            <input onChange={this.onContentChange} id="content" name="contetn" type="content" placeholder="Content" />
          </label>

          <label htmlFor="coverImageUrl"> Cover Image URL
            <input onChange={this.onCoverURLChange} id="url" name="url" type="url" placeholder="Image Url" />
          </label>
          <input type="submit" onClick={this.onSubmit} />
        </div>
      </div>
    );
  }
}

export default connect(null, { createPost })(NewPost);
