import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/GlobalState";

const ExpenseChart = () => {
  const { transactions } = useGlobalState();

  const totalIncomes = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalExpenses =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  const expensesPercentage = Math.round((totalExpenses / totalIncomes) * 100);
  const incomesPercentage = 100 - expensesPercentage;

  return (
    <VictoryPie
      colorScale={["#ee2c2c", "#2cee71"]}
      data={[
        { x: "Expenses", y: expensesPercentage },
        { x: "Incomes", y: incomesPercentage },
      ]}
      animate={{ duration: 200 }}
      labelComponent={<VictoryLabel angle={45} style={{ fill: "white" }} />}
    />
  );
};

export default ExpenseChart;
