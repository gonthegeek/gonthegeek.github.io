import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Tab,
  Tabs,
  Grid,
  IconButton,
  Collapse,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  GitHub as GitHubIcon,
  Launch as LaunchIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Work as WorkIcon,
  School as SchoolIcon,
  Code as CodeIcon,
} from "@mui/icons-material";

function ProjectsSection({ personalProjects, professionalProjects }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [expandedProject, setExpandedProject] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    setExpandedProject(null);
  };

  const handleExpandClick = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const getProjectIcon = (type) => {
    switch (type) {
      case "professional":
        return <WorkIcon color="primary" />;
      case "academic":
        return <SchoolIcon color="secondary" />;
      default:
        return <CodeIcon color="action" />;
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      "Full-Stack Web Development": "primary",
      "Mobile Development": "secondary",
      "AI/ML Integration": "success",
      "Systems Programming": "warning",
      "Data Science": "info",
      "Frontend Development": "primary",
      "DevOps & Automation": "warning",
      "Enterprise Web Development": "primary",
      "AI/Automation": "success",
      "Network & Systems": "warning",
      "Business Intelligence": "info",
      "Leadership & Management": "secondary",
    };
    return colors[category] || "default";
  };

  const ProjectCard = ({ project, index }) => (
    <Grid item xs={12} md={6} lg={4} key={project.id}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: theme.shadows[8],
            },
            transition: "all 0.3s ease-in-out",
          }}
        >
          <CardContent sx={{ flexGrow: 1, pb: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              {getProjectIcon(project.type)}
              <Typography variant="h6" component="h3" sx={{ ml: 1, flexGrow: 1 }}>
                {project.name}
              </Typography>
              {project.confidential && (
                <Chip
                  label="Professional"
                  size="small"
                  color="secondary"
                  variant="outlined"
                />
              )}
            </Box>

            {project.company && (
              <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                @ {project.company}
              </Typography>
            )}

            <Chip
              label={project.category}
              color={getCategoryColor(project.category)}
              size="small"
              sx={{ mb: 2 }}
            />

            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {project.description}
            </Typography>

            <Box sx={{ mb: 2 }}>
              {project.technologies.slice(0, 3).map((tech, techIndex) => (
                <Chip
                  key={techIndex}
                  label={tech}
                  size="small"
                  variant="outlined"
                  sx={{ mr: 0.5, mb: 0.5 }}
                />
              ))}
              {project.technologies.length > 3 && (
                <Chip
                  label={`+${project.technologies.length - 3} more`}
                  size="small"
                  variant="outlined"
                  sx={{ mr: 0.5, mb: 0.5 }}
                />
              )}
            </Box>

            {project.highlights && (
              <Typography variant="body2" sx={{ fontStyle: "italic", color: "primary.main" }}>
                💡 {project.highlights}
              </Typography>
            )}
          </CardContent>

          <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
            <Box>
              {project.githubUrl && !project.confidential && (
                <IconButton
                  component="a"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  size="small"
                >
                  <GitHubIcon />
                </IconButton>
              )}
              {project.liveUrl && (
                <IconButton
                  component="a"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  size="small"
                >
                  <LaunchIcon />
                </IconButton>
              )}
            </Box>
            <IconButton
              onClick={() => handleExpandClick(project.id)}
              color="primary"
              size="small"
            >
              {expandedProject === project.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </CardActions>

          <Collapse in={expandedProject === project.id} timeout="auto" unmountOnExit>
            <CardContent sx={{ pt: 0 }}>
              <Typography variant="subtitle2" gutterBottom>
                Key Features:
              </Typography>
              <List dense>
                {project.features.map((feature, featureIndex) => (
                  <ListItem key={featureIndex} sx={{ py: 0 }}>
                    <ListItemText
                      primary={`• ${feature}`}
                      primaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItem>
                ))}
              </List>
              
              <Typography variant="subtitle2" gutterBottom sx={{ mt: 1 }}>
                Technologies Used:
              </Typography>
              <Box>
                {project.technologies.map((tech, techIndex) => (
                  <Chip
                    key={techIndex}
                    label={tech}
                    size="small"
                    variant="outlined"
                    sx={{ mr: 0.5, mb: 0.5 }}
                  />
                ))}
              </Box>
            </CardContent>
          </Collapse>
        </Card>
      </motion.div>
    </Grid>
  );

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 4 },
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
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
          Projects & Work
        </Typography>

        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: "800px", mx: "auto" }}
        >
          A showcase of my professional work and personal projects demonstrating full-stack development,
          system design, and innovative problem-solving across various technologies and domains.
        </Typography>

        <Box sx={{ width: "100%", mb: 4 }}>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            centered
            sx={{
              "& .MuiTabs-indicator": {
                height: 3,
                borderRadius: "3px 3px 0 0",
              },
            }}
          >
            <Tab
              label={`Personal Projects (${personalProjects?.length || 0})`}
              icon={<CodeIcon />}
              iconPosition="start"
            />
            <Tab
              label={`Professional Work (${professionalProjects?.length || 0})`}
              icon={<WorkIcon />}
              iconPosition="start"
            />
          </Tabs>
        </Box>

        {selectedTab === 0 && personalProjects && (
          <Grid container spacing={3}>
            {personalProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </Grid>
        )}

        {selectedTab === 1 && professionalProjects && (
          <Grid container spacing={3}>
            {professionalProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </Grid>
        )}

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Want to see more of my work?
          </Typography>
          <Button
            variant="outlined"
            size="large"
            startIcon={<GitHubIcon />}
            component="a"
            href="https://github.com/gonthegeek"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              borderRadius: 3,
              px: 4,
              py: 1.5,
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: theme.shadows[8],
              },
              transition: "all 0.3s ease-in-out",
            }}
          >
            View All Repositories on GitHub
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
}

export default ProjectsSection;