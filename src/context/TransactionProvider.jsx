import { useContext, useEffect, useState } from "react";
import { TransactionContext } from "./TransactionContext";
import { transactions as initialTransactions } from "../data/transaction";

// Ye aapke App.jsx ka shared data wala hissa hai, bas naye ghar mein.

const STORAGE_KEY = "expense-tracker-transactions";

const formatDate = (iso) =>
    new Date(iso).toLocaleDateString("en-IN", { day: "2-digit", month: "short" });


function TransactionProvider({ children }) {

    const [transactions, setTransactions] = useState(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved ? JSON.parse(saved) : initialTransactions;
        } catch {
            return initialTransactions;
        }
    });

    const [savedAt, setSavedAt] = useState("");

    // Jab bhi transactions badle, localStorage mein save karo
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
        setSavedAt(
            new Date().toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            })
        );

    }, [transactions]);

    // Derived values: state se hi nikalte hain, alag state nahi banate
    const totalIncome = transactions
        .filter((t) => t.type === "income")
        .reduce((sum, t) => sum + t.amount, 0);

    const totalExpense =  transactions
        .filter((t) => t.type === "expense")
        .reduce((sum, t) => sum + t.amount, 0);

    const balance = totalIncome - totalExpense;

    // Handlers

    // ---- Event handlers ----
    const addTransaction = (data) => {
        const newTransaction = {
            ...data,
            id: Date.now(),
            date: formatDate(data.date),
        };
        setTransactions((prev) => [newTransaction, ...prev]);
    };

    const deleteTransaction = (id) => {
        setTransactions((prev) => prev.filter((t) => t.id !== id));
    };

    const updateTransaction = (id, data) => {
        setTransactions((prev)=>
            prev.map((tx) =>
                tx.id === id
                    ? { ...tx, ...data, date: data.date ? formatDate(data.date) : tx.date }
                    : tx
            )
        );
    };

    const deleteLatest = () => setTransactions((prev) => prev.slice(1));
    const resetData = () => setTransactions(initialTransactions);

    const value = {
        transactions,
        savedAt,
        totalIncome,
        totalExpense,
        balance,
        addTransaction,
        deleteTransaction,
        updateTransaction,
        deleteLatest,
        resetData,
    };


    return (
        <TransactionContext.Provider value={value}>
            {children}
        </TransactionContext.Provider>
    );
}

export default TransactionProvider;
