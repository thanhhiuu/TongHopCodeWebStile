
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Narbar'
import New from './Components/New';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <New/>
      </div>
    )
  }
}
