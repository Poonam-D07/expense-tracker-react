import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="min-h-screen bg-slate-200 dark:bg-slate-900">
      <Navbar />
      <main className="mx-auto max-w-5xl p-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;