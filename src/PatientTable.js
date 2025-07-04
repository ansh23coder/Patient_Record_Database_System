import React, { useRef } from "react";

function PatientTable({ patients }) {
  const printRef = useRef([]);

  // Print only the selected patient
  const handlePrint = (index) => {
    const printContents = printRef.current[index].innerHTML;
    const newWindow = window.open("", "_blank", "width=700,height=900");
    newWindow.document.write(`
      <html>
        <head>
          <title>Patient Record</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            table { width: 100%; border-collapse: collapse; margin-top: 10px;}
            th, td { border: 1px solid #bbb; padding: 8px; text-align: left; }
            th { background: #1976d2; color: #fff; }
          </style>
        </head>
        <body>
          ${printContents}
        </body>
      </html>
    `);
    newWindow.document.close();
    newWindow.focus();
    newWindow.print();
    setTimeout(() => newWindow.close(), 500);
  };

  if (!patients.length) return <p>No patient data yet.</p>;

  return (
    <div style={{ overflowX: "auto" }}>
      <h2>Patient List</h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: 8,
          background: "#fff",
          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        }}
      >
        <thead style={{ background: "#1976d2", color: "#fff" }}>
          <tr>
            <th style={th}>Name</th>
            <th style={th}>Age</th>
            <th style={th}>Gender</th>
            <th style={th}>BP</th>
            <th style={th}>Temp (°C)</th>
            <th style={th}>Weight (kg)</th>
            <th style={th}>Diagnosis</th>
            <th style={th}>Reason</th>
            <th style={th}>Contact</th>
            <th style={th}>Fees Paid</th>
            <th style={th}>Date</th>
            <th style={th}>Time</th>
            <th style={th}>Print</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p, idx) => (
            <tr key={p.id}>
              <td style={td}>{p.name}</td>
              <td style={td}>{p.age}</td>
              <td style={td}>{p.gender}</td>
              <td style={td}>{p.bp}</td>
              <td style={td}>{p.temp}</td>
              <td style={td}>{p.weight}</td>
              <td style={td}>{p.diagnosis}</td>
              <td style={td}>{p.reason}</td>
              <td style={td}>{p.contact}</td>
              <td style={td}>{p.feesPaid}</td>
              <td style={td}>{p.date}</td>
              <td style={td}>{p.time}</td>
              <td style={td}>
                <button onClick={() => handlePrint(idx)}>Print</button>
                {/* Hidden printable section for this patient */}
                <div
                  style={{ display: "none" }}
                  ref={el => (printRef.current[idx] = el)}
                >
                  <h2>Patient Information</h2>
                  <table>
                    <tbody>
                      <tr><th>Name</th><td>{p.name}</td></tr>
                      <tr><th>Age</th><td>{p.age}</td></tr>
                      <tr><th>Gender</th><td>{p.gender}</td></tr>
                      <tr><th>Blood Pressure</th><td>{p.bp}</td></tr>
                      <tr><th>Temperature (°C)</th><td>{p.temp}</td></tr>
                      <tr><th>Weight (kg)</th><td>{p.weight}</td></tr>
                      <tr><th>Diagnosis</th><td>{p.diagnosis}</td></tr>
                      <tr><th>Reason for Consultation</th><td>{p.reason}</td></tr>
                      <tr><th>Contact</th><td>{p.contact}</td></tr>
                      <tr><th>Fees Paid</th><td>{p.feesPaid}</td></tr>
                      <tr><th>Date</th><td>{p.date}</td></tr>
                      <tr><th>Time</th><td>{p.time}</td></tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const th = {
  padding: 10,
  borderBottom: "2px solid #1565c0",
  textAlign: "left",
};

const td = {
  padding: 8,
  borderBottom: "1px solid #eee",
};

export default PatientTable;