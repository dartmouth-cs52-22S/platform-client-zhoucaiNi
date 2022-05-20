/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { produce } from 'immer';
import { signinUser } from '../../actions';
import withRouter from '../withRouter';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: '',
      },
    };
  }

  onEmailChange = (event) => {
    this.setState(produce((draft) => {
      draft.user.email = event.target.value;
    }));
  };

  onPasswordChange = (event) => {
    this.setState(produce((draft) => {
      draft.user.password = event.target.value;
    }));
  };

  onSubmit = () => {
    console.log('signin');
    this.props.signinUser(this.state.user, this.props.navigate);
  };

  render() {
    return (
      <div className="window new-post-window">
        <div className="title-bar">
          <div className="title-bar-text"> sign in </div>
          <div className="title-bar-controls">
            <button type="button" aria-label="Minimize" />
            <button type="button" aria-label="Maximize" />
            <button type="button" aria-label="Close" />
          </div>
        </div>
        <div id="createPostForm">
          <div className="field-row-stacked">
            <label htmlFor="title"> Email: </label>
            <input onChange={this.onEmailChange} id="title" name="title" type="title" placeholder="Post Title" />
          </div>

          <div className="field-row-stacked">
            <label htmlFor="tags"> Password: </label>
            <br /><input onChange={this.onPasswordChange} id="tags" name="tags" type="tags" placeholder="Tags" />
          </div>
          <button type="button" aria-label="button" onClick={this.onSubmit}> sign in </button>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { signinUser })(SignIn));
