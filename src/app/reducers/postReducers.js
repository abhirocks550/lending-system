import * as PostActions from '../actions/postActions';

export default function PostReducer(state = { data: [], title: '', body: '' }, action) {
  switch (action.type) {
    case 'GET_POSTS_SUCCESS':
      state = {
        ...state,
        data: action.posts.data,
      };
      break;
    case 'SET_POSTS_SUCCESS':
      state = {
        ...state,
        initialPosts: action.numberOfPosts,
      };
      break;
    case 'POSTS_UPDATE_INPUT':
      state = {
        ...state,
        [action.data.name]: action.data.value,
      };
      break;
    case 'SAVE_POSTS_SUCCESS':
      state = {
        ...state,
        data: [...state.data, action.post.data],
      };
      break;
  }
  return state;
}
