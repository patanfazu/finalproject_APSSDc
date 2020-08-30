import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Question from './components/Questions';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App_Form">
        
          <Navbar />
          <Route exact path="/" component={Landing} />
          
            <Route exact path=""/>
            <Route exact path="/question" component={Question}>
              
              </Route>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
           
        </div>
      </Router>
    )
  }
}

export default App
