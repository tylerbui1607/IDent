import React from 'react';

function IdentInNumber(props){
  return (
    <div className="clinic-number">
      <h3 className="center-text home-title">iDent in numbers</h3>
      <h4 className="center-text home-title-sub">Some Statistics</h4>
      <div className="card-container">
        <div className="container">
          <div className="img-container">
            <img src="/img/like_icon.png" alt=""/>
          </div>
          <div className="info">100%</div>
          <div className="title">Quality</div>
        </div>
        <div className="container">
          <div className="img-container">
            <img src="/img/badge_icon.png" alt=""/>
          </div>
          <div className="info">2480</div>
          <div className="title">Patients a year</div>
        </div>
        <div className="container">
          <div className="img-container">
            <img src="/img/member_icon.png" alt=""/>
          </div>
          <div className="info">26</div>
          <div className="title">People working</div>
        </div>
        <div className="container">
          <div className="img-container">
            <img src="/img/calendar_icon.png" alt=""/>
          </div>
          <div className="info">38</div>
          <div className="title">Years of experience</div>
        </div>
        <div className="container">
          <div className="img-container">
            <img src="/img/smile_icon.png" alt=""/>
          </div>
          <div className="info">7856</div>
          <div className="title">Happy Smiles</div>
        </div>
      </div>
    </div>
  )
}

export default IdentInNumber