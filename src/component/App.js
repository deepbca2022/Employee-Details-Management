import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../auth/Login"; // Because Login.js is inside src/auth
import React from "react";
import CorporateEntryForm from "../Corporate/corporateEntry";
import EmployeeEntryForm from './EmpForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/corporate-entry" element={<CorporateEntryForm />} />
        <Route path="/employee-entry" element={<EmployeeEntryForm />} />
      </Routes>
    </Router>
  );
}

export default App;
