
import './App.css'
import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
   const increment = () => {
      setCount((prev)=>prev+1);
   }
   const decrement = () => {
    setCount1((prev)=>prev-1);
 }

  return (
    <>
    <h1><button onClick={increment}>➕ Count: {count}</button></h1>
    <h1><button onClick={decrement}>➖ Count: {count1}</button></h1>
    </>
  )
}

export default App
