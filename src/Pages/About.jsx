import { motion } from "framer-motion"; // For animations
import "./About.css"; 
import aboutImage from "../assets/images/about.jpg";  // Correct relative path for the about image
import additionalImage from "../assets/images/additional-image.jpg"; // Additional image after feedback form

function About() {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="about-content"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
      >
        {/* Left side text content */}
        <motion.div
          className="about-text"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          <h2>About Us</h2>
          <p>
            Welcome to our blog writing platform, where creativity meets
            simplicity. Our goal is to help you express yourself, share your
            ideas, and connect with an audience that resonates with your voice.
          </p>
          <p>
            Whether you are a seasoned blogger or just getting started, our
            platform provides all the tools you need to succeed.
          </p>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="btn-primary">Start Reading</button>
            <button className="btn-secondary">Start Writing</button>
            <button className="btn-secondary">Explore More</button>
          </div>
        </motion.div>

        {/* Right side image */}
        <motion.div
          className="about-image"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
        >
          <img src={aboutImage} alt="About Us" />
        </motion.div>
      </motion.div>

      {/* Feedback Form Section */}
      <motion.div
        className="feedback-form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3>We'd Love Your Feedback!</h3>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="form-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="form-input"
          />
          <textarea
            name="feedback"
            placeholder="Your Feedback"
            className="form-textarea"
          ></textarea>
          <button type="submit" className="btn-primary">
            Submit Feedback
          </button>
        </form>
      </motion.div>

      {/* Additional Image After Feedback Form */}
      <motion.div className="additional-image">
        <img src={additionalImage} alt="Additional Information" />
      </motion.div>
    </motion.div>
  );
}

export default About;
