import axios from 'axios';

export function UserLoggedIn(user) {
  return (dispatch, getState) => {
      return axios.post('http://10.118.4.42:8080/user/login', user)
      .then(res => {
          dispatch(LoginSuccess(true));
        });
    };
}

export function LoginSuccess(isLoggedIn) {
  return {
        type: 'Login_SUCCESS',
        isLoggedIn: isLoggedIn,
      };
}

export function UpdateInput(event) {
  return {
        type: 'UPDATE_INPUT',
        event,
      };
}
