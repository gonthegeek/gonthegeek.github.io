import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Container,
  Grid,
} from "@mui/material";

function EducationSection({ id,education }) {
  if (!education) return null;

  return (
    <Box id={id} sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom textAlign="center">
          Education
        </Typography>
        <Grid container spacing={4}>
          {education.map((edu, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                elevation={3}
                sx={{
                  height: "100%",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 8,
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6" color="primary">
                    {edu.degree}
                  </Typography>
                  <Typography variant="subtitle1">{edu.institution}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {edu.duration}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    {edu.details}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default EducationSection;
