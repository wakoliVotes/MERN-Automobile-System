import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeProfile from './Components/HomeProfile';
import HomeNotAuth from './Components/HomeNotAuth';

class App extends Component {
  render() {
    return (
      <>
      <HomeProfile />
      <HomeNotAuth />
      </>
    )
  }
}
export default App;