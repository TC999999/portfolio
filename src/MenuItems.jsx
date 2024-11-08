import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";

const MenuItems = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    setAnchorEl(e.target);
    setIsOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };

  return (
    <div className="menu">
      <IconButton
        id="menu-button"
        onClick={handleClick}
        aria-controls={isOpen ? "small-width-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : undefined}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="small-width-menu"
        anchorEl={anchorEl}
        open={isOpen}
        MenuListProps={{ "aria-labelledby": "menu-button" }}
        onClose={handleClose}
      >
        <MenuItem
          color="inherit"
          component={Link}
          to="/about"
          onClick={handleClose}
        >
          About
        </MenuItem>
        <MenuItem
          color="inherit"
          component={Link}
          to="/skills"
          onClick={handleClose}
        >
          Skills
        </MenuItem>
        <MenuItem
          color="inherit"
          component={Link}
          to="/projects"
          onClick={handleClose}
        >
          Projects
        </MenuItem>
        <MenuItem
          color="inherit"
          component={Link}
          to="/contact"
          onClick={handleClose}
        >
          Contact
        </MenuItem>

        <MenuItem
          color="inherit"
          component={Link}
          to="/certifications"
          onClick={handleClose}
        >
          Certifications
        </MenuItem>
        <MenuItem color="inherit">Blog</MenuItem>
      </Menu>
    </div>
  );
};

export default MenuItems;
