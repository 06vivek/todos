import React  from "react";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import AddTask from "./components/Addtask";
import Home from "./components/Home";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addtask" element={<AddTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
