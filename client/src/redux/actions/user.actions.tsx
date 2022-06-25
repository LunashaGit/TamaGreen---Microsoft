import axios from "axios";

export const GET_USER = "GET_USER";
export const UPDATE_STATS = "UPDATE_STATS";

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

export const updateStats = (userId: any, data: any) => {
  return (dispatch: any) => {
    return axios
      .put(`${process.env.REACT_APP_API_URL}api/user/${userId}`, data)
      .then((res) => {
        dispatch({
          type: UPDATE_STATS,
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };
};
