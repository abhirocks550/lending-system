import * as PostActions from '../actions/postActions';

export default function PostReducer(state = { data: [] }, action) {
  switch (action.type) {
    case 'GET_POSTS_SUCCESS':
      state = {
        ...state,
        data: action.posts.data,
      };
      break;
  }
  return state;
}
