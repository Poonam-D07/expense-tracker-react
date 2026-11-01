import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="rounded-2xl bg-white p-12 text-center shadow">
      <p className="text-6xl">🧭</p>
      <h2 className="mt-4 text-2xl font-bold text-slate-800">404: Page nahi mila</h2>
      <p className="mt-2 text-slate-500">Ye address exist nahi karta.</p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
      >
        Dashboard par wapas jao
      </Link>
    </div>
  );
}

export default NotFound;