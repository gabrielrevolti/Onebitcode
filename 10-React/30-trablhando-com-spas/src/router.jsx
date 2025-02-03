import { createBrowserRouter } from "react-router-dom"
import RootLayout from "./pages/Layout/RootLayout";
import AdminHome from "./pages/admin/AdminHome";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import loadProduct from "./loaders/products";
import ProductBoundary from "./error-boundaries/ProductBoudary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{
      index: true,
      element: <Home />
    }, {
      path: "products/:productId",
      element: <Product/>,
      loader: loadProduct,
      errorElement: <ProductBoundary />
    },{
      path: "products",
      element: <Products/>
    }, {
      path: "cart",
      element: <Cart />
    }]
  },
  {
    path: "/admin",
    element: <AdminHome />
  }
])

export default router;