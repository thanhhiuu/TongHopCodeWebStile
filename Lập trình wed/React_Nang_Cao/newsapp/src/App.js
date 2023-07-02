
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Narbar'
import New from './Components/New';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
  pageSize = 9;

    keyApi = process.env.REACT_APP_NEW_API

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({
        progress: progress,
    })
  }
  // Dung theo các Function component
 // https://github.com/CodeWithHarry/NewsMonkey-React/blob/master/src/components/News.js s
  render() {
    return (
      <div>
          <Router>
            <Navbar />
            <LoadingBar
              color='#f11946'
              progress={this.state.progress}
            />
            <Routes>
              <Route exact path="/" element={<New setProgress={this.setProgress} keyApi={this.keyApi} key={"technology"} pageSize={this.pageSize} country={"in"} category={"technology"} />} />
              <Route exact path="/business" element={<New setProgress={this.setProgress} keyApi={this.keyApi} key={"business"} pageSize={this.pageSize} country={"in"} category={"business"} />} />
              <Route exact path='/entertainment' element={<New setProgress={this.setProgress} keyApi={this.keyApi} key={"entertainment"} pageSize={this.pageSize} country={"in"} category={"entertainment"} />} />
              <Route exact path='/general' element={<New setProgress={this.setProgress} keyApi={this.keyApi} key={"general"} pageSize={this.pageSize} country={"in"} category={"general"} />} />
              <Route exact path='/health' element={<New setProgress={this.setProgress} keyApi={this.keyApi} key={"health"} pageSize={this.pageSize} country={"in"} category={"health"} />} />
              <Route exact path='/sports' element={<New setProgress={this.setProgress} keyApi={this.keyApi} key={"sports"} pageSize={this.pageSize} country={"in"} category={"sports"} />} />
              <Route exact path='/technology' element={<New setProgress={this.setProgress} keyApi={this.keyApi} key={"technology"} pageSize={this.pageSize} country={"in"} category={"technology"} />} />
            </Routes>
          </Router>
      </div>
    );
  }
}
