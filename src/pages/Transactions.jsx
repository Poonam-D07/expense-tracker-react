import { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import ExpenseForm from "../components/ExpenseForm";
import TransactionList from "../components/TransactionList";
import { useTransactions } from "../hooks/useTransactions";

const filterTabs = [
  { value: "all", label: "All" },
  { value: "income", label: "Income" },
  { value: "expense", label: "Expense" },
];

function Transactions() {
  const {
    transactions,
    addTransaction,
    deleteTransaction,
    updateTransaction,
    deleteLatest,
    resetData,
  } = useTransactions();

  // Ye state sirf is page ki hai, isliye Context mein nahi
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editItem, setEditItem] = useState(null);

  const visibleTransactions = transactions
    .filter((t) => filter === "all" || t.type === filter)
    .filter((t) => t.title.toLowerCase().includes(search.toLowerCase()));

  const handleEditClick = (item) => {
    setEditingId(item.id);
    setEditItem(item);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditItem(null);
  };

  const handleUpdate = (data) => {
    updateTransaction(editingId, data);
    handleCancelEdit();
  };

  const handleDelete = (id) => {
    deleteTransaction(id);
    if (id === editingId) handleCancelEdit();
  };

  return (
    <>
      <h2 className="mb-6 text-3xl font-bold text-slate-800">Transactions</h2>

      <ExpenseForm
        onAdd={addTransaction}
        editItem={editItem}
        isEditing={editingId !== null}
        onUpdate={handleUpdate}
        onCancel={handleCancelEdit}
      />

      <Card className="rounded-2xl bg-white p-6 shadow">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-xl font-bold text-slate-800">All Transactions</h3>
          <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-600">
            {visibleTransactions.length} items
          </span>
        </div>

        <div className="mb-2 flex gap-2">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                filter === tab.value
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-200 text-slate-600 hover:bg-slate-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="🔎 Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        />

        <TransactionList
          transactions={visibleTransactions}
          onDelete={handleDelete}
          onEdit={handleEditClick}
        />
      </Card>

      <div className="mt-6 flex justify-center gap-4">
        <Button text="Reset Data" color="blue" onClick={resetData} />
        <Button text="Delete latest" color="red" onClick={deleteLatest} />
      </div>
    </>
  );
}

export default Transactions;