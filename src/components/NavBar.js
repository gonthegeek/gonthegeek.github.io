import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function NavBar({ isMobile, setMobileOpen }) {
  // Scroll handler function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
          <IconButton 
            onClick={() => setMobileOpen(true)}
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ 
              display: { xs: 'flex', md: 'none' },
              color: 'text.primary',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)'
              },
              '& .MuiSvgIcon-root': {
                fontSize: '1.8rem',
                color: 'text.primary'
              }
            }}
          >
            <MenuIcon />
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