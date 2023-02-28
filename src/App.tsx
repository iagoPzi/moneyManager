import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { ValueContextProvider } from "./Context/TransactionsContext";

export function App() {
  return (
    <ValueContextProvider>
      <Header />
      <Dashboard />
    </ValueContextProvider>
  );
}
