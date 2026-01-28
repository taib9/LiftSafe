import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SupabaseTest from "./pages/SupabaseTest";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/supabasetest" element={<SupabaseTest />} />
    </Routes>
  );
}

export default App;
