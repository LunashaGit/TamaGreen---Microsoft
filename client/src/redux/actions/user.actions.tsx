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

export const uploadStats = (data: any, id: string) => {
  return (dispatch: any) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}api/user/upload`, data)
      .then((res) => {
        return axios
          .get(`${process.env.REACT_APP_API_URL}api/user/${id}`)
          .then((res) => {
            dispatch({ type: UPLOAD_STATS, payload: res.data });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
};
