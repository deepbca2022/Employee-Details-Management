import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../auth/Login"; // Because Login.js is inside src/auth
import React from "react";
import CorporateEntryForm from "../Corporate/corporateEntry";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/corporate-entry" element={<CorporateEntryForm />} />
      </Routes>
    </Router>
  );
}

export default App;
