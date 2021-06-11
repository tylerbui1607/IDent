import { appointmentServices as services } from "../services/appointmentServices";
import { constants as c } from "../constants";
function makeAppointment(appointment) {
  return (dispatch) => {
    services.makeAppointment(appointment).then((res) => {
      if (res.status === "success") dispatch(success());
      else dispatch(failure(res.message));
    });
  };
  function success() {
    return { type: c.MAKE_APPOINTMENT_SUCCESS };
  }
  function failure(message) {
    return { type: c.MAKE_APPOINTMENT_FAILURE, message };
  }
}

export const appointmentActions = {
  makeAppointment,
};
