import React from "react";
import Sales from "./Sales";
import Profile from "./Profile";
function DashBoard() {
  return (
    <div className="dashboard">
      <div className="sales">
        <Sales />
      </div>
      <div className="profile">
        <Profile />
      </div>
    </div>
  );
}

export default DashBoard;
