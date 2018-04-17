import * as LoginActions from '../actions/LoginActions';

export default function LoginReducer(state = { data: [], isLoggedIn: false },
    action) {
  switch (action.type) {
    case 'Login_SUCCESS':
      state = {
          ...state,
          isLoggedIn: action.isLoggedIn,
        };
      break;
  }
  return state;
}
