// src/components/SkillsSection.jsx
import React from "react";
import { Typography, Container, Box, Grid, Paper } from "@mui/material";

function SkillsSection({ id, skills }) {
  if (!skills) return null;

  return (
    <Box id={id} sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom textAlign="center">
          Skills
        </Typography>
        <Grid container spacing={2}>
          {skills.map((skill, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Paper
                elevation={2}
                sx={{
                  p: 2,
                  textAlign: "center",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 4,
                  },
                }}
              >
                <Typography>{skill}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default SkillsSection;
