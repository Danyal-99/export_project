import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import TestComponent from "./Components/TestComponent";
import { Typography } from "@mui/material";

const App = () => {
  return (
    <>
      <Typography variant="h2">Main App</Typography>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<TestComponent />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
