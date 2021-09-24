import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

import "./Header.css";
import CustomMenu from "../Menu/Menu";
import CreateModal from "../CreateModal/CreateModal";

function Header({ setActive, setBreadCrumb, breadCrumb, tree, setTree, setSearch, searchText }) {
  const [data, setData] = useState({ placeholder: "", btnText: "", type: "" });
  const [openModal, setOpenModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  let barr = breadCrumb.split("/").slice(1);

  const handlePath = (e) => {
    const endPathName = e.currentTarget.className;
    let pathArr = [];
    function completePath(match, tree){
      for(let i=0; i<tree.length; i++){
        if(tree[i].type == "folder"){
          if(tree[i].name == match){
            pathArr.unshift(match);
            return;
          }else{
            let childArr = tree[i].childrens;
            if(childArr != undefined){
              completePath(match, childArr);
              if(pathArr.length > 0){
                pathArr.unshift(tree[i].name);
                return;
              }
            }
          }
        }
      }
    }

    completePath(endPathName, tree, pathArr)
    pathArr.unshift("");
    const cpath = pathArr.join("/");
    setBreadCrumb(cpath)
    setActive(endPathName);
  }

  const handleClick = (event) => {
    
    if(event.currentTarget.className.split(" ").includes("cross")){
      setSearch("");
    }else{
      setAnchorEl(event.currentTarget);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClose = (e) => {
    if (e.target.outerText == "File") {
      setData({
        placeholder: "Enter file name..",
        btnText: "Create File",
        type: "file",
      });
    } else {
      setData({
        placeholder: "Enter folder name..",
        btnText: "Create Folder",
        type: "folder",
      });
    }
    setOpenModal(true);
    setAnchorEl(null);
  };

  return (
    <div className="header">
      <div className="breadcrumbs">
        {
          barr.map((pathName, i) => (
            <span key={`${pathName}${i}`} className={pathName} onClick={handlePath}>{"/" + pathName}</span>
          ))
        }
        </div>
      <div className="grow"></div>
      <div className="header__actions">
        <div className="header__search-container">
          <input
            placeholder="Search.."
            className="search__input"
            value={searchText}
            onChange={handleChange}
          />
          <SearchIcon />
        </div>
        {searchText.trim().length > 0 ? (
          <button
            onClick={handleClick}
            className="header__create-btn cross"
          >
            x
          </button>
        ) : (
          <button
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="header__create-btn"
          >
            +
          </button>
        )}
        <CustomMenu open={open} anchorEl={anchorEl} handleClose={handleClose} />
      </div>
      {openModal && (
        <CreateModal
          {...data}
          breadCrumb={breadCrumb}
          setOpenModal={setOpenModal}
          setData={setData}
          tree={tree}
          setTree={setTree}
        />
      )}
    </div>
  );
}

export default Header;
