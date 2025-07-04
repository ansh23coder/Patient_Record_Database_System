import React, { useState, useEffect } from "react";
import PatientForm from "./PatientForm";
import PatientTable from "./PatientTable";

function App() {
  const [patients, setPatients] = useState([]);

  // Load from LocalStorage on mount
  useEffect(() => {
    const savedPatients = JSON.parse(localStorage.getItem("patients")) || [];
    setPatients(savedPatients);
  }, []);

  // Save to LocalStorage when patients change
  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const addPatient = (patient) => {
    setPatients([...patients, { ...patient, id: Date.now() }]);
  };

  return (
    <div style={{ maxWidth: 1000, margin: "2rem auto", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>Patient Record Database System</h1>
      <PatientForm addPatient={addPatient} />
      <hr style={{ margin: "2rem 0" }} />
      <PatientTable patients={patients} />
    </div>
  );
}

export default App;