import {
  Header,
  Balance,
  TransactionForm,
  TransactionList,
} from "./components";
import IncomeExpenses from "./components/IncomeExpenses";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <IncomeExpenses />
      <Balance />
      <TransactionForm />
      <TransactionList />
    </GlobalProvider>
  );
};

export default App;
