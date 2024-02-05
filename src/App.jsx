import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Socials from "./Pages/Socials";

import "./App.css";
import Projects from "./Pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Personal_Portfolio1" element={<Home />} />
        
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Socials" element={<Socials />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
