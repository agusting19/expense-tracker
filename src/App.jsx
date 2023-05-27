import { Header, Balance, TransaccionForm } from "./components";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransaccionForm />
      <div>hola vieja</div>
    </GlobalProvider>
  );
};

export default App;
