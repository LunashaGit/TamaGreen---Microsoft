import axios from "axios";

export const GET_QUESTION = "GET_QUESTION";

export const getQuestion = () => {
  return (dispatch: any) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/question`)
      .then((res) => {
        dispatch({ type: GET_QUESTION, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
