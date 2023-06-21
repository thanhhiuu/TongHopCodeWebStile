
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Narbar'
import New from './Components/New';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export default class App extends Component {
  pageSize = 6;
  render() {
    return (
      <div>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<New key={"technology"} pageSize={this.pageSize} country={"in"} category={"technology"} />} />
              <Route exact path="/business" element={<New  key={"business"} pageSize={this.pageSize} country={"in"} category={"business"} />} />
              <Route exact path='/entertainment' element={<New key={"entertainment"} pageSize={this.pageSize} country={"in"} category={"entertainment"} />} />
              <Route exact path='/general' element={<New key={"general"} pageSize={this.pageSize} country={"in"} category={"general"} />} />
              <Route exact path='/health' element={<New key={"health"} pageSize={this.pageSize} country={"in"} category={"health"} />} />
              <Route exact path='/sports' element={<New key={"sports"} pageSize={this.pageSize} country={"in"} category={"sports"} />} />
              <Route exact path='/technology' element={<New key={"technology"} pageSize={this.pageSize} country={"in"} category={"technology"} />} />
            </Routes>
          </Router>
      </div>
    );
  }
}
