import React, { useState } from "react";

const defaultForm = {
  name: "",
  age: "",
  gender: "",
  diagnosis: "",
  contact: "",
  bp: "",
  temp: "",
  weight: "",
  reason: "",
  feesPaid: "No",
};

function PatientForm({ addPatient }) {
  const [form, setForm] = useState(defaultForm);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? (checked ? "Yes" : "No") : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.age || !form.gender) {
      alert("Please fill in all required fields.");
      return;
    }
    // Add current date and time
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    addPatient({ ...form, date, time });
    setForm(defaultForm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#f5f5f5",
        padding: 20,
        borderRadius: 8,
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
      }}
    >
      <h2>Add Patient</h2>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 180 }}>
          <label>Name*<br/>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              style={{ width: "100%" }}
            />
          </label>
        </div>
        <div style={{ flex: 1, minWidth: 100 }}>
          <label>Age*<br/>
            <input
              name="age"
              type="number"
              value={form.age}
              onChange={handleChange}
              required
              style={{ width: "100%" }}
            />
          </label>
        </div>
        <div style={{ flex: 1, minWidth: 120 }}>
          <label>Gender*<br/>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              required
              style={{ width: "100%" }}
            >
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </label>
        </div>
        <div style={{ flex: 1, minWidth: 100 }}>
          <label>BP<br/>
            <input
              name="bp"
              value={form.bp}
              onChange={handleChange}
              placeholder="e.g. 120/80"
              style={{ width: "100%" }}
            />
          </label>
        </div>
        <div style={{ flex: 1, minWidth: 100 }}>
          <label>Temp (°C)<br/>
            <input
              name="temp"
              type="number"
              step="0.1"
              value={form.temp}
              onChange={handleChange}
              placeholder="e.g. 98.6"
              style={{ width: "100%" }}
            />
          </label>
        </div>
        <div style={{ flex: 1, minWidth: 100 }}>
          <label>Weight (kg)<br/>
            <input
              name="weight"
              type="number"
              step="0.1"
              value={form.weight}
              onChange={handleChange}
              placeholder="e.g. 70"
              style={{ width: "100%" }}
            />
          </label>
        </div>
        <div style={{ flex: 2, minWidth: 200 }}>
          <label>Diagnosis<br/>
            <input
              name="diagnosis"
              value={form.diagnosis}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
          </label>
        </div>
        <div style={{ flex: 2, minWidth: 200 }}>
          <label>Reason for Consultation<br/>
            <input
              name="reason"
              value={form.reason}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
          </label>
        </div>
        <div style={{ flex: 2, minWidth: 200 }}>
          <label>Contact Info<br/>
            <input
              name="contact"
              value={form.contact}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
          </label>
        </div>
        <div style={{ flex: 1, minWidth: 150, marginTop: 30 }}>
          <label>
            <input
              type="checkbox"
              name="feesPaid"
              checked={form.feesPaid === "Yes"}
              onChange={handleChange}
              style={{ marginRight: 8 }}
            />
            Fees Paid
          </label>
        </div>
      </div>
      <button
        type="submit"
        style={{
          marginTop: 16,
          padding: "8px 24px",
          background: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Add Patient
      </button>
    </form>
  );
}

export default PatientForm;