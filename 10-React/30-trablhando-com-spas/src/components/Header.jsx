import { Link } from "react-router-dom";

const Header = () => {
  return ( 
    <nav style={{display: "flex", gap: "2rem"}}>
    <Link to="/">Home</Link>
    <Link to="/products">Produtos</Link>
    <Link to="/cart">Carrinho</Link>
    <Link to="/admin">Admin</Link>
  </nav>
   );
}
 
export default Header;