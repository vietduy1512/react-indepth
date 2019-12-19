import { FETCH_POSTS, NEW_POST } from "./types";

// Basic redux way which - return object
export const basicCreatePost = post => ({
  type: NEW_POST,
  payload: post
});


// Using react-thunk which - return function
export const fetchPosts = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const thunkCreatePost = post => dispatch => {
  dispatch({
    type: NEW_POST,
    payload: post
  });
};