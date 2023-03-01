import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionContextProvider } from "./Context/TransactionsContext";

export function App() {
  return (
    <TransactionContextProvider>
      <Header />
      <Dashboard />
    </TransactionContextProvider>
  );
}
