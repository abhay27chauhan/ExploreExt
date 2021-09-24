import { useState } from "react";

import "./App.css";

import { structure } from "./structure";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";

function App() {
  const [breadCrumb, setBreadCrumb] = useState("");
  const [tree, setTree] = useState(structure);
  const [search, setSearch] = useState("");
  const [active, setActive] = useState('');

  return (
    <div className="app">
      <Sidebar tree={tree} setBreadCrumb={setBreadCrumb} active={active} setActive={setActive} />
      <div className="container">
        <Header
          setBreadCrumb={setBreadCrumb}
          breadCrumb={breadCrumb}
          tree={tree}
          setTree={setTree}
          setSearch={setSearch}
          searchText={search}
          setActive={setActive}
        />
        <Main breadCrumb={breadCrumb} tree={tree} searchText={search} />
      </div>
    </div>
  );
}

export default App;
