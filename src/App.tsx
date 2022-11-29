import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { ValueContextProvider } from "./Context/ValueContext";

export function App() {
  return (
    <ValueContextProvider>
      <Header />
      <Dashboard />
    </ValueContextProvider>
  );
}
