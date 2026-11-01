import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

export function useTransactions() {
  const context = useContext(TransactionContext);

  if (context === null) {
    throw new Error("useTransactions must be used inside <TransactionProvider>");
  }

  return context;
}