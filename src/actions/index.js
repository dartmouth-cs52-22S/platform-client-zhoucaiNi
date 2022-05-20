import axios from 'axios';

// const ROOT_URL = 'http://localhost:9090/api';
// const ROOT_URL = 'https://platform.cs52.me/api';
const ROOT_URL = 'https://zhoucai-api-with-auth.onrender.com';
const API_KEY = '?key=ZNI';

// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  UPDATE_POST: 'UPDATE_POST',
  CREATE_POST: 'CREATE_POST',
  DELETE_POST: 'DELETE_POST',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
};

export function fetchPosts() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`)
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_POSTS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
        // might you also want an ERROR_CLEAR action?
      });
  };
}

export function createPost(post, navigate) {
/* axios post */
  axios.post(`${ROOT_URL}/posts`, post, { headers: { authorization: localStorage.getItem('token') } })
    .then((response) => {
      console.log(response);
      navigate('/');
    })
    .catch((error) => {
      this.setState({ errorMessage: error.message });
      console.error('There was an error!', error);
    });
}

export function fetchPost(id) { /* axios put */
  console.log(`${ROOT_URL}/posts/${id}/${API_KEY}`);
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}/${API_KEY}`)
      .then((response) => {
        // once we are done fetching we can dispatch a redux action with the response data
        dispatch({ type: ActionTypes.FETCH_POST, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
        // might you also want an ERROR_CLEAR action?
      });
  };
}

export function updatePost(id, change) { /* axios get */
  console.log(`${ROOT_URL}/posts/${id}/${API_KEY}`);
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${id}/${API_KEY}`, change, { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  };
}

/* axios delete */
export function deletePost(id, navigate) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}/${API_KEY}`, { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        console.log(response);
        navigate('/');
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  };
}

// trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

export function signinUser({ email, password }, navigate) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signin endpoint and passes in { email, password}
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  localStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign In Failed: ${error.response.data}`));
  console.log('action sign in hit');
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin${API_KEY}`, { email, password })
      .then((response) => {
        console.log(response);
        dispatch({ type: ActionTypes.AUTH_USER });
        localStorage.setItem('token', response.data.token);
        navigate('/');
      })
      .catch((error) => {
        console.log(error.response);
        dispatch(authError(`Sign In Failed: ${error.response.data}`));
        console.error('There was an error!', error);
      });
  };
}

export function signupUser({ userName, email, password }, navigate) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signup endpoint (only difference from above)
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  localStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign Up Failed: ${error.response.data}`));
  console.log('action sign up hit');
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup${API_KEY}`, { userName, email, password })
      .then((response) => {
        console.log(response);
        dispatch({ type: ActionTypes.AUTH_USER });
        localStorage.setItem('token', response.data.token);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        // this.setState({ errorMessage: error.message });
        dispatch(authError(`Sign In Failed: ${error.response.data}`));
        console.error('There was an error!', error);
      });
  };
}

// deletes token from localstorage
// and deauths
export function signoutUser(navigate) {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    navigate('/');
  };
}
