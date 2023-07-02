import React from 'react'

function MainExample(props) {
  return (
    <div className='container'>
        {<h1>Name: {props.isDisplay?props.name : "Khong co thong tin"} introduction:  {props.isDisplay ?props.blog : "Khong co thong tin"}</h1>}
    </div>
  )
}

export default MainExample