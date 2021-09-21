import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import './Menu.css'

export default function CustomMenu({open, anchorEl, handleClose }) {
  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>File</MenuItem>
        <MenuItem onClick={handleClose}>Folder</MenuItem>
      </Menu>
    </div>
  );
}