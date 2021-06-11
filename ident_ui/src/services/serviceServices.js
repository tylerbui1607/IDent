import { constants as c } from "../constants";

function getAllService() {
  let requestOption = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${c.apiUrl}/services`, requestOption)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      return json;
    });
}

export const serviceServices = {
  getAllService,
};
