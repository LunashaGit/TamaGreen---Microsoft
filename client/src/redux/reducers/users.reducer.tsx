import { GET_USERS } from "../actions/users.actions";

const initialState = {};

export default function usersReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    default:
      return state;
  }
}
