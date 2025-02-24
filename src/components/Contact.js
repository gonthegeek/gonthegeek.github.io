import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Typography,
  Button,
  Container,
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
} from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt,
  faPaperPlane 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin, 
  faGithub 
} from '@fortawesome/free-brands-svg-icons';

function ContactSection({ id, personalInfo }) {
  // Add state for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  if (!personalInfo) return null;
  const { email, phone, location, linkedin, github } = personalInfo;

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${email}?subject=Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <Box id={id} sx={{ py: 8, bgcolor: "grey.50" }}>
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom textAlign="center">
          Contact Me
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Contact Information
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <FontAwesomeIcon icon={faEnvelope} />
                    {email}
                  </Typography>
                  <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <FontAwesomeIcon icon={faPhone} />
                    {phone}
                  </Typography>
                  <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    {location}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Button
                    variant="contained"
                    href={linkedin}
                    target="_blank"
                    startIcon={<FontAwesomeIcon icon={faLinkedin} />}
                  >
                    LinkedIn
                  </Button>
                  <Button
                    variant="contained"
                    href={github}
                    target="_blank"
                    startIcon={<FontAwesomeIcon icon={faGithub} />}
                  >
                    GitHub
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Send Message
                </Typography>
                <Box 
                  component="form" 
                  sx={{ mt: 2 }}
                  onSubmit={handleSubmit}
                >
                  <TextField
                    fullWidth
                    label="Name"
                    margin="normal"
                    variant="outlined"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    margin="normal"
                    variant="outlined"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    margin="normal"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                    startIcon={<FontAwesomeIcon icon={faPaperPlane} />}
                  >
                    Send Message
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContactSection;