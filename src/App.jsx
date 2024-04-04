import { useState } from 'react'
import Home_part1 from './Components/Home_part1/Home_part1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home_part1/>
    </>
  )
}

export default App
