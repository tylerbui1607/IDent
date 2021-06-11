import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { a } from 'react-router-dom';

import { appActions } from '../actions/appActions';
import { userActions } from '../actions/userActions';
import { constants } from '../constants';
import { showSidebar } from "../helper";

function Nav() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.authentication.user);

  function handleLoginClick() {
    dispatch(appActions.changePopup(constants.POPUP_LOGIN));
  }

  function handleLogoutClick() {
    dispatch(userActions.logout());
  }

  function handleShowSidebar() {
    showSidebar();
  }

  const buttonTitle = user ? 'Logout' : 'Login';

  return (
    <div className="nav" style={{ background: 'url("/img/banner-bg.jpg")' }}>
      <div className="logo">
        <a href="/"><img src="/img/logo_trans.png" alt="" /></a>
      </div>
      <div className="dropdown-container">
        <div className="dropdown">
          <a href="/dich-vu" className="dropdown-btn">Service +</a>
          <div className="dropdown-list">
            <a href="/dich-vu/kiem-tra" className="dropdown-item">Teeth whitening</a>
            <a href="/dich-vu/nho-rang" className="dropdown-item">Teeth cleaning </a>
            <a href="/dich-vu/chinh-nha" className="dropdown-item">Dental anesthesia</a>
            <a href="/dich-vu/tay-trang" className="dropdown-item">Orthodontics </a>
          </div>
        </div>
        <div className="dropdown">
          <a href="/make-appointment" className="dropdown-btn">Appointment</a>
        </div>
        <div className="dropdown">
          <a href="/nha-si" className="dropdown-btn">Our Doctors</a>
        </div>
        <div className="dropdown">
          <a href="/co-so-vat-chat" className="dropdown-btn">Facilities</a>
        </div>
        <div className="dropdown">
          <button
            id="account-btn"
            onClick={user ? handleLogoutClick : handleLoginClick}>
            {buttonTitle}
          </button>
        </div>
        <div className="dropdown mobile-display">
          <button onClick={handleShowSidebar}>
            <img src="https://i.ibb.co/L54TwF4/menu-icon2.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Nav