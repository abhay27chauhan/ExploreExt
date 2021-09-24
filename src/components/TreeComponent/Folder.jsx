import React, { useState } from "react";

import folderOpen from "../../assets/folder-open.png";
import folderClosed from "../../assets/folder-closed.png";

const Folder = ({ active, setActive, name, children, path, setBreadCrumb }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setActive(e.currentTarget.children[1].innerText);
    setBreadCrumb(path);
    setIsOpen(!isOpen);
  };

  console.log(active);
  console.log(name);
  let additional = active == name ? `folder--label dark` : `folder--label`;

  return (
    <div className="tree-folder">
      <div className={additional} onClick={handleToggle}>
        <img src={isOpen ? folderOpen : folderClosed} />
        <span>{name}</span>
      </div>
      {children && (
        <div className={isOpen ? `collapsible open` : `collapsible`}>
          {children}
        </div>
      )}
    </div>
  );
};


export default Folder;