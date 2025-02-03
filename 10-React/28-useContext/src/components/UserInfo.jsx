import { useContext } from "react";
import userContext from "../contexts/userContext";

const UserInfo = () => {
  const user = useContext(userContext)

  return ( 
    <div>
      <h2>Informações do Usuário:</h2>
      <p>Nome: {user.name}</p>
      <p>Email: {user.name}</p>
    </div>
   );
}
 
export default UserInfo;