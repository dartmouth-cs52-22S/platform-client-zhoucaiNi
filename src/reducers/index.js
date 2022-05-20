// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from '@reduxjs/toolkit';

// import CountReducer from './count-reducer';
import PostsReducer from './postReducer';
import authReducer from './auth-reducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  auth: authReducer,
});
export default rootReducer;
