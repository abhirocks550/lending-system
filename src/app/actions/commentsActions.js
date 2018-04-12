import axios from 'axios';

//Read
export function GetComments() {
  return (dispatch, getState) => {
      return axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(res => {
          dispatch(GetCommentsSuccess(res));
          dispatch(SetInitalPosts(10));
        });
    };
}

export function GetCommentsSuccess(comments) {
  return {
      type: 'GET_COMMENTS_SUCCESS',
      comments,
    };
}

export function SetInitalPosts(numberOfPosts) {
  return {
      type: 'SET_POSTS_SUCCESS',
      numberOfPosts,
    };
}
