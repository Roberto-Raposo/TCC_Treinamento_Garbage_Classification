import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Result from "./pages/Result.jsx";
import SavedResults from "./pages/SavedResults.jsx";
import About from "./pages/About.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resultado" element={<Result />} />
          <Route path="/resultados-salvos" element={<SavedResults />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}
