/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { produce } from 'immer';
import Draggable from 'react-draggable';
import { createPost } from '../../actions';
import withRouter from '../withRouter';

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
  };

  onTagChange = (event) => {
    this.setState(produce((draft) => {
      draft.post.tags = event.target.value;
    }));
  };

  onContentChange = (event) => {
    this.setState(produce((draft) => {
      draft.post.content = event.target.value;
    }));
  };

  onCoverURLChange = (event) => {
    this.setState(produce((draft) => {
      draft.post.coverUrl = event.target.value;
    }));
  };

  onSubmit = () => {
    createPost(this.state.post, this.props.navigate);
  };

  render() {
    return (
      <Draggable>
        <div className="window new-post-window">
          <div className="title-bar">
            <div className="title-bar-text">Create New Post</div>
            <div className="title-bar-controls">
              <button type="button" aria-label="Minimize" />
              <button type="button" aria-label="Maximize" />
              <button type="button" aria-label="Close" />
            </div>
          </div>
          <div id="createPostForm">
            <div className="field-row-stacked">
              <label htmlFor="title"> Title </label>
              <input onChange={this.onTitleChange} id="title" name="title" type="title" placeholder="Post Title" />
            </div>

            <div className="field-row-stacked">
              <label htmlFor="tags"> Tags </label>
              <br /><input onChange={this.onTagChange} id="tags" name="tags" type="tags" placeholder="Tags" />
            </div>
            <div className="field-row-stacked">
              <label htmlFor="content"> Content </label>
              <input className="content-input" onChange={this.onContentChange} id="content" name="content" type="content" placeholder="Content" />
            </div>
            <div className="field-row-stacked">
              <label htmlFor="coverImageUrl"> Cover Image URL  </label>
              <input onChange={this.onCoverURLChange} id="url" name="url" type="url" placeholder="Image Url" />
            </div>
            <button type="button" aria-label="button" onClick={this.onSubmit}> Create Posting </button>
          </div>
        </div>
      </Draggable>

    );
  }
}

export default withRouter(connect(null, { createPost })(NewPost));
