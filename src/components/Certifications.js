import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Container,
  Grid,
  Button,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import VerifiedIcon from "@mui/icons-material/Verified";

function CertificationsSection({ id, certifications }) {
  if (!certifications) return null;

  return (
    <Box component="section" id={id} sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{
            mb: 6,
            background: "linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Certifications
        </Typography>

        <Grid container spacing={3}>
          {certifications.map((cert, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card
                  elevation={3}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: 8,
                    },
                  }}
                >
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      <VerifiedIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="h6" color="primary">
                        {cert.title}
                      </Typography>
                    </Box>
                    <Typography variant="subtitle1" gutterBottom>
                      {cert.issuer}
                    </Typography>
                    <Chip label={cert.date} size="small" sx={{ mt: 1 }} />
                    {cert.credentialUrl && (
                      <Button
                        variant="outlined"
                        color="primary"
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ mt: 2 }}
                        fullWidth
                      >
                        View Credential
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default CertificationsSection;
