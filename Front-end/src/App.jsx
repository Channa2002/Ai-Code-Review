import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Login";
import MainPage from "./Mainpage";
import RegisterPage from "./Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
