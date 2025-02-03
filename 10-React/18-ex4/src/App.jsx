import './App.css'
import usePasswordGenerator from './hooks/userPassword'

function App() {
  const [password, generatePassword, copyText, copyToClipboard] = usePasswordGenerator()

  return (
    <>
      <h1>Gerador de senhas</h1>
      <div className="card">
        <button onClick={generatePassword}>Gerar</button>
        <button onClick={copyToClipboard}>{copyText}</button>
        <p>{password}</p>
      </div>
    </>
  )
}

export default App
