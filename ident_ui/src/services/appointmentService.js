import {constants as c} from "../constants"


function getUserAppointments(id) {

    return fetch(`${c.apiUrl}/appointments/by_user/${id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        return json;
      });
  }

  export const appointmentServices = {
    getUserAppointments,
  }