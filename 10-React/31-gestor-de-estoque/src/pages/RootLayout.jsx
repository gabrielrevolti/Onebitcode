import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        <Link to="/" className="logo">React Stock</Link>
        <nav>
          <Link to="/">Início</Link>
          <Link to="/items">Items</Link>
        </nav>
      </header>
      <div>
        <Outlet/>
      </div>
      <footer>
        Feito com React Router Dom
      </footer>
    </>
  )
}