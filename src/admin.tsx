import React from "react";
import { Link } from "react-router-dom";

export default function AdminPanel() {
  return (
    <div className="Generalpanel">
      <h2>Admin Panel</h2>
      {/* <div className="Generalpanel"> */}
        <div className="panel">
          <div className="panelChild">
            <button className="panelChild1">Get Products</button>
            <button className="panelChild1">Delete Products</button>
            <button className="panelChild1">Insert Products</button>
            <button className="panelChild1">Update Products</button>
          </div>
          <div className="admin">
            <div className="adminChild">Total Income</div>
            <div className="adminChild">Total Expenses</div>
            <div className="adminChild">Total Assets</div>
            <div className="adminChild">Total Staff</div>
          </div>
        </div>
        <div className="panelMember1">Display data panel</div>

        <div>
        <Link to="/login">
          <button className="btnBelow" type="button">
            Return
          </button>
        </Link>
      </div>
      </div>
    // </div>
  );
}
