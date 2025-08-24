import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";   // ✅ correct import
import LandingPage from "./components/LandingPage";
import AIGenerate from "./ai-generate/AIGenerate";
import Recommender from "./recommender/Recommender";
import Books from "./books/Books";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* NavBar always visible */}
        <NavBar />   {/* ✅ match filename and import */}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ai-generate" element={<AIGenerate />} />
          <Route path="/recommender" element={<Recommender />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
