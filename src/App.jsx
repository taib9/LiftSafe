import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SupabaseTest from "./pages/SupabaseTest";
import PainSelection from "./pages/PainSelection";
import Results from "./pages/Results";
import PainQuestionsPage from "./pages/PainQuestionsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/supabasetest" element={<SupabaseTest />} />
      <Route path="/pain-selection" element={<PainSelection />} />
      <Route path="/results" element={<Results />} />
      <Route path="/questions/:painAreaId" element={<PainQuestionsPage />} />
    </Routes>
  );
}

export default App;
