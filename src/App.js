import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import ScrollToTopButton from "./components/ScrollToTopButton";
import PrintButton from "./components/PrintButton";
 import data from './data/resumeData.json';
import Header from "./components/Header";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [resumeData, setResumeData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // If using a local JSON file in src/data, you can import directly:
    // import data from './data/resumeData.json';
    setResumeData(data);

    // OR fetch if it's in public/data:
/*     fetch("/data/resumeData.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setResumeData(data))
      .catch((err) => setError(err)); */
  }, []);

/*   if (error) {
    return <div>An error occurred while loading resume data: {error.message}</div>;
  } */

  if (!resumeData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app-container">
      <NavBar />
      <Header personalInfo={resumeData.personalInfo} />

      <main>
        <Summary summary={resumeData.summary} />
        <Skills skills={resumeData.skills} />
        <Experience experience={resumeData.experience} />
        <Projects projects={resumeData.projects} />
        <Education education={resumeData.education} />
      </main>

      <PrintButton />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;