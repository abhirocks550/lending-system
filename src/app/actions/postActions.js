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

export function GetPostsSuccess(posts) {
  return {
      type: 'GET_POSTS_SUCCESS',
      posts,
    };
}
