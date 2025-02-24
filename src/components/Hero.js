import React from "react";
import { Typography, Button, Container, Box } from "@mui/material";

function HeroSection({ id, personalInfo }) {
  const { name, title } = personalInfo || {};

  // Add scroll to contact section handler
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add resume download handler
  const handleResumeClick = () => {
    // Add your resume file path here
    window.open('src/assets/RonzonGonzalo_Resume.pdf','_blank');
  };

  return (
    <Box
      id={id}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #1976d2 0%, #21CBF3 100%)",
        color: "white",
        pt: 8,
      }}
    >
      <Container maxWidth="md">
        <Box textAlign="center">
          <Typography variant="h2" component="h1" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Box
            sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2 }}
          >
            {/* Added onClick handler for resume button */}
            <Button
              variant="contained"
              onClick={handleResumeClick}
              sx={{
                bgcolor: "white",
                color: "primary.main",
                "&:hover": { bgcolor: "grey.100" },
              }}
            >
              View Resume
            </Button>
            {/* Added onClick handler for contact button */}
            <Button
              variant="outlined"
              onClick={scrollToContact}
              sx={{
                color: "white",
                borderColor: "white",
                "&:hover": { borderColor: "grey.100" },
              }}
            >
              Contact Me
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default HeroSection;