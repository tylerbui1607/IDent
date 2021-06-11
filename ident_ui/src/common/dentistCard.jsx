import React from 'react';

function DentistCard(props){
  return (
    <div className="dentist-card">
      <div className="img-container">
        <img src={props.img} alt=""/>
      </div>
      <div className="name center-text">{props.name}</div>
      <div className="title center-text">{props.title}</div>
      <div className="dentist-info">{props.info}</div>

    </div>
  )
}

export default DentistCard