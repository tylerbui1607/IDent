import { constants } from "../constants";

let initialState = {
  status: constants.LOADING,
};

export function dentist(state = initialState, action) {
  switch (action.type) {
    case constants.GET_DENTISTS_FAILURE:
    case constants.GET_DENTIST_FAILURE:
      return {
        status: constants.FAILURE,
      };
    case constants.GET_DENTISTS_SUCCESS:
    case constants.GET_DENTIST_SUCCESS:
      return {
        status: constants.SUCCESS,
        dentists: action.dentists,
      };
    case constants.GET_SCHEDULE_SUCCESS:
      return {
        ...state,
        schedule: action.schedule,
      };
    case "REMOVE_SCHEDULE":
      return {
        ...state,
        schedule: [],
      };
    default:
      return state;
  }
}
