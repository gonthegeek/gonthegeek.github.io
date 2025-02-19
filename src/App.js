// src/App.jsx
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import NavBar from "./components/NavBar";
import HeroSection from "./components/Hero";
import SummarySection from "./components/Summary";
import SkillsSection from "./components/Skills";
import ExperienceSection from "./components/Experience";
import ProjectsSection from "./components/Projects";
import EducationSection from "./components/Education";
import CertificationsSection from "./components/Certifications";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

import resumeData from "./data/resumeData.json"; // <-- import JSON
import "./App.css";

function App() {
  // Destructure the data for convenience
  const {
    personalInfo,
    summary,
    skills,
    experience,
    projects,
    education,
    certifications,
  } = resumeData;

  return (
    <ParallaxProvider>
      <NavBar personalInfo={personalInfo} />
      <HeroSection personalInfo={personalInfo} />
      <SummarySection summary={summary} />
      <SkillsSection skills={skills} />
      <ExperienceSection experience={experience} />
      <ProjectsSection projects={projects} />
      <EducationSection education={education} />
      <CertificationsSection certifications={certifications} />
      <ContactSection contact={personalInfo} />
      <ScrollToTopButton />
      <Footer />
    </ParallaxProvider>
  );
}

export default App;