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

export function ApplyLoan(request) {
  return (dispatch, getState) => {
      return axios.post('http://10.118.4.42:8080/transaction/lendingRequest', request)
      .then(res => {
          dispatch(ApplyLoanSuccess());
        });
    };
}

export function ApplyLoanSuccess() {
  return {
          type: 'APPLY_LOAN_SUCCESS',
          isSaved: true,
        };
}

export function UpdateInput(event) {
  return {
        type: 'LENDER_UPDATE_INPUT',
        event,
      };
}