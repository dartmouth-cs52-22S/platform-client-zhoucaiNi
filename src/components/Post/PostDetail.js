/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { produce } from 'immer';
import TextareaAutosize from 'react-textarea-autosize';
import withRouter from '../withRouter';
import { fetchPost, updatePost, deletePost } from '../../actions';
import '../../style.scss';

class PostDetail extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      post: {
        title: '',
        tags: '',
        coverUrl: '',
        content: '',
      },
      isContentEditing: false,
      isTitleEditing: false,
      isTagsEditing: false,
      isCoverUrlEditing: false,
    };
  }

  componentDidMount() {
    this.props.fetchPost(this.props.params.postID.substring(1));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.current !== this.props.current) {
      this.setState(produce((draft) => {
        draft.post = this.props.current;
      }));
    }
  }

  handleContentEditClick = (e) => {
    if (this.state.isContentEditing) {
      this.setState({ isContentEditing: false });
      this.props.updatePost(this.props.params.postID.substring(1), { content: this.state.post.content });
    } else {
      this.setState({ isContentEditing: true });
    }
  };

  handleTitleEditClick = (e) => {
    if (this.state.isTitleEditing) {
      this.setState({ isTitleEditing: false });
      this.props.updatePost(this.props.params.postID.substring(1), { title: this.state.post.title });
    } else {
      this.setState({ isTitleEditing: true });
    }
  };

  handleTagsEditClick = (e) => {
    if (this.state.isTagsEditing) {
      this.setState({ isTagsEditing: false });
      this.props.updatePost(this.props.params.postID.substring(1), { tags: this.state.post.tags });
    } else {
      this.setState({ isTagsEditing: true });
    }
  };

  handleCoverUrlEditClick = (e) => {
    if (this.state.isCoverUrlEditing) {
      this.setState({ isTagsEditing: false });
      this.props.updatePost(this.props.params.postID.substring(1), { coverUrl: this.state.post.coverUrl });
      this.refreshPage();
    } else {
      this.setState({ isCoverUrlEditing: true });
    }
  };

  handleTitleChange = (e) => {
    console.log(e.target.value);
    this.setState(produce((draft) => {
      draft.post.title = e.target.value;
    }));
  };

  handleTagChange = (event) => {
    this.setState(produce((draft) => {
      draft.post.tags = event.target.value;
    }));
  };

  handleContentChange = (event) => {
    this.setState(produce((draft) => {
      draft.post.content = event.target.value;
    }));
  };

  handleCoverUrlChange = (event) => {
    this.setState(produce((draft) => {
      draft.post.coverUrl = event.target.value;
    }));
  };

  editTitle = (event) => {
    if (this.state.isTitleEditing) {
      return (
        <TextareaAutosize
          onChange={this.handleTitleChange}
          className="note-title"
          value={this.state.post.title}
          placeholder="Search..."
          onBlur={this.handleTitleEditClick}
        />
      );
    } else {
      return <h3 onClick={this.handleTitleEditClick}>{this.state.post.title} </h3>;
    }
  };

  editCoverUrl = (event) => {
    if (this.state.isCoverUrlEditing) {
      return (
        <TextareaAutosize
          onChange={this.handleCoverUrlChange}
          className="note-title"
          value={this.state.post.coverUrl}
          placeholder="Search..."
          onBlur={this.handleCoverUrlEditClick}
        />
      );
    } else {
      return <img src={this.state.post.coverUrl} onClick={this.handleCoverUrlEditClick} alt="cover" />;
    }
  };

  editTags = (event) => {
    if (this.state.isTagsEditing) {
      return (
        <TextareaAutosize
          onChange={this.handleTagChange}
          className="note-title"
          value={this.state.post.tags}
          placeholder="Search..."
          onBlur={this.handleTagsEditClick}
        />
      );
    } else {
      return <h5 onClick={this.handleTagsEditClick}>{this.state.post.tags} </h5>;
    }
  };

  editContent = (event) => {
    if (this.state.isContentEditing) {
      return (
        <TextareaAutosize
          onChange={this.handleContentChange}
          className="note-title"
          value={this.state.post.content}
          placeholder="Search..."
          onBlur={this.handleContentEditClick}
        />
      );
    } else {
      return <p onClick={this.handleContentEditClick}>{this.state.post.content} </p>;
    }
  };

  onDeleteClick = (e) => {
    this.props.deletePost(this.props.params.postID.substring(1), this.props.navigate);
  };

  // eslint-disable-next-line class-methods-use-this
  refreshPage = () => {
    window.location.reload();
  };

  render() {
    return (
      <div className="window post-window">
        <div className="title-bar">
          <div className="title-bar-text">A Complete Window</div>
          <div className="title-bar-controls">
            <button type="button" aria-label="Minimize" />
            <button type="button" aria-label="Maximize" />
            <button type="button" aria-label="Close" />
          </div>
        </div>
        <h3> Post Details </h3>
        {this.editCoverUrl()}
        {this.editTitle()}
        {this.editTags()}
        {this.editContent()}
        <button type="button" onClick={this.onDeleteClick}> Delete Post </button>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    current: reduxState.posts.current,
  };
}

export default withRouter(connect(mapStateToProps, { fetchPost, updatePost, deletePost })(PostDetail));
