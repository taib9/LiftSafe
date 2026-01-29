import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SupabaseTest from "./pages/SupabaseTest";
import PainSelection from "./pages/PainSelection";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/supabasetest" element={<SupabaseTest />} />
      <Route path="/painselection" element={<PainSelection />} />
    </Routes>
  );
}

export default App;
