import axios from 'axios';

export function GetLenders() {
  return (dispatch, getState) => {
      return axios.get('http://10.118.4.42:8080/user/listOfLenders')
      .then(res => {
          dispatch(GetLendersSuccess(res.data));
        });
    };
}

export function GetLendersSuccess(lenders) {
  return {
          type: 'LENDERS_SUCCESS',
          lenders: lenders,
        };
}

export function UpdateInput(event) {
  debugger;
  return {
        type: 'LENDER_UPDATE_INPUT',
        event,
      };
}