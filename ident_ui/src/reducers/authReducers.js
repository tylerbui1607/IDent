import { constants } from "../constants";

let user = JSON.parse(localStorage.getItem("user"));

let initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case constants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case constants.LOGIN_FAILURE:
      return {
        message: action.message,
      };
    case constants.LOGOUT:
      return {};
    default:
      return state;
  }
}
