import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Navigation from "./components/Navigation";
import HeroSection from "./components/Hero";
import AboutSection from "./components/About";
import SkillsSection from "./components/Skills";
import ExperienceSection from "./components/Experience";
import ProjectsSection from "./components/Projects";
import EducationSection from "./components/Education";
import CertificationsSection from "./components/Certifications";
import ResumeDownloadSection from "./components/ResumeDownload";
import ContactSection from "./components/Contact";
import resumeData from "./data/resumeData.json";
import projectsData from "./data/projectsData.json";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";

function App() {
  const {
    personalInfo,
    summary,
    skills,
    experience,
    education,
    certifications,
  } = resumeData;

  const { personalProjects, professionalProjects } = projectsData;

  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ bgcolor: "background.default" }}>
      <CssBaseline>
        <Navigation
          isMobile={isMobile}
          setMobileOpen={setMobileOpen}
        />
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
        >
          <List sx={{ width: 250 }}>
            {[
              "Home",
              "About",
              "Skills",
              "Experience",
              "Projects",
              "Education",
              "Resume",
              "Contact",
            ].map((text) => (
              <ListItem
                button
                key={text}
                onClick={() => {
                  const element = document.getElementById(text.toLowerCase());
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                  setMobileOpen(false);
                }}
              >
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <HeroSection id="home" personalInfo={personalInfo} />
        <AboutSection id="about" summary={summary} />
        <SkillsSection id="skills" skills={skills} />
        <ExperienceSection id="experience" experience={experience} />
        <ProjectsSection 
          id="projects" 
          personalProjects={personalProjects} 
          professionalProjects={professionalProjects} 
        />
        <CertificationsSection certifications={certifications} />
        <EducationSection id="education" education={education} />
        <ResumeDownloadSection id="resume" personalInfo={personalInfo} />
        <ContactSection id="contact" personalInfo={personalInfo} />
        {/* <Footer /> */}
      </CssBaseline>
    </Box>
  );
}

export default App;
