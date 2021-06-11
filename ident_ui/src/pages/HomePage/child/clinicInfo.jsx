import React from 'react';
import { Link } from 'react-router-dom';
function ClinicInfo(props){
  return (
    <div className="clinic-info">
      <div className="news">
        <div className="title">Clinic News</div>
        <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis</p>
        <Link to="/">Read more</Link>
      </div>
      <div className="opening-info">
        <div className="title">Opening Hours</div>
        <div className="info row">
          <div className="d-info">Monday - Friday</div>
          <div className="h-info">8.00 - 17.00</div>
        </div>
        <div className="line"> </div>
        <div className="info row">
          <div className="d-info">Saturday</div>
          <div className="h-info">9.30 - 17.30</div>
        </div>
        <div className="line"> </div>
        <div className="info row">
          <div className="d-info">Sunday</div>
          <div className="h-info">9.00 - 17.00</div>
        </div>
      </div>
      <div className="department-info">
        <div className="title">Our Departments</div>
        <div className="department-name">Department 3: 274 Tran Phu, District 7</div>
        <div className="department-name">Department 1: Street 13, Industrial Park, Tan Đong Ward, District 7</div>
        <div className="department-name">Department 2: Street 7, Industrial Park, DND Ward, District 5</div>
      </div>
    </div>
  )
}

export default ClinicInfo