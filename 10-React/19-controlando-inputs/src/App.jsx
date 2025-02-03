import './App.css'
import usePasswordGenerator from './hooks/userPassword'

function App() {
  const [password, 
        generatePassword, 
        copyText, 
        copyToClipboard, 
        passwordSize, 
        setPasswordSize] = usePasswordGenerator()

  return (
    <>
      <h1>Gerador de senhas</h1>
      <div>
          <label htmlFor="passwordSize">Tamanho:</label>
          <input 
            type="number" 
            id="passwordSize" 
            min={6} 
            value={passwordSize}
            onChange={(ev) => setPasswordSize(ev.target.value)}
          />
        </div>
      <div className="card">
        <button onClick={generatePassword}>Gerar senha de {passwordSize} caracteres!</button>
        <button onClick={copyToClipboard}>{copyText}</button>
        <p>{password}</p>
      </div>
    </>
  )
}

export default App
