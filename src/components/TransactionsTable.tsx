import { DotsThreeVertical } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { TransactionContext } from "../Context/TransactionsContext";
import { TableItem } from "./TableItem";

export function TransactionsTable() {
  // const [transactions, setTransactions] = useState<Transaction[]>([]);

  // useEffect(() => {
  //   api.get("transactions").then((res) => setTransactions(res.data));
  // }, []);

  const { transactions } = useContext(TransactionContext);

  return (
    <div className="px-4">
      <table className="w-full table-auto">
        <thead className="text-lg text-zinc-400 border-spacing-5">
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody className="text-zinc-800 md:ml-2">
          {transactions.map((transaction) => {
            return (
              <TableItem
                key={transaction.id}
                id={transaction.id}
                type={transaction.type}
                title={transaction.title}
                amount={transaction.amount}
                category={transaction.category}
                createdAt={transaction.createdAt}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
