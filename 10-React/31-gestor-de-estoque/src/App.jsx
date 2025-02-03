import { RouterProvider } from "react-router-dom";
import router from "./router";
import { StockContextProvider } from "./contexts/StockContent";

export default function App() {
  return (
    <>
      <StockContextProvider>
        <RouterProvider router={router}/>
      </StockContextProvider>
    </>
  )
}