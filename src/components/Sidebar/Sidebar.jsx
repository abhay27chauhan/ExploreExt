import React, { useState } from "react";

import LockModal from "../LockModal/LockModal";
import Tree from "../TreeComponent/TreeComponent";
import logo from "../../assets/logo.png";

import "./Sidebar.css";

function Sidebar({ tree, setBreadCrumb, active, setActive }) {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <img src={logo} className="sidebar__logo" alt="logo" />
        <h3 className="sidebar__title">ExploreXT</h3>
      </div>
      <div className="sidebar__folders">
        <Tree active={active} setActive={setActive} data={tree} setBreadCrumb={setBreadCrumb} />
      </div>
      <div className="lock-btn" onClick={handleClick}>
        Lock
      </div>
      {open && (
        <div className="blur-background">
          <LockModal setOpen={setOpen} />
        </div>
      )}
    </div>
  );
}

export default Sidebar;
