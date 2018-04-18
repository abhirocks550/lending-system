import * as transAction from '../actions/TransactionActions.js';

export default function TransactionReducer(state={ transList: [] }, action) {
  switch (action.type) {
    case 'TRANSACTIONS_SUCCESS':
      state = {
        ...state,
        transList: action.transList,
      };
      return state;
    default:
      return state;
  }
}