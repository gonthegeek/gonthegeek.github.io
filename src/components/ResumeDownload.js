import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  PictureAsPdf as PdfIcon,
  Download as DownloadIcon,
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const ResumeDownloadSection = () => {
  const handleDownloadResume = () => {
    // Simple download of pre-generated PDF
    const link = document.createElement('a');
    link.href = '/Gonzalo Ronzon - Resume.pdf'; // PDF stored in public folder
    link.download = 'Gonzalo_Ronzon_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
        bgcolor: "background.paper",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Card
          sx={{
            maxWidth: 600,
            mx: "auto",
            background: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
            color: "white",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <CardContent sx={{ p: 4, textAlign: "center" }}>
            <PdfIcon sx={{ fontSize: 48, mb: 2, opacity: 0.9 }} />
            
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: "bold" }}>
              Download Resume
            </Typography>
            
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
              Get a comprehensive PDF version of my resume with all professional experience,
              skills, and contact information ready for your review.
            </Typography>

            <Button
              variant="contained"
              size="large"
              startIcon={<DownloadIcon />}
              onClick={handleDownloadResume}
              sx={{
                bgcolor: "white",
                color: "primary.main",
                fontWeight: "bold",
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                borderRadius: 3,
                "&:hover": {
                  bgcolor: "grey.100",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                },
                transition: "all 0.3s ease-in-out",
              }}
            >
              Download PDF Resume
            </Button>

            <Box sx={{ mt: 3, pt: 3, borderTop: "1px solid rgba(255,255,255,0.2)" }}>
              <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
                Connect with me:
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                <Tooltip title="Email">
                  <IconButton
                    component="a"
                    href="mailto:gonzaloronzon@proton.me"
                    sx={{ color: "white", "&:hover": { bgcolor: "rgba(255,255,255,0.1)" } }}
                  >
                    <EmailIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="LinkedIn">
                  <IconButton
                    component="a"
                    href="https://www.linkedin.com/in/gonzalo-ronzon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "white", "&:hover": { bgcolor: "rgba(255,255,255,0.1)" } }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="GitHub">
                  <IconButton
                    component="a"
                    href="https://github.com/gonthegeek"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "white", "&:hover": { bgcolor: "rgba(255,255,255,0.1)" } }}
                  >
                    <GitHubIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default ResumeDownloadSection;
