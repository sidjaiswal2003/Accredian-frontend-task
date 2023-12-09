import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";

import "../Navbar.css"; 

export default function Navbar({ toggleDarkMode, darkMode }) {
  return (
    <AppBar position="static"  style={{backgroundColor: `${darkMode ? " #333":"white"}` }}className={`Navbar ${darkMode ? "dark-mode" : ""}`}>
      <Toolbar>
        <Typography  component="div" sx={{ flexGrow: 1 }}>
          <img className="logo" src="images/accredian-logo-1.png" alt="Logo" />
        </Typography>


        <IconButton   style={{backgroundColor:" rgb(202, 203, 208)"}}color="inherit" onClick={toggleDarkMode}>
          <Brightness4Icon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
