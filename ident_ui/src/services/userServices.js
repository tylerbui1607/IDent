import { constants } from "../constants";

function login(email, password) {
  console.log("user service");
  let requestOption = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  };
  return fetch(`${constants.apiUrl}/users/login`, requestOption)
    .then((res) => res.json())
    .then((json) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      if (json.user) {
        localStorage.setItem("user", JSON.stringify(json.user));
        localStorage.setItem(
          "token",
          JSON.stringify("Bearer ".concat(json.token))
        );
      }
      console.log(json);
      return json;
    });
}

function logout() {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
}

export const userService = {
  login,
  logout,
};
