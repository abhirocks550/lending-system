import * as CommentActions from '../actions/commentsActions';

export default function CommentReducer(state = { data: [], isLoggedIn: false },
    action) {
  switch (action.type) {
    case 'GET_COMMENTS_SUCCESS':
      state = {
        ...state,
        data: action.comments.data,
      };
      break;
    case 'USER_LOGGED_IN':
      state = {
          ...state,
          isLoggedIn: action.isLoggedIn,
        };
      break;
  }
  return state;
}
