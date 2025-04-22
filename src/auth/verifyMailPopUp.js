import React, { useState } from "react";

const EmailVerification = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const handleVerifyClick = () => {
    setShowPopup(true);
  };

  const handleSubmit = () => {
    alert(`Verifying OTP ${otp} for email ${email}`);
    setShowPopup(false);
    setOtp("");
    setEmail("");
  };

  const popupStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    zIndex: 1000,
    width: "300px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.3)"
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    margin: "8px 0",
    borderRadius: "4px",
    border: "1px solid #ccc"
  };

  const buttonStyle = {
    padding: "10px 20px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
    marginTop: "10px"
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={handleVerifyClick} style={buttonStyle}>
        Verify Email
      </button>

      {showPopup && (
        <>
          <div style={overlayStyle} />
          <div style={popupStyle}>
            <h3>Email Verification</h3>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              style={inputStyle}
            />
            <button onClick={handleSubmit} style={buttonStyle}>
              Submit OTP
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default EmailVerification;
