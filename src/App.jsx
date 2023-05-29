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
      <div className="flex justify-center items-center bg-zinc-950 text-white h-screen">
        <div className="container mx-auto w-2/5">
          <div className="flex gap-x-2 bg-zinc-800 p-10 rounded-lg">
            <div>
              <Header />
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className="w-full">
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
};

export default App;
