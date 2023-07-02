import React from 'react'
import MainExample from './MainExample'

function Example() {
    const User = [
        {
          name: "Thanh Trung",
          blog: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nihil!",
          btn: "More",
          isDisplay: false
        },
        {
          name: "Thanh Hieu",
          blog: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nihil!",
          btn: "New",
          isDisplay: true
        },
        {
          name: "Thanh Dat",
          blog: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nihil!",
          btn: "Live More",
          isDisplay: false
        },
        {
            name: "Thanh Cau",
            blog: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nihil!",
            btn: "Live More",
            isDisplay: true
          },
          {
            name: "Thanh Ngai",
            blog: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nihil!",
            btn: "Live More",
            isDisplay: true
          },
          {
            name: "Thanh Bia",
            blog: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nihil!",
            btn: "Live More",
            isDisplay: false
          }
      ]
  return (
   <>
    {User.map((users, key) => {   
        return  <MainExample    name={users.name} blog={users.blog} isDisplay={users.isDisplay} />
    })}
   </>
  )
}

export default Example