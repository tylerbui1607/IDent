import React, { Component } from 'react'

class SignupForm extends Component {
  render () {return (
    <form action="#" method="POST" className="form center ">
      <div className="center-text">
        <h2>iDent - Register</h2>
        <div>Please provide your infomation to create iDent account!</div>
      </div>
      <div className="input-container">
        <input type="text" name="name" placeholder="Username"/>
        <input type="text" name="email" placeholder="Email"/>
        <input type="password" name="password" placeholder="Password"/>
        <button id="signup-btn">Register</button>
        <div className='center-text'>Already have a account? <button onClick = {this.props.onToggle} >Login</button> </div>         
      </div>
    </form>
  ) 
  }
}

export default SignupForm