import React from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Container
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
}from '@mui/lab'

function ExperienceSection({ id, experience }) {
  if (!experience) return null;

  return (
    <Box id={id} sx={{ py: 8, bgcolor: 'grey.50' }}>
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom textAlign="center">
          Experience
        </Typography>
        <Timeline position="alternate">
          {experience.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Card elevation={3}>
                  <CardContent>
                    <Typography variant="h6" color="primary">
                      {exp.role}
                    </Typography>
                    <Typography variant="subtitle1">
                      {exp.company}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {exp.duration}
                    </Typography>
                    <Box component="ul" sx={{ mt: 2 }}>
                      {exp.details.map((detail, idx) => (
                        <Typography component="li" key={idx}>
                          {detail}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}

export default ExperienceSection;