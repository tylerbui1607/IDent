import {constants} from "../constants"

const initialState = {
  status: constants.LOADING,

}

export function appointment (state = initialState , action)
{
    console.log('appointmentReducers',action);
    switch(action.type){
        case constants.GET_APPOINTMENT_SUCCESS:
            return{
                status:constants.SUCCESS,
                appointments: action.appointments,
            }
            case constants.GET_APPOINTMENT_FAILURE:
                return {
                  message: action.message,
                };
            default:
                return state;
    }
}