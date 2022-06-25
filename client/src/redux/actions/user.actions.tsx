import axios from "axios";

export const GET_USER = "GET_USER";
export const UPLOAD_STATS = "UPLOAD_STATS";

export const getUser = (uid: any) => {
  return (dispatch: any) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/user/${uid}`)
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const updateStats = (id: any, data: any) => {
  return (dispatch: any) => {
    return axios
      .put(`${process.env.REACT_APP_API_URL}api/user/upload/${id}`, data)
      .then((res) => {
        dispatch({ type: UPLOAD_STATS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
