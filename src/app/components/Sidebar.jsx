"use client";

import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { CiBoxes } from "react-icons/ci";
function Sidebar() {
  const [assigNment, setAssignMent] = useState("hello");
  const handleClick = () => {
    console.log("hello");
  };
  return (
    <div className="sidebar">
      <div className="sidebarContent">
        <div className="mainSidebarHeading">
          <div className="mainSidebar">
            <CiBoxes size={30} />
          </div>
          <div>
            <h5 className="font-bold text-sm">Hi, AltWorld</h5>
          </div>
        </div>
        <div className="sidebarDashboard">
          <div className="homeIconBar">
            <IoHome className="homeIcon" size={20} />
          </div>
          <h5>dashboard</h5>
        </div>
        <div className="assignNewBoard">
          <div className="plusContainer">
            <FaPlus className="plusIcon" size={20} />
          </div>
          <h5>New Assignment?</h5>
          <p>Select from pre-defined questions to have a quick turnaround</p>
          <button className="btn text-sm" onClick={handleClick}>
            Create New Assignment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
