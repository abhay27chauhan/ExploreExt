import React, { useState, useEffect } from 'react';

import document from '../../assets/document.png';
import EditFile from '../EditFile/EditFile';
import './Main.css'

function Main({ tree, breadCrumb }) {
    const [editFile, setEditFile] = useState(false);
    const [fileData, setFileData] = useState({});

    let barr = breadCrumb.split("/").slice(1);

    const handleClick = (file) => {
        setFileData({
            ...file,
            path: breadCrumb
        })
        setEditFile(true);
    }

    return (
        <div className="main">
            {/* {
                filArr.map(file => (
                    <div className="file" onClick={() => handleClick(file)}>
                        <img className="file-img" src={document} alt="document" />
                        <p className="file-name">{file.name}</p>
                    </div>
                ))
            } */}
            {editFile && <EditFile setEditFile={setEditFile} fileData={fileData} />}
        </div>
    )
}

export default Main;
