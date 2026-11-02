import { NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";


const linkClass = ({ isActive }) =>
  `rounded-full px-3 py-1 text-sm font-medium transition ${isActive ? "bg-white text-indigo-600" : "text-white hover:bg-white/20"
  }`;

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 py-6 px-4">
        <h1 className="text-2xl font-bold sm:text-2xl">💰 Expense Tracker</h1>

        <div className="flex gap-1">
          <NavLink to="/" end className={linkClass}>Dashboard</NavLink>
          <NavLink to="/transactions" className={linkClass}>Transactions</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>

          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="ml-2 rounded-full bg-white/20 px-3 py-1 text-sm transition hover:bg-white/30"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>


        </div>
      </div>
    </nav>
  );
}
export default Navbar;
