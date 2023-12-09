import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Sign from "./Components/Sign";
import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
import LockIcon from "@mui/icons-material/Lock";

import "./App.css"; 

function App() {

  const [checked, setChecked] = useState(true);


  const [darkMode, setDarkMode] = useState(false);


  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode");
  };


  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <>
   
    <ThemeProvider theme={theme}>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    <div className="App">
        <Paper elevation={3} style={{ padding: "10px", paddingBottom: "50px" }}>
          <div align="center">

            {checked ? (
              <Chip
                icon={<LockIcon />}
                label="Log In"
                variant="outlined"
                color="info"
              />
            ) : (
              <Chip
                icon={<FaceIcon />}
                label="Sign Up"
                variant="outlined"
                color="info"
              />
            )}
            <br />


            <Switch
              checked={checked}
              onChange={() => setChecked(!checked)}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>


          {checked ? <Login /> : <Sign />}
        </Paper>
      </div>
    </ThemeProvider>
    </>
  );
}

export default App;
