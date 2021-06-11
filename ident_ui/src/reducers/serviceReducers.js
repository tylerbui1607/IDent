import { constants } from "../constants";

let initialState = {
  status: constants.LOADING,
};

export function service(state = initialState, action) {
  switch (action.type) {
    case constants.GET_SERVICE_FAILURE:
      return {
        status: constants.FAILURE,
      };
    case constants.GET_SERVICE_SUCCESS:
      return {
        status: constants.SUCCESS,
        services: action.services,
      };
    default:
      return state;
  }
}
