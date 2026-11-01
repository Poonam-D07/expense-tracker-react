import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Transactions from "./pages/Transactions";



function App() {
  return (
    <Routes>
        <Route element={<Layout />}> 
        <Route path="/" element={<Dashboard />} /> 
        <Route path="/transactions" element={<Transactions />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="*" element={<NotFound />} /> 
      </Route>
   </Routes>
  );
}

export default App;