// src/components/HeroSection.jsx
import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { motion } from "framer-motion";
import heroVideo from "../assets/heroVideo.mp4";

function HeroSection({ personalInfo }) {
  const { name, title } = personalInfo || {};

  return (
    <section id="hero" className="hero-section">
      <ParallaxBanner
        layers={[
          {
            children: (
              <video className="hero-video" autoPlay muted loop>
                <source src={heroVideo} type="video/mp4" />
              </video>
            ),
            speed: -20,
          },
        ]}
        className="hero-banner"
      >
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {name || "My Name Here"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {title || "My Title"}
          </motion.p>
        </div>
      </ParallaxBanner>
    </section>
  );
}

export default HeroSection;