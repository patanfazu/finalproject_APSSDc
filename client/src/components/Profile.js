import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { Link } from 'react-router-dom'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      user_name: '',
      name: '',
      email: '',
      score:'',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      user_name: decoded.user_name,
      name: decoded.name,
      email: decoded.email,
      pass:decoded.password
      
    })
  }

  render() {
    return (
      <div className="container">
        
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Fist Name</td>
                <td>{this.state.user_name}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
              
            </tbody>
          </table>
          <center>
         <button> <Link to="/question" className="FormField__Button mr-20">Proceed</Link> </button>
        </center>
        </div>
      </div>
    )
  }
}

export default Profile
