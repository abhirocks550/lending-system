import axios from 'axios';

//Read
export function UserLoggedIn() {
  return (dispatch, getState) => {
    //   return axios.get('https://jsonplaceholder.typicode.com/comments')
    //   .then(res => {
    //       dispatch(GetCommentsSuccess(res));
    //       dispatch(SetInitalPosts(10));
    //     })
      dispatch(LoginSuccess(true));
    };
}

export function LoginSuccess(isLoggedIn) {
  return {
        type: 'Login_SUCCESS',
        isLoggedIn: isLoggedIn,
      };
}
