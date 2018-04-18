import axios from 'axios';

export function GetRequest(id, role) {
  let url = `http://10.118.4.42:8080/transaction/user?role=${role.toLowerCase()}&userId=${id}`;

  return (dispatch, getState) => {
      return axios.get(url)
      .then(res => {
          dispatch(GetRequestSuccess(res.data));
        });
    };
}

export function GetRequestSuccess(reqList) {
  return {
          type: 'REQUEST_SUCCESS',
          reqList: reqList,
        };
}
