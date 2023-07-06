import React, { useState } from 'react'

function Count() {
    const [count, setCount] = useState(0);
    
    const tangConut = () => {
        setCount(count <0 ? count: count + 1)
    }
    const giamCount = () => {
        setCount(count <=0 ? count: count - 1)
    }
    const zeroCount = () => {
        setCount(count >= 0 ? 0: "" )
    }
  return (
    <div>
      <h1>{count}</h1><br />
      <button onClick={tangConut}>Tăng</button>
      <button onClick={giamCount}>Giảm</button>
      <button onClick={zeroCount}>Zero</button>
    </div>
  )
}

export default Count
