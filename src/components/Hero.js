import React from "react";
import { 
  Typography, 
  Button, 
  Container, 
  Box, 
  Chip,
  Grid,
  IconButton,
  Tooltip
} from "@mui/material";
import { motion } from "framer-motion";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  GetApp as DownloadIcon,
  ContactMail as ContactIcon,
} from "@mui/icons-material";

function HeroSection({ id, personalInfo }) {
  const { name, title, location, email, linkedin, github } = personalInfo || {};

  // Add scroll to contact section handler
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add scroll to resume section handler
  const scrollToResume = () => {
    const resumeSection = document.getElementById('resume');
    if (resumeSection) {
      resumeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const highlights = [
    "5+ Years Experience",
    "Full-Stack Developer", 
    "NBCUniversal Engineer",
    "Azure Certified"
  ];

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
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "10%",
          width: 100,
          height: 100,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.1)",
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "60%",
          right: "15%",
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.1)",
          animation: "float 4s ease-in-out infinite reverse",
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    opacity: 0.9, 
                    mb: 1,
                    fontWeight: 500,
                    letterSpacing: 1
                  }}
                >
                  Hello, I'm
                </Typography>
                
                <Typography 
                  variant="h2" 
                  component="h1" 
                  gutterBottom
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "3rem", md: "4rem" },
                    lineHeight: 1.1,
                    mb: 2
                  }}
                >
                  {name}
                </Typography>
                
                <Typography 
                  variant="h5" 
                  gutterBottom
                  sx={{
                    opacity: 0.95,
                    fontWeight: 400,
                    mb: 3,
                    fontSize: { xs: "1.3rem", md: "1.5rem" }
                  }}
                >
                  {title}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <LocationIcon sx={{ mr: 1, opacity: 0.8 }} />
                  <Typography variant="body1" sx={{ opacity: 0.9 }}>
                    {location}
                  </Typography>
                </Box>

                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 3, 
                    opacity: 0.9,
                    fontWeight: 300,
                    lineHeight: 1.6,
                    maxWidth: "600px"
                  }}
                >
                  Specialized in building enterprise-grade applications, 
                  real-time broadcasting systems, and innovative automation solutions 
                  that drive business outcomes.
                </Typography>

                <Box sx={{ mb: 4, display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    >
                      <Chip
                        label={highlight}
                        sx={{
                          bgcolor: "rgba(255,255,255,0.2)",
                          color: "white",
                          fontWeight: "bold",
                          border: "1px solid rgba(255,255,255,0.3)",
                          "&:hover": {
                            bgcolor: "rgba(255,255,255,0.3)",
                          }
                        }}
                      />
                    </motion.div>
                  ))}
                </Box>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
                    <Button
                      variant="contained"
                      size="large"
                      onClick={scrollToResume}
                      startIcon={<DownloadIcon />}
                      sx={{
                        bgcolor: "white",
                        color: "primary.main",
                        fontWeight: "bold",
                        px: 4,
                        py: 1.5,
                        borderRadius: 3,
                        "&:hover": { 
                          bgcolor: "grey.100",
                          transform: "translateY(-2px)",
                          boxShadow: "0 8px 25px rgba(0,0,0,0.2)"
                        },
                        transition: "all 0.3s ease-in-out",
                      }}
                    >
                      Download Resume
                    </Button>
                    
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={scrollToContact}
                      startIcon={<ContactIcon />}
                      sx={{
                        color: "white",
                        borderColor: "white",
                        fontWeight: "bold",
                        px: 4,
                        py: 1.5,
                        borderRadius: 3,
                        "&:hover": { 
                          borderColor: "grey.100",
                          bgcolor: "rgba(255,255,255,0.1)",
                          transform: "translateY(-2px)"
                        },
                        transition: "all 0.3s ease-in-out",
                      }}
                    >
                      Let's Connect
                    </Button>
                  </Box>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Tooltip title="Email">
                      <IconButton
                        component="a"
                        href={`mailto:${email}`}
                        sx={{ 
                          color: "white", 
                          bgcolor: "rgba(255,255,255,0.1)",
                          "&:hover": { 
                            bgcolor: "rgba(255,255,255,0.2)",
                            transform: "translateY(-2px)"
                          },
                          transition: "all 0.3s ease-in-out",
                        }}
                      >
                        <EmailIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="LinkedIn">
                      <IconButton
                        component="a"
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ 
                          color: "white", 
                          bgcolor: "rgba(255,255,255,0.1)",
                          "&:hover": { 
                            bgcolor: "rgba(255,255,255,0.2)",
                            transform: "translateY(-2px)"
                          },
                          transition: "all 0.3s ease-in-out",
                        }}
                      >
                        <LinkedInIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="GitHub">
                      <IconButton
                        component="a"
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ 
                          color: "white", 
                          bgcolor: "rgba(255,255,255,0.1)",
                          "&:hover": { 
                            bgcolor: "rgba(255,255,255,0.2)",
                            transform: "translateY(-2px)"
                          },
                          transition: "all 0.3s ease-in-out",
                        }}
                      >
                        <GitHubIcon />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  p: 4,
                  bgcolor: "rgba(255,255,255,0.1)",
                  borderRadius: 4,
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)"
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                  🚀 Ready to Collaborate
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
                  Looking for opportunities to build innovative solutions and 
                  contribute to impactful projects.
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", gap: 1, flexWrap: "wrap" }}>
                  <Chip label="Available for Hire" size="small" sx={{ bgcolor: "success.main", color: "white" }} />
                  <Chip label="Open to Remote" size="small" sx={{ bgcolor: "info.main", color: "white" }} />
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Add floating animation keyframes */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}
      </style>
    </Box>
  );
}

export default HeroSection;