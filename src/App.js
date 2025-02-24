import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./components/NavBar";
import HeroSection from "./components/Hero";
import AboutSection from "./components/About";
import SkillsSection from "./components/Skills";
import ExperienceSection from "./components/Experience";
import EducationSection from "./components/Education";
import CertificationsSection from "./components/Certifications";
import ContactSection from "./components/Contact";
import resumeData from "./data/resumeData.json";
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

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ bgcolor: "background.default" }}>
      <CssBaseline>
        <NavBar
          isMobile={isMobile}
          setMobileOpen={setMobileOpen}
          setActiveSection={setActiveSection}
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
              "Education",
              "Contact",
            ].map((text) => (
              <ListItem
                button
                key={text}
                onClick={() => {
                  setActiveSection(text.toLowerCase());
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
        {/*         <ProjectsSection projects={projects} />
         */}
        <CertificationsSection certifications={certifications} />
        <EducationSection id="education" education={education} />
        <ContactSection id="contact" personalInfo={personalInfo} />
        {/* <Footer /> */}
      </CssBaseline>
    </Box>
  );
}

export default App;
