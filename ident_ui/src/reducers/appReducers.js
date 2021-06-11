import { constants } from "../constants";

const initialState = { popupType: "", message: "" };

export function application(state = initialState, action) {
  switch (action.type) {
    case constants.POPUP_LOGIN:
      return {
        ...state,
        popupType: "login",
      };
    case constants.HIDE_POPUP:
    case constants.LOGIN_SUCCESS:
      return {
        ...state,
        popupType: "",
      };
    case constants.POPUP_FORGOTPASS:
      return {
        ...state,
        popupType: "forgotpass",
      };
    case constants.MAKE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        message: "Your appointment was successfully create !",
        popupType: "result",
      };
    case constants.MAKE_APPOINTMENT_FAILURE:
      return {
        ...state,
        message: "Something went wrong please try again latter !",
        popupType: "result",
      };
    default:
      return state;
  }
}
