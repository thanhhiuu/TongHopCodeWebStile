import React from 'react'

function Toan_BaNgoi() {
    const age = 16;
    const  isGreed = true;
  return (
    <div>
      <h1>{age >=18 ? <h1>Ban khong du 18 tuoi</h1>:"Ban du 18 tuoi"}</h1>
      <h2 style={{color: isGreed ? "green": "red"}}>Đỏ hay Xanh</h2>
      {isGreed && <button>Hiện rồi nè ba</button>} 
    </div>
  )
}

export default Toan_BaNgoi
