import { useRef, useState } from 'react'
import RefExample from './refExample'


function App() {
  let variable = 0
  const [state,setState] = useState(0)
  const ref = useRef(0)

  const showValues = () => {
    alert(`
      Variável: ${variable}
      Ref: ${ref.current}
      State: ${state}
    `)
  }
  return (
    <div>
      <h2>Conhecendo o useRef</h2>
      <hr />
      <h2>Input focus</h2>
      <RefExample/>
      <hr />
      <p>Variável: {variable}</p>
      <p>Ref: {ref.current}</p>
      <p>State: {state}</p>
      
      <button onClick={() => variable++}>Aumentar a variável</button>
      <button onClick={() => ref.current++}>Aumentar a Ref</button>
      <button onClick={() => setState(state => state + 1)}>Aumentar a State</button>
      <hr />
      <button onClick={showValues}>Exibir value</button>
    </div>
  )
}

export default App
