import * as LoginActions from '../actions/LoginActions';

export default function LoginReducer(state = { data: [], isLoggedIn: false },
    action) {
  switch (action.type) {
    case 'Login_SUCCESS':
      state = {
          ...state,
          isLoggedIn: action.isLoggedIn,
        };
      return state;
    case 'UPDATE_INPUT':
      state = {
        ...state,
        [action.event.target.name]: action.event.target.value,
      };
      return state;
    default:
      return state;
  }

}
