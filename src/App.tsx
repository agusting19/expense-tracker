import GlobalProvider from "./context/GlobalState";
import { Balance, Header, TransaccionsForm } from "./components";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransaccionsForm />
      <h1>hola mundo</h1>
    </GlobalProvider>
  );
};

export default App;
