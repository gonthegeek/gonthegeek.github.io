import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";

function NavBar({ isMobile, setMobileOpen, setActiveSection }) {
  // Scroll handler function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(sectionId);
  };

  return (
    <AppBar position="fixed" color="default" elevation={1}>
      <Toolbar>
        {/* Keep existing Typography component */}
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            background: "linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          GR
        </Typography>
        {isMobile ? (
          <IconButton onClick={() => setMobileOpen(true)}>
            <i className="fas fa-bars"></i>
          </IconButton>
        ) : (
          <Box sx={{ display: "flex", gap: 2 }}>
            {[
              "Home",
              "About",
              "Skills",
              "Experience",
              "Projects",
              "Education",
              "Resume",
              "Contact",
            ].map((item) => (
              // Fixed onClick handler
              <Button
                key={item}
                color="inherit"
                onClick={() => scrollToSection(item.toLowerCase())}
              >
                {item}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;