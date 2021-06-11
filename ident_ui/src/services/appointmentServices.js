import { constants as c } from "../constants";

function makeAppointment(appointment) {
  let requestOption = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(appointment),
  };
  return fetch(`${c.apiUrl}/appointments`, requestOption)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      return json;
    });
}
export const appointmentServices = {
  makeAppointment,
};
