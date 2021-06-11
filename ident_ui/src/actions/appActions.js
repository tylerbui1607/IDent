import { constants } from '../constants';

function changePopup(type){
  return { type }
}

function hidePopup(){
  return {type : constants.HIDE_POPUP}
}

export const appActions = {
  changePopup,
  hidePopup
}