import React, { useState } from 'react'
import DualComponent from './DualComponent'

const App = () => {
  const [steps, setSteps] = useState(0)

  return (
    <div className="container">
      <p>Today you've taken {steps} steps!</p>
      <button onClick={() => setSteps(steps + 1)}>Click Me</button>
      <DualComponent />
    </div>
  )
}

export default App
