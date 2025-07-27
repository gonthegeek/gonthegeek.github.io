import React from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  GetApp as DownloadIcon,
  PictureAsPdf as PdfIcon,
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const ResumeDownloadSection = ({ personalInfo }) => {
  const handleDownloadResume = () => {
    // Create the resume content
    const resumeContent = generateResumeHTML();
    
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    printWindow.document.write(resumeContent);
    printWindow.document.close();
    
    // Trigger print dialog
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 500);
  };

  const generateResumeHTML = () => {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Gonzalo Ronzon - Resume</title>
        <style>
          @page {
            margin: 0.5in;
            size: letter;
          }
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Arial', sans-serif;
            line-height: 1.4;
            color: #333;
            font-size: 11px;
          }
          
          .header {
            text-align: center;
            margin-bottom: 20px;
            border-bottom: 2px solid #1976d2;
            padding-bottom: 15px;
          }
          
          .name {
            font-size: 24px;
            font-weight: bold;
            color: #1976d2;
            margin-bottom: 5px;
          }
          
          .title {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          
          .contact-info {
            font-size: 10px;
            color: #666;
          }
          
          .section {
            margin-bottom: 20px;
          }
          
          .section-title {
            font-size: 14px;
            font-weight: bold;
            color: #1976d2;
            border-bottom: 1px solid #1976d2;
            padding-bottom: 3px;
            margin-bottom: 10px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          
          .experience-item, .education-item {
            margin-bottom: 15px;
          }
          
          .job-title {
            font-weight: bold;
            font-size: 12px;
          }
          
          .company {
            font-weight: bold;
            color: #1976d2;
          }
          
          .duration {
            font-style: italic;
            color: #666;
            float: right;
          }
          
          .location {
            color: #666;
            font-size: 10px;
          }
          
          .details {
            margin-top: 5px;
          }
          
          .details li {
            margin-bottom: 3px;
            font-size: 10px;
          }
          
          .skills-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 5px;
          }
          
          .skill-item {
            padding: 3px 8px;
            background-color: #f5f5f5;
            border-radius: 3px;
            font-size: 9px;
            text-align: center;
          }
          
          .certifications-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          
          .cert-item {
            border-left: 3px solid #1976d2;
            padding-left: 8px;
          }
          
          .cert-title {
            font-weight: bold;
            font-size: 11px;
          }
          
          .cert-issuer {
            font-size: 10px;
            color: #666;
          }
          
          .summary-text {
            text-align: justify;
            font-size: 11px;
            line-height: 1.5;
            margin-bottom: 10px;
          }
          
          .clearfix::after {
            content: "";
            display: table;
            clear: both;
          }
          
          @media print {
            body { print-color-adjust: exact; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="name">GONZALO RONZON</div>
          <div class="title">Information Technology and Intelligent Systems Engineer</div>
          <div class="contact-info">
            📱 +52 2224390452 | 📧 gonzaloronzon@proton.me | 🔗 linkedin.com/in/gonzalo-ronzon | 🌐 gonzaloronzon.com | 📍 CDMX, Mexico
          </div>
        </div>

        <div class="section">
          <div class="section-title">Professional Summary</div>
          <div class="summary-text">
            Results-driven Information Technology and Intelligent Systems Engineer with 5+ years of experience specializing in full-stack development. 
            Proven track record of enhancing team performance through innovative solutions, reducing operational costs, and streamlining workflows. 
            Expert in React frontend development with Django backend integration, delivering intuitive user experiences that drive business outcomes. 
            Adept at Agile methodologies with a passion for continuous improvement and collaborative problem-solving.
          </div>
        </div>

        <div class="section">
          <div class="section-title">Professional Experience</div>
          
          <div class="experience-item">
            <div class="clearfix">
              <div class="job-title">Engineer</div>
              <div class="duration">01/2023 - Present</div>
            </div>
            <div class="company">NBCUniversal</div>
            <div class="location">CDMX, Mexico</div>
            <ul class="details">
              <li>Designed and implemented network updates while developing web apps for real-time SRT stream monitoring, significantly improving broadcast reliability</li>
              <li>Developed Copilot agents that automated workflows and generated summaries, enhancing operational efficiency across departments</li>
              <li>Created a centralized hub for controlling all IP devices for broadcast shows, streamlining technical operations during live productions</li>
              <li>Implemented automated reporting systems in Power BI with Jira and Power Apps integration for improved KPI tracking and data-driven decision making</li>
              <li>Provided expert technical support for specialized tools (Avid, VPOST, Latakoo), resolving critical operational issues during broadcasts</li>
              <li>Configured audiovisual workflows and monitoring systems that improved signal quality through proactive equipment inspection and maintenance</li>
              <li>Developed comprehensive user manuals that decreased training time for new staff while maintaining detailed equipment inventory</li>
            </ul>
          </div>

          <div class="experience-item">
            <div class="clearfix">
              <div class="job-title">Lead Software Engineer</div>
              <div class="duration">05/2021 - 12/2022</div>
            </div>
            <div class="company">Kaminoittech</div>
            <div class="location">CDMX, Mexico</div>
            <ul class="details">
              <li>Translated complex UI designs into seamless React applications that enhanced user engagement</li>
              <li>Implemented comprehensive test coverage for backend and frontend systems, substantially reducing production bugs</li>
              <li>Optimized Django endpoints that improved API response times and enhanced overall application performance</li>
              <li>Spearheaded the adoption of cutting-edge frameworks that accelerated development cycles and improved code maintainability</li>
            </ul>
          </div>

          <div class="experience-item">
            <div class="clearfix">
              <div class="job-title">Intern Engineer</div>
              <div class="duration">08/2019 - 04/2021</div>
            </div>
            <div class="company">NBCUniversal</div>
            <div class="location">CDMX, Mexico</div>
            <ul class="details">
              <li>Designed precise rack plans using Visio that improved equipment organization efficiency</li>
              <li>Developed a comprehensive Power BI dashboard that visualized team KPIs, identifying process inefficiencies</li>
              <li>Implemented preventative maintenance protocols for broadcast equipment, reducing system failures</li>
              <li>Created a data management application that streamlined information retrieval and improved data accuracy</li>
            </ul>
          </div>

          <div class="experience-item">
            <div class="clearfix">
              <div class="job-title">Intern</div>
              <div class="duration">01/2018 - 12/2023</div>
            </div>
            <div class="company">Talent Universidad Panamericana</div>
            <div class="location">CDMX, Mexico</div>
            <ul class="details">
              <li>Redesigned Angular webpage that improved page load speed and increased user engagement</li>
              <li>Created multimedia educational materials using Adobe Creative Suite that enhanced student comprehension</li>
              <li>Led a team of 5 interns on a digital transformation project that was adopted by 3 departments university-wide</li>
            </ul>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Education</div>
          
          <div class="education-item">
            <div class="clearfix">
              <div class="job-title">Specialization in Engineering and Project Management</div>
              <div class="duration">01/2023 - 12/2023</div>
            </div>
            <div class="company">Universidad Panamericana</div>
            <div class="location">CDMX, Mexico</div>
          </div>

          <div class="education-item">
            <div class="clearfix">
              <div class="job-title">Bachelor in Information Technologies and Intelligent Systems</div>
              <div class="duration">01/2017 - 12/2022</div>
            </div>
            <div class="company">Universidad Panamericana</div>
            <div class="location">CDMX, Mexico</div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Certifications</div>
          <div class="certifications-grid">
            <div class="cert-item">
              <div class="cert-title">Microsoft AZ-900</div>
              <div class="cert-issuer">Microsoft (2024)</div>
            </div>
            <div class="cert-item">
              <div class="cert-title">JavaScript: Test-Driven Development (ES6)</div>
              <div class="cert-issuer">Online Platform (2023)</div>
            </div>
            <div class="cert-item">
              <div class="cert-title">CCNA: Introduction to Networks</div>
              <div class="cert-issuer">Cisco (2021)</div>
            </div>
            <div class="cert-item">
              <div class="cert-title">Dante Certification Level 2</div>
              <div class="cert-issuer">Audinate (2020)</div>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Technical Skills</div>
          <div class="skills-grid">
            <div class="skill-item">React</div>
            <div class="skill-item">Angular</div>
            <div class="skill-item">JavaScript (ES6)</div>
            <div class="skill-item">TypeScript</div>
            <div class="skill-item">Django</div>
            <div class="skill-item">Node.js</div>
            <div class="skill-item">Python</div>
            <div class="skill-item">Java</div>
            <div class="skill-item">MongoDB</div>
            <div class="skill-item">PostgreSQL</div>
            <div class="skill-item">Azure</div>
            <div class="skill-item">Power Platform</div>
            <div class="skill-item">WebRTC</div>
            <div class="skill-item">WebSockets</div>
            <div class="skill-item">Scrum</div>
            <div class="skill-item">Agile</div>
            <div class="skill-item">Avid</div>
            <div class="skill-item">VPOST</div>
            <div class="skill-item">Latakoo</div>
            <div class="skill-item">SRT Streaming</div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Languages</div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
            <div><strong>Spanish:</strong> Native</div>
            <div><strong>English:</strong> Proficient</div>
            <div><strong>French:</strong> Beginner</div>
          </div>
        </div>
      </body>
      </html>
    `;
  };

  return (
    <Box
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
        bgcolor: "background.paper",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Card
          sx={{
            maxWidth: 600,
            mx: "auto",
            background: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
            color: "white",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <CardContent sx={{ p: 4, textAlign: "center" }}>
            <PdfIcon sx={{ fontSize: 48, mb: 2, opacity: 0.9 }} />
            
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: "bold" }}>
              Download Resume
            </Typography>
            
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
              Get a comprehensive PDF version of my resume with all professional experience,
              skills, and contact information ready for your review.
            </Typography>

            <Button
              variant="contained"
              size="large"
              startIcon={<DownloadIcon />}
              onClick={handleDownloadResume}
              sx={{
                bgcolor: "white",
                color: "primary.main",
                fontWeight: "bold",
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                borderRadius: 3,
                "&:hover": {
                  bgcolor: "grey.100",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                },
                transition: "all 0.3s ease-in-out",
              }}
            >
              Download PDF Resume
            </Button>

            <Box sx={{ mt: 3, pt: 3, borderTop: "1px solid rgba(255,255,255,0.2)" }}>
              <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
                Connect with me:
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                <Tooltip title="Email">
                  <IconButton
                    component="a"
                    href={`mailto:${personalInfo?.email}`}
                    sx={{ color: "white", "&:hover": { bgcolor: "rgba(255,255,255,0.1)" } }}
                  >
                    <EmailIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="LinkedIn">
                  <IconButton
                    component="a"
                    href={personalInfo?.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "white", "&:hover": { bgcolor: "rgba(255,255,255,0.1)" } }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="GitHub">
                  <IconButton
                    component="a"
                    href={personalInfo?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "white", "&:hover": { bgcolor: "rgba(255,255,255,0.1)" } }}
                  >
                    <GitHubIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default ResumeDownloadSection;
