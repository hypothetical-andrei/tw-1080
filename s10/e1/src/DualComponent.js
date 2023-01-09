import { useState } from "react"

function DualComponent () {
  const [mode, setMode] = useState(false)

  return (
    <div>
      {
        mode ? (
          <>
            <div>mode true</div>
            <input type='button' value='switch to false' onClick={evt => setMode(false)} />
          </>
        ) : (
          <>
            <div>mode false</div>
            <input type='button' value='switch to true' onClick={evt => setMode(true)} />
          </>
        )
      }
    </div>
  )
}

export default DualComponent