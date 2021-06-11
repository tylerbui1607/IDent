import { serviceServices } from "../services/serviceServices";
import { constants } from "../constants";
function getAllService() {
  return (dispatch) => {
    serviceServices.getAllService().then((res) => {
      if (res.docs) dispatch(success(res.docs));
      else dispatch(failure(res.message));
    });
  };

  function success(services) {
    return { type: constants.GET_SERVICE_SUCCESS, services };
  }
  function failure(message) {
    return { type: constants.GET_DENTISTS_FAILURE, message };
  }
}

export const serviceActions = {
  getAllService,
};
