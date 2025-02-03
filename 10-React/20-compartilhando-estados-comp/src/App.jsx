import { useState } from 'react';
import './App.css'
import Input from './components/input';


function App() {
  const [password, setPassword] = useState('');
  const [copyText, setCopyText] = useState("Copiar")
  const [passwordSize, setPasswordSize] = useState(6)

    function generatePassword() {
      const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
      let newPassword = ""
      for (let i = 0; i < passwordSize; i++) {
        const position = Math.floor(Math.random() * characters.length)
        newPassword += characters[position]
      }
      setPassword(newPassword)
      setCopyText("Copiar")
    }
  
    const copyToClipboard = () => {
      navigator.clipboard.writeText(password);
      setCopyText("Copiado!")
    };

  return (
    <>
      <h1>Gerador de senhas</h1>
      <div>
        <label htmlFor="passwordSize">Tamanho:</label>
        <Input passwordSize={passwordSize} setPasswordSize={setPasswordSize}/>
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
