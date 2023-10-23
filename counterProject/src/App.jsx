import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [limitExceeded, setLimitExceeded] = useState(false);

  function addValue() {
    if (count < 20) {
      setCount(count + 1);
      if (count + 1 === 20) {
        setLimitExceeded(true);
      } else {
        setLimitExceeded(false); // Clear the "Limit Exceeded" message
      }
    }
  }

  function removeValue() {
    if (count > -20) {
      setCount(count - 1);
      if (count - 1 === -20) {
        setLimitExceeded(true);
      } else {
        setLimitExceeded(false); 
      }
    }
  }

  function resetCounter(){
    setCount(0);
    setLimitExceeded(false);
  }

  return (
   <>
  <div className="container">
      <h1>Counter-Application</h1>
      <div className='count'> 
      <button className="counter-button" onClick={addValue}>inc.</button>
      <h2>Counter Value: {count}</h2>
      {limitExceeded && <p>Limit Exceeded!</p>}
      <button className="counter-button" onClick={removeValue}>dec-</button>
      </div>
      <button className="reset-button" onClick={resetCounter}>Reset Value</button>
</div>

    </>
  )
}

export default App
