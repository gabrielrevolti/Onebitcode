import { useState } from 'react';

const usePasswordGenerator = () => {
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

  return [password, generatePassword, copyText, copyToClipboard, passwordSize, setPasswordSize];
};

export default usePasswordGenerator;