import React, { useState } from 'react';

import './CreateModal.css'
import document from '../../assets/document.png';

function CreateModal({ placeholder, btnText, type, breadCrumb, setOpenModal, setData, tree, setTree }) {
    const [name, setName] = useState('')

    const barr = breadCrumb.split("/");

    const handleClick = () => {
        setOpenModal(false);
        setData({ placeholder: "", btnText: "" });
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
