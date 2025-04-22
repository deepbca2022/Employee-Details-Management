import React, { useState } from "react";
import CorporateEntryForm from '../Corporate/corporateEntry';
import { useLocation } from "react-router-dom";
   

const EmployeeEntryForm = ({ onSubmit }) => {
  const location = useLocation();
  const organization = location.state?.organization || "";
  const [empName, setEmpName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [locationField, setLocationField] = useState("");
  const [duration, setDuration] = useState("");
  const [empID, setEmpID] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const corporateData = {
      organization,
      empName,
      empID,
      contactNo,
      email,
      phone,
      jobRole,
      employmentType,
      location: locationField,
      duration,
    };

    if (onSubmit) onSubmit(corporateData);
    alert("Employee details submitted successfully!");

    setEmpName("");
    setEmpID("");
    setContactNo("");
    setEmail("");
    setPhone("");
    setJobRole("");
    setEmploymentType("");
    setLocationField("");
    setDuration("");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Employee Details Entry</h2>
      <form onSubmit={handleSubmit} style={styles.form}>

      <label style={styles.label}>Organization</label>
        <input style={styles.input} type="text" value={organization} disabled />

        <label style={styles.label}>Name</label>
        <input style={styles.input} type="text" value={empName} placeholder="--Enter Name--" onChange={(e) => setEmpName(e.target.value)} required />

        <label style={styles.label}>Employee ID</label>
        <input style={styles.input} type="text" value={empID} onChange={(e) => setEmpID(e.target.value)} placeholder="--Enter Employee ID--" required />

        <label style={styles.label}>Primary Contact Number</label>
        <input style={styles.input} type="text" value={contactNo} onChange={(e) => setContactNo(e.target.value)} placeholder="--Enter Contact Number--" required />

        <label style={styles.label}>Email</label>
        <input style={styles.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="--Enter Email ID--" required />

        <label style={styles.label}>ALternate Number</label>
        <input style={styles.input} type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="--Enter Alternate Number--" required />

        <label style={styles.label}>Job Role</label>
            <select
            style={styles.input}
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
            required
            >
            <option value="">--Select Job Role--</option>
            <option value="IT">IT</option>
            <option value="Audit">Audit</option>
            <option value="Customer Support">Customer Support</option>
            <option value="Front-Desk">Front-Desk</option>
            <option value="Manager">Manager</option>
            <option value="Accounts">Accounts</option>
            <option value="HR">HR</option>
            </select>

        <label style={styles.label}>Employment Type</label>
            <select
            style={styles.input}
            value={employmentType}
            onChange={(e) => setEmploymentType(e.target.value)}
            required
            >
            <option value="">--Select employment type--</option>
            <option value="part-time">Part-time</option>
            <option value="full-time">Full-time</option>
            <option value="contractual">Contractual</option>
            </select>

        <label style={styles.label}>Location</label>
            <select
            style={styles.input}
            value={locationField}
            onChange={(e) => setLocationField(e.target.value)}
            required
            >
            <option value="">--Select Location--</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Bengalore">Bengalore</option>
            <option value="Hyderabadt">Hyderabad</option>
            <option value="Noida">Noida</option>
            <option value="Gurugram">Gurugram</option>
            <option value="Chennai">Chennai</option>
            <option value="Mumbai">Mumbai</option>
            </select>

        <label style={styles.label}>Duration(in months)</label>
        <input style={styles.input} type="text" value={duration} onChange={(e) => setDuration(e.target.value)} required />

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

export default EmployeeEntryForm;
