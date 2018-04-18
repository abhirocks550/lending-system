import axios from 'axios';

export function GetTransactions() {
  return (dispatch, getState) => {
      return axios.get('http://10.118.4.42:8080/transaction')
      .then(res => {
          dispatch(GetTransactionsSuccess(res.data));
        });
    };
}

export function GetTransactionsSuccess(transList) {
  return {
          type: 'TRANSACTIONS_SUCCESS',
          transList: transList,
        };
}
