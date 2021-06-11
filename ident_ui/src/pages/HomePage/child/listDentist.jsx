import React from 'react';
import { Component } from 'react';

import DentistCard from '../../../common/dentistCard';

class ListDentist extends Component {
  render() {
    return (
      <div className="dentist-list">
        <h3 className="center-text home-title">Meet Our Doctors</h3>
        <h4 className="center-text home-title-sub">Team of Professionals</h4>
        <button id="preBtn">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button id="nextBtn">
          <i className="fas fa-chevron-right"></i>
        </button>
        <div className="slider-container">
          <div className="card-container">
            <DentistCard
              img="/img/dentist_1.jpg"
              name="Archie White"
              title="Dentist"
              info="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum."
            />
          </div>
          <div className="card-container">
            <DentistCard
              img="/img/dentist_2.jpg"
              name="Dylan Taylor"
              title="Orthodontist"
              info="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum."
            />
          </div>
          <div className="card-container">
            <DentistCard
              img="/img/dentist_3.jpg"
              name="Amy Clarke"
              title="Hygienist"
              info="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum."
            />
          </div>
        </div>
      </div>
    )
  }
  componentDidMount() {
    // eslint-disable-next-line no-undef
    $('.dentist-list .slider-container').slick({
      slidesToShow: 3,
      nextArrow: "#nextBtn",
      prevArrow: "#preBtn",
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }
}

export default ListDentist