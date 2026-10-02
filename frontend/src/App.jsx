import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Builder from "./pages/Builder";
import MyResumes from "./pages/MyResumes";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

     <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/builder" element={<Builder />} />
  <Route path="/builder/:id" element={<Builder />} />
  <Route path="/my-resumes" element={<MyResumes />} />
</Routes> 
    </BrowserRouter>
  );
}

export default App;