import "./features.css";
import React from "react";

import { motion } from "framer-motion";
import { FaPen, FaShare, FaChartLine, FaLock, FaRocket, FaHandsHelping } from "react-icons/fa"; // New icons added

function Features() {
  const features = [
    {
      title: "Easy Blog Writing",
      description: "Write and publish blogs effortlessly with our tools.",
      icon: <FaPen />,
    },
    {
      title: "Community Sharing", // Fixed: Removed extra double quotes
      description: "Share your blogs with a vibrant community of readers.",
      icon: <FaShare />,
    },
    {
      title: "Responsive Design",
      description: "Access and write blogs seamlessly on any device.",
      icon: <FaChartLine />,
    },
    {
      title: "Secure Platform",
      description: "Your data and blogs are protected with top-notch security.",
      icon: <FaLock />,
    },
    {
      title: "Fast Performance",
      description: "Experience blazing-fast load times and optimized tools.",
      icon: <FaRocket />,
    },
    {
      title: "24/7 Support",
      description: "Get help anytime with our dedicated support team.",
      icon: <FaHandsHelping />,
    },
  ];

  return (
    <section id="features" className="features-section">
      <div className="features-header">
        <h1>Our Features</h1>
        <p>Discover the key features that make our platform unique and powerful.</p>
      </div>

      <div className="features-container">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <button className="action-button">Learn More</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Features;
