import React from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Container,
  useMediaQuery,
  useTheme
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  if (!experience) return null;

  return (
    <Box id={id} sx={{ py: 8, bgcolor: 'grey.50' }} className="experience-section">
      <Container maxWidth="md">
        <Typography 
          variant={isMobile ? "h4" : "h3"} 
          gutterBottom 
          textAlign="center"
          sx={{ mb: 4 }}
        >
          Experience
        </Typography>
        <Timeline 
          position={isMobile ? "left" : "alternate"}
          sx={{
            '& .MuiTimelineItem-root': {
              minHeight: 'auto',
              '&:before': {
                content: isMobile ? 'none' : '""'
              }
            },
            '& .MuiTimelineContent-root': {
              px: isMobile ? 1 : 2,
              py: 1
            },
            '& .MuiTimelineSeparator-root': {
              mx: isMobile ? 1 : 'auto'
            }
          }}
        >
          {experience.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot 
                  color="primary" 
                  sx={{ 
                    width: isMobile ? 12 : 16, 
                    height: isMobile ? 12 : 16 
                  }} 
                />
                {index < experience.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Card 
                  elevation={3}
                  sx={{
                    mb: 2,
                    maxWidth: isMobile ? '280px' : 'none',
                    mx: isMobile ? 0 : 'auto'
                  }}
                >
                  <CardContent sx={{ p: isMobile ? 2 : 3, textAlign: 'left' }}>
                    <Typography 
                      variant={isMobile ? "subtitle1" : "h6"} 
                      color="primary"
                      sx={{ 
                        fontWeight: 'bold',
                        mb: 0.5,
                        fontSize: isMobile ? '1rem' : '1.25rem',
                        textAlign: 'left'
                      }}
                    >
                      {exp.role}
                    </Typography>
                    <Typography 
                      variant={isMobile ? "body1" : "subtitle1"}
                      sx={{ 
                        fontWeight: 'medium',
                        mb: 0.5,
                        fontSize: isMobile ? '0.9rem' : '1rem',
                        textAlign: 'left'
                      }}
                    >
                      {exp.company}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ 
                        mb: 2,
                        fontSize: isMobile ? '0.8rem' : '0.875rem',
                        textAlign: 'left'
                      }}
                    >
                      {exp.duration}
                    </Typography>
                    <Box 
                      component="ul" 
                      sx={{ 
                        mt: 1,
                        pl: isMobile ? 2 : 2.5,
                        m: 0,
                        textAlign: 'left',
                        '& li': {
                          mb: 0.5,
                          fontSize: isMobile ? '0.85rem' : '0.9rem',
                          lineHeight: 1.4,
                          textAlign: 'left'
                        }
                      }}
                    >
                      {exp.details.map((detail, idx) => (
                        <Typography 
                          component="li" 
                          key={idx}
                          sx={{
                            fontSize: isMobile ? '0.85rem' : '0.9rem',
                            lineHeight: 1.4,
                            mb: 0.5,
                            textAlign: 'left'
                          }}
                        >
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