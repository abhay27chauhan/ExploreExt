import React, { useState, useEffect } from 'react';

import document from '../../assets/document.png';
import EditFile from '../EditFile/EditFile';
import './Main.css'

function Main({ tree, breadCrumb }) {
    const [editFile, setEditFile] = useState(false);
    const [fileData, setFileData] = useState({});
    const [carr, setcArr] = useState([]);

    useEffect(() => {
        let barr = breadCrumb.split("/").slice(1);
        function getFiles(idx, barr, tree ){
            if(tree == undefined || barr.length == 0) return;
            for(let i=0; i<tree.length; i++){
                if(tree[i].type == "folder"){
                    if(tree[i].name == barr[idx]){
                        if(idx == barr.length-1){
                            setcArr(tree[i].childrens || []);
                            return;
                        }
                        let childArr = tree[i].childrens;
                        getFiles(idx+1, barr, childArr);
                    }
                }
            }
        }
        getFiles(0, barr, tree)
    }, [breadCrumb])

    let farr = carr.filter(obj => obj.type !== "folder");

    const handleClick = (file) => {
        setFileData({
            ...file,
            path: breadCrumb
        })
        setEditFile(true);
    }

    return (
        <div className="main">
            {
                farr.map(file => (
                    <div className="file" onClick={() => handleClick(file)}>
                        <img className="file-img" src={document} alt="document" />
                        <p className="file-name">{file.name}</p>
                    </div>
                ))
            }
            {editFile && <EditFile setEditFile={setEditFile} fileData={fileData} />}
        </div>
    )
}

export default Main;
