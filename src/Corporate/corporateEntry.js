import React, { useState } from "react";

const CorporateEntryForm = ({ onSubmit }) => {
  const [companyName, setCompanyName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [industry, setIndustry] = useState("");
  const [employeeCount, setEmployeeCount] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const corporateData = {
      companyName,
      contactPerson,
      email,
      phone,
      industry,
      employeeCount,
      location,
    };

    if (onSubmit) onSubmit(corporateData);
    alert("Corporate details submitted successfully!");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Corporate Details Entry</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Company Name</label>
        <input style={styles.input} type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />

        <label style={styles.label}>Contact Person</label>
        <input style={styles.input} type="text" value={contactPerson} onChange={(e) => setContactPerson(e.target.value)} required />

        <label style={styles.label}>Email</label>
        <input style={styles.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label style={styles.label}>Phone Number</label>
        <input style={styles.input} type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />

        <label style={styles.label}>Industry Type</label>
        <input style={styles.input} type="text" value={industry} onChange={(e) => setIndustry(e.target.value)} required />

        <label style={styles.label}>Number of Employees</label>
        <input style={styles.input} type="number" value={employeeCount} onChange={(e) => setEmployeeCount(e.target.value)} required />

        <label style={styles.label}>Location</label>
        <input style={styles.input} type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 500,
    margin: "50px auto",
    padding: 30,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    marginBottom: 25,
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    border: "1px solid #ccc",
  },
  button: {
    padding: 12,
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: 5,
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: 10,
  },
};

export default CorporateEntryForm;
