import { Header, Balance, TransactionForm } from "./components";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionForm />
      <div>hola vieja</div>
    </GlobalProvider>
  );
};

export default App;
