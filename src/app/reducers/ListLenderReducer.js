import * as LisLenderActions from '../actions/ListLenderActions';

export default function ListLenderReducer(state = { lenders: [] },
    action) {
  switch (action.type) {
    case 'LENDERS_SUCCESS':
      state = {
          ...state,
          lenders: action.lenders,
        };
      return state;
    default:
      return state;
  }

}
