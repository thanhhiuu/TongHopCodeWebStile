import React, { Component } from 'react'

export class Newitem extends Component {
  render() { // Mỗi khi trạng thái (state) hoặc thuộc tính (props) của thành phần thay đổi, render() sẽ được gọi lại để cập nhật giao diện hiển thị.
    let {title, blogContent, imageUlr, newULR, author, date, source} = this.props;
    return (
      <div>
        <div className="card  position-relative d-flex   m-auto" style={{width: "100%", height: "", display: 'flex', alignItems:'self-end', justifyContent: "self-end"}}>
        <span className="position-absolute badge rounded-pill bg-danger" style={{}}>
        {source}
  </span>
          <img style={{height: '180px', objectFit: "cover"}} src={imageUlr === null?"https://www.investors.com/wp-content/uploads/2021/01/Stock-Tesla-modelY-01-adobe.jpg":imageUlr} className="card-img-top" alt="..."/>
            <div className="card-body text-center">
              <h5 className="card-title">{title}  <span className="badge bg-danger">New</span></h5>
              <p className="card-text">{blogContent}</p>
              <p className="card-text">{author} on {new Date(date).toUTCString()}</p>
              <a href={newULR} target='_blank' rel="noreferrer"  className="btn btn-sm btn-primary">Real now</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Newitem
