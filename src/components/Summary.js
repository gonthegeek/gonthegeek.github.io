// src/components/SummarySection.jsx
import React from "react";
import { motion } from "framer-motion";

function SummarySection({ summary }) {
  return (
    <section id="summary" className="summary-section">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        Summary
      </motion.h2>

      {summary && summary.map((paragraph, idx) => (
        <motion.p
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 * idx }}
        >
          {paragraph}
        </motion.p>
      ))}
    </section>
  );
}

export default SummarySection;