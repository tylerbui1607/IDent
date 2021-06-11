import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer"
      style={{
        background: "url('/img/footer-bg.jpg')"
      }}
    >
      <div className="footer__contact">
        <div className="brand">
          <img src="/img/foot-logo.png" alt="" />
        </div>
        <div className="content">
          Lorem ipsum dolor sit amet, consect
          etur adipisicing elit, sed do eius mod
          tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim
        </div>
        <h4 className="icon">
          <i className="fas fa-phone-alt" />0357857086
        </h4>
        <h4 className="icon">
          <i className="far fa-envelope"></i>info@ident.com
        </h4>
      </div>
      <div className="footer__link footer-test-combo">
        <h4 className="link-title">
          iDent infomation
        </h4>
        <div className="line" style={{ width: "3em" }}></div>
        <Link to="/co-so-vat-chat" className="link">
          <i className="fas fa-angle-double-right"></i>Facilities
        </Link>
        <Link to="/nha-si" className="link">
          <i className="fas fa-angle-double-right"></i>Our doctors
        </Link>
        <Link to="/hen-lich" className="link">
          <i className="fas fa-angle-double-right"></i>Appointment
        </Link>
      </div>
      <div className="footer__link footer-test-link">
        <h4 className="link-title">
          Services
        </h4>
        <div className="line" style={{ width: "3em" }}></div>
        <Link to="/dich-vu/kiem-tra" className="link">
          <i className="fas fa-angle-double-right"></i>Teeth whitening
        </Link>
        <Link to="/dich-vu/nho-rang" className="link">
          <i className="fas fa-angle-double-right"></i>Teeth cleaning
        </Link>
        <Link to="/dich-vu/chinh-nha" className="link">
          <i className="fas fa-angle-double-right"></i>Dental anesthesia
        </Link>
        <Link to="/dich-vu/tay-rang" className="link">
          <i className="fas fa-angle-double-right"></i>Orthodontics
        </Link>
      </div>
      <div className="footer__link">
        <button className="footer-button">
          Rate us
        </button>
        <div
          style={{
            color: "white",
            textAlign: "center",
            marginTop: "1em",
            marginBottom: "1em"
          }}>
          Or visit us at</div>
        <button className="visit-btn">
          <i className="fab fa-facebook-f"></i>
        </button>
        <button className="visit-btn">
          <i className="fab fa-twitter"></i>
        </button>
      </div>
    </div>
  )
}

export default Footer