import { useContext } from "react";
import userContext from "../contexts/userContext";

const Header = () => {
  const user = useContext(userContext)
  return ( 
    <>
      <h2>Bem vindo, {user.name}</h2>
      <hr />
    </>
   );
}
 
export default Header;