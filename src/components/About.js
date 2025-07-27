import React from "react";
import { 
  Typography, 
  Container, 
  Box, 
  Grid, 
  Card, 
  CardContent,
  LinearProgress,
  Chip,
  Avatar
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Code as CodeIcon,
  School as SchoolIcon,
  Work as WorkIcon,
  EmojiEvents as AchievementIcon,
} from "@mui/icons-material";

function AboutSection({ id, summary }) {
  if (!summary) return null;

  const achievements = [
    {
      icon: <WorkIcon />,
      title: "5+ Years Experience",
      description: "Full-stack development and system design"
    },
    {
      icon: <CodeIcon />,
      title: "Enterprise Solutions",
      description: "NBCUniversal broadcast systems and automation"
    },
    {
      icon: <SchoolIcon />,
      title: "Engineering Degree",
      description: "Information Technology & Intelligent Systems"
    },
    {
      icon: <AchievementIcon />,
      title: "Team Leadership",
      description: "Led digital transformation projects"
    }
  ];

  const keySkillsAreas = [
    { area: "Frontend Development", proficiency: 95, technologies: ["React", "Angular", "TypeScript"] },
    { area: "Backend Development", proficiency: 90, technologies: ["Django", "Node.js", "Python"] },
    { area: "Cloud & DevOps", proficiency: 85, technologies: ["Azure", "Power Platform", "Automation"] },
    { area: "Broadcast Technology", proficiency: 88, technologies: ["SRT Streaming", "Avid", "Real-time Systems"] }
  ];

  return (
    <Box 
      id={id} 
      sx={{ 
        py: { xs: 6, md: 10 }, 
        bgcolor: "background.default",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(135deg, rgba(25, 118, 210, 0.05) 0%, rgba(66, 165, 245, 0.05) 100%)",
          zIndex: 0
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography 
            variant="h3" 
            component="h2"
            gutterBottom 
            textAlign="center"
            sx={{
              fontWeight: "bold",
              mb: 2,
              background: "linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)",
              backgroundClip: "text",
              textFillColor: "transparent",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About Me
          </Typography>
          
          <Typography 
            variant="h6" 
            textAlign="center" 
            color="text.secondary" 
            sx={{ mb: 6, maxWidth: "800px", mx: "auto" }}
          >
            Passionate engineer with expertise in full-stack development, 
            broadcast technology, and innovative problem-solving
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* Professional Summary */}
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card sx={{ height: "100%", p: 2 }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom color="primary" sx={{ fontWeight: "bold" }}>
                    Professional Journey
                  </Typography>
                  {summary.map((text, index) => (
                    <Typography 
                      key={index} 
                      paragraph 
                      sx={{ 
                        textAlign: "justify", 
                        lineHeight: 1.7,
                        color: "text.secondary",
                        mb: 2
                      }}
                    >
                      {text}
                    </Typography>
                  ))}
                  
                  <Box sx={{ mt: 3 }}>
                    <Typography variant="h6" gutterBottom color="primary">
                      Key Expertise Areas
                    </Typography>
                    {keySkillsAreas.map((skill, index) => (
                      <Box key={index} sx={{ mb: 3 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                          <Typography variant="body2" fontWeight="bold">
                            {skill.area}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {skill.proficiency}%
                          </Typography>
                        </Box>
                        <LinearProgress 
                          variant="determinate" 
                          value={skill.proficiency} 
                          sx={{ 
                            mb: 1, 
                            height: 8, 
                            borderRadius: 4,
                            bgcolor: "grey.200",
                            "& .MuiLinearProgress-bar": {
                              borderRadius: 4
                            }
                          }} 
                        />
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                          {skill.technologies.map((tech, techIndex) => (
                            <Chip 
                              key={techIndex} 
                              label={tech} 
                              size="small" 
                              variant="outlined"
                              sx={{ fontSize: "0.75rem" }}
                            />
                          ))}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Achievements */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card sx={{ height: "100%", p: 2 }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom color="primary" sx={{ fontWeight: "bold" }}>
                    Key Achievements
                  </Typography>
                  
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                        <Avatar 
                          sx={{ 
                            bgcolor: "primary.main", 
                            mr: 2,
                            width: 48,
                            height: 48
                          }}
                        >
                          {achievement.icon}
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle1" fontWeight="bold">
                            {achievement.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {achievement.description}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  ))}

                  <Box sx={{ mt: 4, p: 2, bgcolor: "primary.light", borderRadius: 2 }}>
                    <Typography variant="body2" color="primary.contrastText" textAlign="center">
                      <strong>💡 Innovation Focus:</strong><br />
                      Specializing in real-time systems, automation, and scalable web applications 
                      that solve complex business challenges.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutSection;
