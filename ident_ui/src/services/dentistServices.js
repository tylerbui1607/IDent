import { constants as c } from "../constants";

function getAllDentist() {
  let requestOption = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${c.apiUrl}/dentists`, requestOption)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      return json;
    });
}

function getDentistSchedule(id) {
  let requestOption = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${c.apiUrl}/schedules?dentist=${id}`, requestOption)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      return json;
    });
}
export const dentistsServices = {
  getAllDentist,
  getDentistSchedule,
};
