import Header from "./components/Header"
import UserInfo from "./components/UserInfo"
import userContext from "./contexts/userContext"

export default function App() {
  const user = {
    name: "João",
    email: "joao@email.com"
  }

  return (
    <userContext.Provider value={user}>
      <Header/>
     <h1>Usando contexto</h1>
     <UserInfo/>
    </userContext.Provider>
  )
}

