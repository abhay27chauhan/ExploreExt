import React, { useState } from 'react';

import './Header.css'
import CustomMenu from '../Menu/Menu';
import CreateModal from '../CreateModal/CreateModal';

function Header({ breadCrumb, tree, setTree }) {
    const [data, setData] = useState({placeholder:"", btnText: "", type: ""});
    const [openModal, setOpenModal] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (e) => {
        if(e.target.outerText == "File"){
            setData({placeholder:"Enter file name..", btnText: "Create File", type: "file"});
        }else{
            setData({placeholder:"Enter folder name..", btnText: "Create Folder", type: "folder"});
        }
        setOpenModal(true);
        setAnchorEl(null);
    };

    return (
        <div className="header">
            <div className="breadcrumbs">{breadCrumb}</div>
            <div className="grow"></div>
            <div className="header__actions">
                <input placeholder="Search.." className="search__input" />
                <button aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick} className="header__create-btn">+</button>
                <CustomMenu open={open} anchorEl={anchorEl} handleClose={handleClose} />
            </div>
            {openModal && <CreateModal {...data} breadCrumb={breadCrumb} setOpenModal={setOpenModal} setData={setData} tree={tree} setTree={setTree}  />}
        </div>
    )
}

export default Header;