import axios from 'axios';

const ROOT_URL = 'https://platform.cs52.me/api';
const API_KEY = '?key=ZNI';

// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  UPDATE_POST: 'UPDATE_POST',
  CREATE_POST: 'CREATE_POST',
  DELETE_POST: 'DELETE_POST',
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
  console.log('df');
  axios.post(`${ROOT_URL}/posts${API_KEY}`, post)
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
    axios.put(`${ROOT_URL}/posts/${id}/${API_KEY}`, change)
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
    axios.delete(`${ROOT_URL}/posts/${id}/${API_KEY}`)
      .then((response) => {
        console.log(response);
        navigate('/');
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  };
}
