import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SupabaseTest from "./pages/SupabaseTest";
import PainQuestionsPage from "./pages/PainQuestionsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/supabasetest" element={<SupabaseTest />} />
      <Route path="/questions/:painAreaId" element={<PainQuestionsPage />} />
    </Routes>
  );
}

export default App;
