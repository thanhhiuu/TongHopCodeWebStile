import React, { Component } from 'react'

export class Newitem extends Component {
  render() { // Mỗi khi trạng thái (state) hoặc thuộc tính (props) của thành phần thay đổi, render() sẽ được gọi lại để cập nhật giao diện hiển thị.
    let {title, blogContent, imageUlr, newULR} = this.props;
    return (
      <div>
        <div className="card  m-auto" style={{width: "18rem", height: "px"}}>
          <img src={imageUlr} className="card-img-top" alt="..."/>
            <div className="card-body text-center">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{blogContent}</p>
              <a href={newULR} target='_blank' rel="noreferrer"  className="btn btn-sm btn-primary">Real now</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Newitem
