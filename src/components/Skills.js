import React, { useState } from "react";
import { 
  Typography, 
  Container, 
  Box, 
  Grid, 
  Paper, 
  Chip,
  Tab,
  Tabs,
  LinearProgress,
  Card,
  CardContent
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Code as CodeIcon,
  Storage as DatabaseIcon,
  Cloud as CloudIcon,
  Devices as DevicesIcon,
  Star as StarIcon,
  TrendingUp as TrendingIcon,
} from "@mui/icons-material";

function SkillsSection({ id, skills }) {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const skillCategories = {
    frontend: {
      name: "Frontend Development",
      icon: <CodeIcon />,
      color: "#1976d2",
      skills: [
        { name: "React", level: 95, years: "3+", description: "Enterprise-grade TypeScript apps, complex state management, hooks, context" },
        { name: "JavaScript (ES6+)", level: 90, years: "5+", description: "Modern JavaScript, async/await, modules, advanced patterns" },
        { name: "TypeScript", level: 90, years: "3+", description: "Complex type systems, enterprise apps, strict mode, full-stack development" },
        { name: "Angular", level: 70, years: "3+", description: "Enterprise applications, university projects" },
        { name: "HTML5/CSS3", level: 85, years: "5+", description: "Semantic markup, flexbox, grid, responsive design" },
        { name: "Flutter", level: 85, years: "1+", description: "Complex mobile apps, Firebase integration, cross-platform, state management" }
      ]
    },
    backend: {
      name: "Backend & APIs",
      icon: <DatabaseIcon />,
      color: "#388e3c",
      skills: [
        { name: "Python", level: 95, years: "5+", description: "FastAPI, automation, data processing, web scraping" },
        { name: "Node.js", level: 90, years: "3+", description: "Firebase Functions, complex backend logic, Express.js, WebRTC platforms" },
        { name: "FastAPI", level: 90, years: "2+", description: "Microservices, health checks, real-time APIs, teaching others" },
        { name: "Django", level: 75, years: "2+", description: "REST APIs, ORM, authentication" },
        { name: "Socket Programming", level: 85, years: "2+", description: "Real-time communication, audio patching automation" },
        { name: "PostgreSQL", level: 80, years: "3+", description: "Complex queries, TimescaleDB, database design" },
        { name: "Redis", level: 75, years: "2+", description: "Caching, real-time analytics, session storage" }
      ]
    },
    cloud: {
      name: "Cloud & DevOps",
      icon: <CloudIcon />,
      color: "#f57c00",
      skills: [
        { name: "Docker", level: 85, years: "2+", description: "Containerization, Docker Compose, microservices orchestration" },
        { name: "GitHub Actions", level: 80, years: "2+", description: "CI/CD pipelines, automated deployments, testing" },
        { name: "Microsoft Azure", level: 75, years: "2+", description: "AZ-900 certified, cloud architecture" },
        { name: "Power Platform", level: 95, years: "2+", description: "Power BI, Power Apps, Power Automate, Copilot Studio" },
        { name: "Firebase", level: 85, years: "2+", description: "Full-stack apps, authentication, Firestore, Functions, real-time systems" },
        { name: "Linux", level: 80, years: "3+", description: "Server management, system administration" },
        { name: "Prometheus & Grafana", level: 70, years: "1+", description: "Monitoring, metrics collection, dashboards" }
      ]
    },
    broadcast: {
      name: "Broadcast & Automation",
      icon: <DevicesIcon />,
      color: "#7b1fa2",
      skills: [
        { name: "WebRTC", level: 85, years: "2+", description: "mediasoup integration, real-time streaming, broadcast platforms" },
        { name: "Broadcast Systems", level: 95, years: "3+", description: "Live production, audio systems, network infrastructure, teaching" },
        { name: "Playwright", level: 85, years: "2+", description: "Web automation, audio patching systems, testing" },
        { name: "Network Infrastructure", level: 90, years: "3+", description: "CCNA certified, IP device control, monitoring" },
        { name: "Audio Systems", level: 90, years: "2+", description: "Professional audio, patching automation, live sports" },
        { name: "Copilot Studio", level: 90, years: "1+", description: "AI agents, document processing, workflow automation" }
      ]
    },
    tools: {
      name: "Development Tools",
      icon: <StarIcon />,
      color: "#d32f2f",
      skills: [
        { name: "Git/GitHub", level: 90, years: "5+", description: "Version control, collaboration, advanced workflows" },
        { name: "Jest", level: 75, years: "2+", description: "Unit testing, integration testing, TDD" },
        { name: "Electron", level: 80, years: "2+", description: "Cross-platform desktop applications, broadcast tools" },
        { name: "Yarn", level: 75, years: "2+", description: "Package management, monorepo workflows" },
        { name: "Black & Prettier", level: 80, years: "2+", description: "Code formatting, quality enforcement" },
        { name: "SQLAlchemy", level: 75, years: "2+", description: "ORM, database modeling, migrations" }
      ]
    }
  };  const categories = Object.keys(skillCategories);

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  const getSkillColor = (level) => {
    if (level >= 90) return "success";
    if (level >= 80) return "primary";
    if (level >= 70) return "warning";
    return "secondary";
  };

  const SkillCard = ({ skill, index, categoryColor }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card
        sx={{
          height: "100%",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: 8,
          },
        }}
      >
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <Typography variant="h6" component="h3" sx={{ fontWeight: "bold" }}>
              {skill.name}
            </Typography>
            <Chip
              label={`${skill.level}%`}
              color={getSkillColor(skill.level)}
              size="small"
              sx={{ fontWeight: "bold" }}
            />
          </Box>
          
          <LinearProgress
            variant="determinate"
            value={skill.level}
            sx={{
              mb: 2,
              height: 8,
              borderRadius: 4,
              bgcolor: "grey.200",
              "& .MuiLinearProgress-bar": {
                borderRadius: 4,
                bgcolor: categoryColor,
              },
            }}
          />
          
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Chip
              label={`${skill.years} years`}
              variant="outlined"
              size="small"
              icon={<TrendingIcon />}
            />
            <Box sx={{ display: "flex" }}>
              {[...Array(Math.floor(skill.level / 20))].map((_, starIndex) => (
                <StarIcon key={starIndex} sx={{ color: "gold", fontSize: 16 }} />
              ))}
            </Box>
          </Box>
          
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5 }}>
            {skill.description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );

  const currentCategory = skillCategories[categories[selectedCategory]];

  return (
    <Box
      id={id}
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 4 },
        bgcolor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
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
            Technical Skills
          </Typography>
          
          <Typography
            variant="h6"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: "800px", mx: "auto" }}
          >
            A comprehensive overview of my technical expertise across frontend, backend, 
            cloud technologies, and specialized broadcast systems
          </Typography>
        </motion.div>

        <Box sx={{ width: "100%", mb: 4 }}>
          <Tabs
            value={selectedCategory}
            onChange={handleCategoryChange}
            variant={window.innerWidth < 768 ? "scrollable" : "centered"}
            scrollButtons="auto"
            sx={{
              "& .MuiTabs-indicator": {
                height: 3,
                borderRadius: "3px 3px 0 0",
              },
            }}
          >
            {categories.map((categoryKey, index) => {
              const category = skillCategories[categoryKey];
              return (
                <Tab
                  key={categoryKey}
                  label={category.name}
                  icon={category.icon}
                  iconPosition="start"
                  sx={{
                    minHeight: 64,
                    textTransform: "none",
                    fontWeight: selectedCategory === index ? "bold" : "normal",
                  }}
                />
              );
            })}
          </Tabs>
        </Box>

        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              mb: 4,
              p: 3,
              bgcolor: currentCategory.color,
              color: "white",
              borderRadius: 3,
              textAlign: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
              {currentCategory.icon}
              <Typography variant="h4" sx={{ ml: 2, fontWeight: "bold" }}>
                {currentCategory.name}
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ opacity: 0.9 }}>
              {currentCategory.name === "Frontend Development" && 
                "Creating intuitive user interfaces with modern frameworks and responsive design"}
              {currentCategory.name === "Backend & APIs" && 
                "Building robust server-side applications, APIs, and microservices architectures"}
              {currentCategory.name === "Cloud & DevOps" && 
                "Leveraging cloud platforms, containerization, and automation for scalable deployments"}
              {currentCategory.name === "Broadcast & Automation" && 
                "Specialized expertise in broadcast systems, real-time streaming, and production automation"}
              {currentCategory.name === "Development Tools" && 
                "Professional development workflow with modern tooling and best practices"}
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {currentCategory.skills.map((skill, index) => (
              <Grid item xs={12} sm={6} lg={4} key={skill.name}>
                <SkillCard
                  skill={skill}
                  index={index}
                  categoryColor={currentCategory.color}
                />
              </Grid>
            ))}
          </Grid>
        </motion.div>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Paper
            sx={{
              p: 4,
              background: "linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)",
              borderRadius: 3,
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "primary.main" }}>
              🎯 Always Learning
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: "600px", mx: "auto" }}>
              Technology evolves rapidly, and I'm committed to continuous learning. 
              Currently exploring advanced AI/ML integration with Copilot Studio, 
              microservices architecture patterns, and emerging broadcast technologies 
              to stay at the forefront of innovation while mentoring teams in modern development practices.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

export default SkillsSection;
