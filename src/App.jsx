import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import PainSelection from "./pages/PainSelection";
import Results from "./pages/Results";
import PainQuestionsPage from "./pages/PainQuestionsPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/pain-selection" element={<PainSelection />} />
      <Route path="/results" element={<Results />} />
      <Route path="/questions/:painAreaId" element={<PainQuestionsPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  )
}

export default App;
