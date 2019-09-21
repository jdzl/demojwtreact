import React from 'react';
import 'react-json-pretty/themes/monikai.css';
import { Route } from 'react-router-dom'
import Home from './Home'
import auth from './auth'
import authContainer from './authContainer'
import Login from './Login'
class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={auth(Login)} />
        <Route path="/init" component={authContainer(Home)} />
      </React.Fragment>
    );
  }
}

export default (App);
