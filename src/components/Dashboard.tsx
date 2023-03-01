import { ArrowFatUp, ArrowFatDown, CurrencyDollarSimple } from "phosphor-react";
import { useContext } from "react";
import { TransactionContext } from "../Context/TransactionsContext";
import { Card } from "./Card";
import { TransactionsTable } from "./TransactionsTable";

export function Dashboard() {
  const { summary, transactions } = useContext(TransactionContext);

  return (
    <>
      <main className="max-w-3xl mx-auto mt-[-5rem]">
        <div className="flex justify-between mb-5 gap-3 overflow-auto">
          <Card
            type="Entradas"
            icon={<ArrowFatUp size={32} weight="fill" />}
            value={summary.income}
            color={"bg-blue-500 ml-2 md:ml-0"}
          />

          <Card
            type="Saídas"
            icon={<ArrowFatDown size={32} weight="fill" />}
            value={summary.outcome}
            color={"bg-red-500"}
          />

          <Card
            type="Total"
            icon={<CurrencyDollarSimple size={32} />}
            value={summary.total}
            color={"bg-green-500 mr-2 md:mr-0"}
          />
        </div>
        {transactions.length !== 0 ? (
          <TransactionsTable />
        ) : (
          <div className="flex p-2">
            <h3 className="mx-auto">
              Clique em <b>"Nova transação"</b> para adicionar suas contas
            </h3>
          </div>
        )}
      </main>
    </>
  );
}
