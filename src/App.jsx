import {
  Header,
  Balance,
  TransactionForm,
  TransactionList,
} from "./components";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionForm />
      <TransactionList />
      <div>hola vieja</div>
    </GlobalProvider>
  );
};

export default App;
