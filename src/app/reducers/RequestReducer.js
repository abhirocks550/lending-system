import * as reqAction from '../actions/RequestActions.js';

export default function RequestReducer(state={ reqList: [] }, action) {
  switch (action.type) {
    case 'REQUEST_SUCCESS':
      state = {
        ...state,
        reqList: action.reqList,
      };
      return state;
    default:
      return state;
  }
}