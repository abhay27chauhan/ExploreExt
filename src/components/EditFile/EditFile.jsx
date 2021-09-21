import React from 'react';

import document from '../../assets/document.png';
import './EditFile.css'

function EditFile({ setEditFile, fileData }) {
    const handleClick = () => {
        setEditFile(false);
    }

    const handleChange = () => {
        
    }

    return (
        <div className="edit-file-blur">
            <div class="edit-file-container">
                <div class="heading-container">
                    <img src={document} alt="document" />
                    <p class="file-name">{fileData.name}</p>
                </div>
                <div class="edit-file-input">
                    <textarea name="" id="" cols="30" rows="10" onChange={handleChange}></textarea>
                </div>
                <button class="save-file" onClick={handleClick}>Save file</button>
            </div>
        </div>
    )
}

export default EditFile;
