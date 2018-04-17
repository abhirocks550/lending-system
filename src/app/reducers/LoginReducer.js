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
      break;
    // case 'UPDATE_INPUT':
    //   state = {
    //     ...state,
    //     [action.event.target.name]: action.event.target.value,
    //   };
    //   break;
    //   return state;
    default:
      return state;
  }

}
