import axios from 'axios';

//Read
export function GetPosts() {
  return (dispatch, getState) => {
      return axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
          dispatch(GetPostsSuccess(res));
        });
    };
}

// Update Input
export function UpdateInput(event) {
  return {
        type: 'POSTS_UPDATE_INPUT',
        data: event.target,
      };
}

export function GetPostsSuccess(posts) {
  return {
      type: 'GET_POSTS_SUCCESS',
      posts,
    };
}

// Create post
export function SavePost(post) {
  return (dispatch, getState) => {
      return axios.post('https://jsonplaceholder.typicode.com/posts', {
        post,
      })
      .then(res => {
          dispatch(SavePostsSuccess(res));
        });
    };
}

export function SavePostsSuccess(post) {
  return {
      type: 'SAVE_POSTS_SUCCESS',
      post,
    };
}

