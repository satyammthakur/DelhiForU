import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./routes/About";
import ContactPage from "./routes/Contact";
import HomePage from "./routes/Home";
import ServicePage from "./routes/Service";
import SignUpPage from "./routes/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}
export default App;