import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import TestThemes from "@/pages/TestThemes";
import CmdPage from "@/pages/CmdPage";
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
                <Route path="/cmds" Component={CmdPage} />
              </Routes>
          </div>
          </div>
        </Router>
    </div>
  )
}

export default App
