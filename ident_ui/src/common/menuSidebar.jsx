import { useDispatch } from 'react-redux';
import { appActions } from '../actions/appActions';
import { constants } from '../constants';

import { closeSidebar, toggleSubitem } from "../helper";

export default function MenuSidebar() {
  const dispatch = useDispatch();

  function handleLoginClick() {
    dispatch(appActions.changePopup(constants.POPUP_LOGIN));
  }

  function handleCloseSidebar() {
    closeSidebar();
  }

  function handleToggle() {
    toggleSubitem()
  }
  return (
    <div id="menuSidebar" className="menu-sidebar">
      <div style={{ height: "3em" }}>
        <button onClick={handleCloseSidebar} id="closeSidebarBtn">
          <img src="https://i.ibb.co/TrvZM1h/close-icon.png" alt="" />
        </button>
      </div>
      <div className="item-container">
        <div className="sidebar-item" style={{ display: "flex", justifyContent: "space-between" }}>
          <a href="/">
            Service
          </a>
          <button onClick={handleToggle} style={{ marginRight: "1em", padding: "0" }}>
            <img src="https://i.ibb.co/HnZk8BX/down.png" alt="" />
          </button>
        </div>
        <div id="sidebarSubitem" className="sidebar-subitem">
          <a href="/" className="sub-item">
            Teeth whitening
          </a>
          <a href="/" className="sub-item">
            Teeth cleaning
          </a>
          <a href="/" className="sub-item">
            Dental anesthesia
          </a>
          <a href="/" className="sub-item">
            Orthodontics
          </a>
        </div>
        <div className="sidebar-item">
          <a href="/make-appointment">
            Appointment
          </a>
        </div>
        <div className="sidebar-item">
          <a href="/thao-luan">
            Our Doctors
          </a>
        </div>
        <button className="sidebar-login-btn" onClick={handleLoginClick}>
          Đăng nhập
        </button>
      </div>
    </div>
  )
}