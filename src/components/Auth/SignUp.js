/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { produce } from 'immer';
import { signupUser } from '../../actions';
import withRouter from '../withRouter';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userName: '',
        email: '',
        password: '',
      },
    };
  }

  onUserNameChange = (event) => {
    this.setState(produce((draft) => {
      draft.user.userName = event.target.value;
    }));
  };

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
    console.log('signup');
    this.props.signupUser(this.state.user, this.props.navigate);
  };

  render() {
    return (
      <div className="window new-post-window">
        <div className="title-bar">
          <div className="title-bar-text"> sign up </div>
          <div className="title-bar-controls">
            <button type="button" aria-label="Minimize" />
            <button type="button" aria-label="Maximize" />
            <button type="button" aria-label="Close" />
          </div>
        </div>
        <div id="createPostForm">

          <div className="field-row-stacked">
            <label htmlFor="name"> Name: </label>
            <input onChange={this.onUserNameChange} id="name" name="name" type="text" placeholder="name" />
          </div>

          <div className="field-row-stacked">
            <label htmlFor="title"> Email: </label>
            <input onChange={this.onEmailChange} id="email" name="email" type="email" placeholder="email" />
          </div>

          <div className="field-row-stacked">
            <label htmlFor="tags"> Password: </label>
            <br /><input onChange={this.onPasswordChange} id="password" name="password" type="password" placeholder="password" />
          </div>
          <button type="button" aria-label="button" onClick={this.onSubmit}> sign up </button>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { signupUser })(SignUp));
