import { useState } from 'react';

const usePasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [copyText, setCopyText] = useState("Copiar")


  function generatePassword() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    const length = 12
    let newPassword = ""
    for (let i = 0; i < length; i++) {
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

  return [password, generatePassword, copyText, copyToClipboard];
};

export default usePasswordGenerator;