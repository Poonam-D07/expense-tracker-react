import { Link } from "react-router-dom";
import SummaryCard from "../components/SummaryCard";
import Card from "../components/Card";
import TransactionList from "../components/TransactionList";
import { useTransactions } from "../hooks/useTransactions";

function Dashboard() {
  const { transactions, savedAt, totalIncome, totalExpense, balance } = useTransactions();
  const recent = transactions.slice(0, 5);

  return (
    <>
      <div className="mb-8 flex items-baseline justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Dashboard</h2>
          <p className="text-slate-500">Aapke paise ka poora hisaab, sirf ek jagah.</p>
        </div>

        {savedAt && (
          <span className="rounded-md border border-emerald-200 bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-600">
            💾 Saved {savedAt}
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <SummaryCard
          title="Total Balance"
          amount={balance}
          icon="💼"
          gradient="bg-gradient-to-br from-indigo-500 to-purple-600"
        />
        <SummaryCard
          title="Total Income"
          amount={totalIncome}
          icon="📈"
          gradient="bg-gradient-to-br from-emerald-500 to-teal-600"
        />
        <SummaryCard
          title="Total Expenses"
          amount={totalExpense}
          icon="📉"
          gradient="bg-gradient-to-br from-rose-500 to-orange-600"
        />
      </div>

      <Card className="mt-10 rounded-2xl bg-white p-6 shadow">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-800">Recent Transactions</h3>
          <Link to="/transactions" className="text-sm font-medium text-indigo-600 hover:underline">
            View all →
          </Link>
        </div>

        <TransactionList transactions={recent} />
      </Card>
    </>
  );
}

export default Dashboard;