import './App.css'
import userCounter from './hooks/userCounter'

// Regra 1: Onde usar os hooks
// Regra 2: A ordem dos hooks


function App() {
  const counter = userCounter()

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={counter.increment}>
          count is {counter.count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
