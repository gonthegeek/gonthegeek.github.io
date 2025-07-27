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
        { name: "React", level: 95, years: "3+", description: "Advanced component architecture, hooks, context" },
        { name: "Angular", level: 85, years: "2+", description: "Enterprise applications, TypeScript integration" },
        { name: "JavaScript (ES6+)", level: 95, years: "5+", description: "Modern JavaScript, async/await, modules" },
        { name: "TypeScript", level: 90, years: "2+", description: "Type safety, interfaces, generics" },
        { name: "HTML5/CSS3", level: 90, years: "5+", description: "Semantic markup, flexbox, grid, animations" },
        { name: "Material-UI", level: 85, years: "2+", description: "Component customization, theming" }
      ]
    },
    backend: {
      name: "Backend Development",
      icon: <DatabaseIcon />,
      color: "#388e3c",
      skills: [
        { name: "Django", level: 90, years: "3+", description: "REST APIs, ORM, authentication" },
        { name: "Node.js", level: 85, years: "2+", description: "Express.js, API development" },
        { name: "Python", level: 95, years: "5+", description: "Data processing, automation, web development" },
        { name: "Java", level: 80, years: "2+", description: "Object-oriented programming, Spring basics" },
        { name: "PHP", level: 75, years: "1+", description: "Web development, basic frameworks" },
        { name: "PostgreSQL", level: 85, years: "3+", description: "Complex queries, database design" },
        { name: "MongoDB", level: 80, years: "2+", description: "Document databases, aggregation" }
      ]
    },
    cloud: {
      name: "Cloud & DevOps",
      icon: <CloudIcon />,
      color: "#f57c00",
      skills: [
        { name: "Microsoft Azure", level: 85, years: "2+", description: "AZ-900 certified, cloud architecture" },
        { name: "Power Platform", level: 90, years: "2+", description: "Power BI, Power Apps, automation" },
        { name: "Firebase", level: 80, years: "1+", description: "Hosting, real-time database" },
        { name: "Git/GitHub", level: 90, years: "5+", description: "Version control, collaboration" },
        { name: "Docker", level: 70, years: "1+", description: "Containerization basics" }
      ]
    },
    broadcast: {
      name: "Broadcast Technology",
      icon: <DevicesIcon />,
      color: "#7b1fa2",
      skills: [
        { name: "SRT Streaming", level: 90, years: "2+", description: "Real-time monitoring, broadcast reliability" },
        { name: "Avid Systems", level: 85, years: "2+", description: "Professional broadcast workflows" },
        { name: "VPOST", level: 85, years: "2+", description: "Video production operations" },
        { name: "Latakoo", level: 80, years: "2+", description: "File transfer and collaboration" },
        { name: "WebRTC", level: 75, years: "1+", description: "Real-time communication" },
        { name: "Network Management", level: 85, years: "3+", description: "IP device control, monitoring" }
      ]
    }
  };

  const categories = Object.keys(skillCategories);

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
                "Creating intuitive user interfaces with modern frameworks and best practices"}
              {currentCategory.name === "Backend Development" && 
                "Building robust server-side applications and APIs with scalable architectures"}
              {currentCategory.name === "Cloud & DevOps" && 
                "Leveraging cloud platforms and automation tools for efficient deployment"}
              {currentCategory.name === "Broadcast Technology" && 
                "Specialized expertise in professional broadcasting and real-time streaming systems"}
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
              Currently exploring AI/ML integration, advanced cloud architectures, 
              and emerging web technologies to stay at the forefront of innovation.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

export default SkillsSection;
