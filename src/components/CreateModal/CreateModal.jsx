import React, { useState } from 'react';

import './CreateModal.css'
import document from '../../assets/document.png';

function CreateModal({ placeholder, btnText, type, breadCrumb, setOpenModal, setData, tree, setTree }) {
    const [name, setName] = useState('');

    const handleClick = () => {
        const barr = breadCrumb.split("/").slice(1);

        function createFileOrFolder(idx, barr, tree ){
            if(tree == undefined) return;
            if(barr.length == 0){
                alert("Please select a folder");
                return;
            }
            let newTree = [...tree];
            for(let i=0; i<newTree.length; i++){
                if(newTree[i].type == "folder"){
                    if(newTree[i].name == barr[idx]){
                        if(idx == barr.length-1){
                            if(newTree[i].childrens){
                                newTree[i] = {...newTree[i]}
                                newTree[i].childrens = [...newTree[i].childrens, {type, name}]
                            }else{
                                newTree[i].childrens = [{type, name}]
                            }
                        }
                        
                        newTree[i] = {...newTree[i]};
                        let childArr = newTree[i].childrens;
                        newTree[i].childrens = createFileOrFolder(idx+1, barr, childArr);
                    }
                }
            }
            return newTree;
        }
        const newTree = createFileOrFolder(0, barr, tree)
        if(newTree != undefined){
            setTree(newTree)
        }
        setOpenModal(false);
        setData({ placeholder: "", btnText: "", type: "" });
    }

    const handleChange = (e) => {
        setName(e.target.value);
    }

    return (
        <div className="modal-blur">
            <div className="modal-container">
                <div className="modal-input-container create-modal">
                    <img src={document} alt="images" />
                    <input placeholder={placeholder} className="modal-input create-modal-input" type="text"  onChange={handleChange}/>
                </div>
                <button className="modal-create-file" onClick={handleClick}>{btnText}</button>
            </div>
        </div>
    )
}

export default CreateModal;
