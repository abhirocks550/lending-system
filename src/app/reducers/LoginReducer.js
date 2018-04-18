import * as LoginActions from '../actions/LoginActions';

export default function LoginReducer(state = { data: [], isLoggedIn: false, userDetails: {} },
    action) {
  switch (action.type) {
    case 'Login_SUCCESS':
      state = {
          ...state,
          isLoggedIn: action.isLoggedIn,
          userDetails: action.user,
        };
      return state;
    case 'UPDATE_INPUT':
      state = {
        ...state,
        [action.event.target.name]: action.event.target.value,
      };
      return state;
    case 'INITIAL_LOGIN':
      state = {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };
      return state;
    default:
      return state;
  }

}
