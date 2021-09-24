import React, { useState } from "react";

import TreeRecursive from "./TreeRecursive";
import "./treeComponent.css";

const Tree = ({ data, setBreadCrumb }) => {
  const [active, setActive] = useState('');

  return (
    <div className="tree">
      <TreeRecursive active={active} setActive={setActive} data={data} path="" setBreadCrumb={setBreadCrumb} />
    </div>
  );
};

export default Tree;
