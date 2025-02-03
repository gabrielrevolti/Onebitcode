import { useState } from 'react'

function getInitialvalue() {
  console.log("Obtendo valor inicial")
  return 1 + 1
}

export default function userCounter() {
  const [count, setCount] = useState(() => getInitialvalue())

  const increment = () => {
    setCount((currentState) => currentState + 1)
    setCount((currentState) => currentState + 1)
  }

  return {count, increment}
}