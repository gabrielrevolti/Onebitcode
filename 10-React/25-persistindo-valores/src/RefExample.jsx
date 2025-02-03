import { useRef } from "react"

export default function RefExample() {
  const inputRef = useRef(null)

  const handleSubmit = () => {
    inputRef.current.focus()
    inputRef.current.style.backgroundColor = "#F64348"
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleSubmit}>Focar no input</button>
    </div>
  )
}

