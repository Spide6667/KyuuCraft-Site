import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import TestThemes from "./pages/TestThemes";
import Navbar from "@/components/Navbar";
import "@/App.css";

export function App() {
  return (
    <div className="shell-container">
        <Router>
          <Navbar/>
          <div className="bg-gradient-to-r from-secondary via-background to-secondary main-holder">
              <div className="bg-background main-container">
              <Routes>
                <Route path="/" Component={Home} />
                <Route path="/test/test-themes" Component={TestThemes} />
              </Routes>
          </div>
          </div>
        </Router>
    </div>
  )
}

export default App
