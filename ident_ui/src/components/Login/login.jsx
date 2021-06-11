import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import LoginForm from './child/loginForm';
import SignupForm from './child/signupForm';
import { appActions } from '../../actions/appActions';

function Login() {

  const [currentForm, setCurrentForm] = useState('login')

  const dispatch = useDispatch();

  function toggleForm() {
    console.log('toggle form');
    let form = currentForm === 'login' ? 'signup' : 'login';
    setCurrentForm(form);
  }

  function handleCloseForm() {
    dispatch(appActions.hidePopup());
  }

  return (
    <div className="login-container center">
      <button className="close-btn" onClick={handleCloseForm}>X</button>
      <div className="img-container">
        <img src="/login_banner.png" className='center' alt="#" />
      </div>
      <div className="form-container">
        {currentForm === 'login'
          ? <LoginForm onToggle={toggleForm} />
          : <SignupForm onToggle={toggleForm} />
        }
      </div>
    </div>
  )
}

export { Login }