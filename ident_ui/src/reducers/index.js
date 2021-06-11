import { combineReducers } from "redux";

import { authentication } from "./authReducers";
import { application } from "./appReducers";
import { dentist } from "./dentistReducers";
import { service } from "./serviceReducers";
import { appointment } from "./appointment";

const rootReducer = combineReducers({
  authentication,
  application,
  dentist,
  service,
  appointment,
});

export default rootReducer;
