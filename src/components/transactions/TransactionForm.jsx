import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

const TransactionForm = () => {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ id: window.crypto.randomUUID(), description, amount });
    setDescription("");
    setAmount(0);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={description || ""}
          placeholder="Enter a description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          value={amount}
          placeholder="00"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button>Add Transaccion</button>
      </form>
    </div>
  );
};

export default TransactionForm;
