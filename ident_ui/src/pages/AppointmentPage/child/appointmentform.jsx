import { useState } from 'react';
import React from 'react';
import Input from '../../../common/input';


function AppointmentForm(props) {
  // const[services, setServices] = useState([]);
  const [inputs, setInputs] = useState({ name: '', email: props.Email, })
  const [errors, setErrors] = useState({});

  const { name, email } = inputs;


  function handleInputChange(e) {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  function validate() {
    let err = {};
    if (!name)
      err.name = "Please enter your name!";
    return err;
  }

  function handleSubmit(e) {
    e.preventDefault();
    let error = validate();
    if (Object.keys(error).length) {
      setErrors(error);
      return;
    }
  }

  function closeForm() {
    props.setConfirmForm(false);
  }

  function sendAppointment() {
    let data = {
      email: inputs.email,
      name: inputs.name,
      day: props.Date.day,
      month: props.Date.month,
      year: props.Date.year,
      service: "Teeth whitening",
      hour: 8,
      minute: 30,
    }
    fetch('http://localhost:3000/api/appointments', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(data => {
        alert(data.status);
        closeForm();
      })
  }
  return (
    <div class="confirmform">
      <button id="close-btn" onClick={closeForm}>X</button>
      <form action="" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          value={name}
          placeholder="Your name"
          error={errors.name}
          handleChange={handleInputChange}
        />
        {/* <div class ="service">{props.Service}</div> */}
        <div class="date">{props.Date.day}-{props.Date.month}-{props.Date.year}</div>
        <div className="time">{props.Time}</div>
        <div class=""></div>
        <Input
          type="text"
          name="email"
          value={email}
          placeholder="Your email"
          error={errors.email}
          handleChange={handleInputChange}
        />
        <button onClick={sendAppointment} id="confirm-btn">confirm</button>
      </form>
    </div>
  )
}

export default AppointmentForm