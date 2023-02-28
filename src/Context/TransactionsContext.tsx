import { createContext, ReactNode, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

interface TransactionsProps {
  id: string;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionContextProps {
  transactions: TransactionsProps[];
  summary: { income: number; outcome: number; total: number };
  addTransactions: (transaction: TransactionsProps) => void;
  deleteTransaction: (transactionId: string) => void;
}

export const TransactionContext = createContext<TransactionContextProps>(
  {} as TransactionContextProps
);

interface ValueContextProviderProps {
  children: ReactNode;
}

export function ValueContextProvider({ children }: ValueContextProviderProps) {
  let TransactionArr = JSON.parse(localStorage.getItem("transactions") || "[]");

  const [transactions, setTransactions] =
    useState<TransactionsProps[]>(TransactionArr);

  function addTransactions(transaction: TransactionsProps) {
    setTransactions((prev) => [...prev, transaction]);
    localStorage.setItem(
      "transactions",
      JSON.stringify([...TransactionArr, transaction])
    );
  }

  function deleteTransaction(transactionId: string) {
    setTransactions((prev) =>
      prev.filter((transaction) => transaction.id !== transactionId)
    );

    localStorage.setItem(
      "transactions",
      JSON.stringify(
        TransactionArr.filter(
          (transaction: TransactionsProps) => transaction.id !== transactionId
        )
      )
    );
  }

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.outcome += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );
  return (
    <TransactionContext.Provider
      value={{ transactions, summary, addTransactions, deleteTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
