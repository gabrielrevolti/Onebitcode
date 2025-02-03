import { useContext } from "react";
import { StockContext } from "../contexts/StockContent";

export default function useStock() {
  return useContext(StockContext)
}