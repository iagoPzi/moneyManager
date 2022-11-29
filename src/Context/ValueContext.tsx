import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface TransactionsProps {
  id: string;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface ValueContextProps {
  transactions: TransactionsProps[];
  summary: { income: number; outcome: number; total: number };
  callRefresh:() => void;
}

export const ValueContext = createContext<ValueContextProps>(
  {} as ValueContextProps
);

interface ValueContextProviderProps {
  children: ReactNode;
}

export function ValueContextProvider({ children }: ValueContextProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);
  const [refresh, setRefresh] = useState(false);
  function callRefresh(){
    setRefresh(!refresh);
  }

  useEffect(() => {
    api.get("transactions").then((res) => setTransactions(res.data));
  }, [refresh]);

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
    <ValueContext.Provider value={{ transactions, summary, callRefresh }}>
      {children}
    </ValueContext.Provider>
  );
}
