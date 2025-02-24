// src/components/About.js
import React from "react";
import { Typography, Container, Box } from "@mui/material";

function AboutSection({ id, summary }) {
  if (!summary) return null;

  return (
    <Box id={id} sx={{ py: 8, bgcolor: "grey.50" }}>
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom textAlign="center">
          About Me
        </Typography>
        {summary.map((text, index) => (
          <Typography key={index} paragraph>
            {text}
          </Typography>
        ))}
      </Container>
    </Box>
  );
}

export default AboutSection;
