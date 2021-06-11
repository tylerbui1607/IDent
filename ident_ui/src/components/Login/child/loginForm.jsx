import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { userActions } from '../../../actions/userActions';
// import GoogleLogin from './googleLogin';
import { appActions } from '../../../actions/appActions';
import Input from '../../../common/input';
import { constants } from '../../../constants';

function LoginForm(props) {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const { email, password } = inputs;
  const dispatch = useDispatch();

  const message = useSelector(store => store.authentication.message);

  function validate() {
    let err = {};
    if (!email)
      err.email = "Please enter email!";
    if (!password)
      err.password = "Please enter password!";
    return err;
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    let error = validate();
    if (Object.keys(error).length) {
      setErrors(error);
      return;
    }
    dispatch(
      userActions.login(email, password)
    );
  }
  function forgotPass() {
    dispatch(appActions.changePopup(constants.POPUP_FORGOTPASS));
  }
  return (
    <form className="form center " onSubmit={handleSubmit}>
      <div className="center-text">
        <h2>iDent - Login</h2>
        <div>Welcome to iDent!</div>
      </div>
      <div className="input-container">
        <Input
          type="text"
          name="email"
          value={email}
          placeholder="Email"
          error={errors.email}
          handleChange={handleInputChange}
        />
        <Input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          error={errors.password}
          handleChange={handleInputChange}
        />
        <button
          id="login-btn"
          onClick={handleSubmit}>
          Login
        </button>
        {message && <div className="center-text text-error">Email or password incorrect!</div>}
        <div>Don't have an account? <button onClick={props.onToggle}>Register</button> </div>
        <div> <button onClick={forgotPass} style={{ color: "#006eff", }}>Forgot password?</button> </div>
        {/* <GoogleLogin /> */}
      </div>
    </form>
  )
}

export default LoginForm