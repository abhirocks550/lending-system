import * as CommentActions from '../actions/commentsActions';

export default function CommentReducer(state = { data: [] }, action) {
  switch (action.type) {
    case 'GET_COMMENTS_SUCCESS':
      state = {
        ...state,
        data: action.comments.data,
      };
      break;
  }
  return state;
}
