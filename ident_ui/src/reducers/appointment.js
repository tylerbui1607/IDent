import { constants as c } from "../constants";
const initialState = { status: c.LOADING, appointmentStatus: c.LOADING };

export function appointment(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
