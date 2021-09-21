import React from 'react';

import './LockModal.css'

function LockModal({setOpen}) {
    const handleClick = () => {
        setOpen(false);
    }
    return (
        <div className="modal-container">
            <div className="modal-input-container lock-modal">
                <input className="modal-input lock-modal-input" type="text" />
                <input className="modal-input lock-modal-input" type="text" />
                <input className="modal-input lock-modal-input" type="text" />
                <input className="modal-input lock-modal-input" type="text" />
            </div>
            <button className="modal-create-file" onClick={handleClick}>Unlock</button>
        </div>
    )
}

export default LockModal;
