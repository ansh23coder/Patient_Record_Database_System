import React, { useState, useEffect } from "react";
import PatientForm from "./PatientForm";
import PatientTable from "./PatientTable";
import Login from "./Login";

function App() {
  const [patients, setPatients] = useState([]);
  const [loggedIn, setLoggedIn] = useState(
    () => sessionStorage.getItem("loggedIn") === "true"
  );

  // Load patients from LocalStorage on mount
  useEffect(() => {
    const savedPatients = JSON.parse(localStorage.getItem("patients")) || [];
    setPatients(savedPatients);
  }, []);

  // Save patients to LocalStorage when patients change
  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const addPatient = (patient) => {
    setPatients([...patients, { ...patient, id: Date.now() }]);
  };

  const handleLogin = () => {
    setLoggedIn(true);
    sessionStorage.setItem("loggedIn", "true");
  };

  const handleLogout = () => {
    setLoggedIn(false);
    sessionStorage.removeItem("loggedIn");
  };

  if (!loggedIn) return <Login onLogin={handleLogin} />;

  return (
    <div style={{ maxWidth: 1000, margin: "2rem auto", fontFamily: "Arial" }}>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={handleLogout}
          style={{
            padding: "4px 16px",
            background: "#e53935",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            fontWeight: "bold",
            cursor: "pointer",
            marginBottom: 8,
          }}
        >
          Logout
        </button>
      </div>
      <h1 style={{ textAlign: "center" }}>Patient Record Database System</h1>
      <PatientForm addPatient={addPatient} />
      <hr style={{ margin: "2rem 0" }} />
      <PatientTable patients={patients} />
    </div>
  );
}

export default App;