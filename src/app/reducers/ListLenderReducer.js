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
    case 'LENDER_UPDATE_INPUT':
      state = {
        ...state,
        [action.event.target.name]: action.event.target.value,
      };
      return state;
    default:
      return state;
  }

}
