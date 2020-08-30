import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Landing extends Component {
 
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center"><em>WELCOME TO QUIZ BUCKERS</em></h1>
            <br></br>
            <center>
            <button className="btn1"><Link to="/login" >Log in</Link> </button>
              </center>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
