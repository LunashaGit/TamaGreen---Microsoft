import { GET_QUESTION } from "../actions/question.actions";

const initialState = {};

export default function questionReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_QUESTION:
      return action.payload;
    default:
      return state;
  }
}
