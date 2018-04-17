import axios from 'axios';

//Read
export function UserLoggedIn() {
  return (dispatch, getState) => {
      return axios.post('http://10.118.4.42:8080/user/login', {
        'username': 'Abhijit',
        'password': 'test',
      })
      .then(res => {
          debugger;
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
