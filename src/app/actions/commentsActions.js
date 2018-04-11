import axios from 'axios';

//Read
export function GetComments() {
  return (dispatch, getState) => {
      return axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(res => {
          dispatch(GetCommentsSuccess(res));
        });
    };
}

export function GetCommentsSuccess(comments) {
  return {
      type: 'GET_COMMENTS_SUCCESS',
      comments,
    };
}
