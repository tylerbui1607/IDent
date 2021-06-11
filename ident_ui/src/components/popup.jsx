import { useSelector } from 'react-redux'

import React from 'react';
import { Login } from './Login';
import ResultPopup from "./resultPopup";
import ForgotPass from './forgetpassword';


function Popup() {

  const popupType = useSelector(state => state.application.popupType);

  console.log(popupType);

  let currentPopup = {
    login: <Login />,
    forgotpass: <ForgotPass />,
    result: <ResultPopup />
  }

  let className = 'popup';

  if (popupType)
    className += ' flex';

  return (
    <div className={className}>
      {currentPopup[popupType]}
    </div>
  )
}

export default Popup