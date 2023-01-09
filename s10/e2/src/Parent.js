import { useState } from 'react'
import Child from './Child'

function Parent () {
  const [count, setCount] = useState(0)

  const updateParent = () => {
    setCount(count + 1)
  }

  return (
    <>
      <div>my current count is {count}</div>
      <Child onUpdateParent={updateParent} />
    </>
  )
}

export default Parent