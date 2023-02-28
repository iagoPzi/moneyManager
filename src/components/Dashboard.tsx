import { ArrowFatUp, ArrowFatDown, CurrencyDollarSimple } from "phosphor-react";
import { useContext } from "react";
import { TransactionContext } from "../Context/TransactionsContext";
import { Card } from "./Card";
import { TransactionsTable } from "./TransactionsTable";

export function Dashboard() {
  const { summary } = useContext(TransactionContext);

  return (
    <>
      <div className="max-w-3xl mx-auto mt-[-5rem]">
        <main className="flex justify-between mb-5 gap-3 overflow-auto">
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
        </main>
        <TransactionsTable />
      </div>
    </>
  );
}
