import React, { Component } from 'react'
export class Loader extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='position-absolute top-50 start-50 translate-middle'>
         <div className="loader"></div>
      </div>
       
    )
  }
}
export default Loader