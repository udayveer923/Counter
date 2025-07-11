import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1 className="title">COUNTER</h1>

      <div className="counter-box">
        <button className="btn minus" onClick={() => setCount(count - 1)}>-</button>
        <span className={`count ${count < 0 ? 'negative' : ''}`}>{count}</span>
        <button className="btn plus" onClick={() => setCount(count + 1)}>+</button>
      </div>

      <div className="reset-box">
        <button className="btn reset" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  )
}

export default App
