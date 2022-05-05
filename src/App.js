import React from "react"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Onboard from "./pages/Onboard"
import Dashboard from "./pages/Dashboard"
import Check from "./pages/Check"
import Exam from "./pages/Exam"
import Settings from "./pages/Settings"
import Header from './components/Header'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App(props) {
  return (
    <div>
        <div>
            <Header />
        </div>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/onboard" element={<Onboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/check" element={<Check />} />
            <Route path="/exam" element={<Exam />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
