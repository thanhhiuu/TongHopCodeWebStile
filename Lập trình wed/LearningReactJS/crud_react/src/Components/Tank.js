import React from 'react'
import { useState } from 'react';


function Tank(props) {
    const [color, setColor] = useState("black");
    const clickColor = () => {
        setColor("green")
      };
    return (
        <div>
            <div key={props.index}>
                <h1 style={{color: `${color}`}}>{props.tank}</h1>
                <button onClick={clickColor}>Success</button>
                <button onClick={() => props.deleteText(props.index)}>X</button> {/* Khi người dùng click vào thì sẽ xác định vị trí cần xóa trong Mảng  */}
            </div>
        </div>
    )
}

export default Tank
