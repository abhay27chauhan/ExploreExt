import React, { useState } from "react";

import folderOpen from '../../assets/folder-open.png';
import folderClosed from '../../assets/folder-closed.png';
import './treeComponent.css'

const Folder = ({ name, children, path, setBreadCrumb}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = e => {
    e.preventDefault();
    setBreadCrumb(path);
    setIsOpen(!isOpen);
  };

  return (
    <div className="tree-folder">
      <div className="folder--label" onClick={handleToggle}>
        <img src={isOpen ? folderOpen: folderClosed}/>
        <span>{name}</span>
      </div>
      {children && <div className={isOpen ? `collapsible open` : `collapsible`}>{children}</div>}
    </div>
  );
};

const TreeRecursive = ({ data, path, setBreadCrumb }) => {
  // loop through the data

  let arr =  data.map(item => {
    if(item.type === "folder"){
      if(item.childrens){
        return (
          <Folder name={item.name} path={`${path}/${item.name}`} setBreadCrumb={setBreadCrumb}>
            {/* Call the <TreeRecursive /> component with the current item.childrens */}
            <TreeRecursive data={item.childrens} path={`${path}/${item.name}`} setBreadCrumb={setBreadCrumb}/>
          </Folder>
        );
      }else{
        return (
          <Folder name={item.name} path={`${path}/${item.name}`} setBreadCrumb={setBreadCrumb}>
          </Folder>
        );
      }
    }
  });

  arr = arr.filter(val => val != undefined);
  return arr;
};

const Tree = ({ data, setBreadCrumb }) => {

  return (
    <div className="tree">
      <TreeRecursive data={data} path='' setBreadCrumb={setBreadCrumb}/>
    </div>
  );
};

export default Tree;
