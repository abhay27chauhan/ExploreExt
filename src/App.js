import { useState } from 'react';

import './App.css';

import { structure } from './structure'
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

function App() {
  const [breadCrumb, setBreadCrumb] = useState('')
  const [tree, setTree] = useState(structure);

  return (
    <div className="app">
      <Sidebar tree={tree} setBreadCrumb={setBreadCrumb} />
      <div className="container">
        <Header breadCrumb={breadCrumb} tree={tree} setTree={setTree} />
        <Main breadCrumb={breadCrumb} tree={tree}/>
      </div>
    </div>
  );
}

export default App;
