import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import Navbar from "./components/Navbar";
import LoginPage from "./Pages/LoginSignup";
import AboutPage from "./Pages/About";
import Contact from "./Pages/Contact";
import Features from "./Pages/Features";
 // Import the Community page
import WriteStory from "./Pages/WriteStory"; // Import WriteStory page
import "./App.css"; // Importing the CSS

function App() {
  /*const [isTutorialOpen, setIsTutorialOpen] = useState(false);

  // Check if the user has already seen the tutorial using localStorage
  useEffect(() => {
    const hasSeenTutorial = localStorage.getItem("hasSeenTutorial");
    if (!hasSeenTutorial) {
      setIsTutorialOpen(true); // Show tutorial if not seen before
      localStorage.setItem("hasSeenTutorial", "true"); // Mark tutorial as seen
    }
  }, []);

  // Function to close the tutorial
  const closeTutorial = () => {
    setIsTutorialOpen(false);
  };*/
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <motion.main
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="main-content"
                >
                  <h2>
                    <ReactTyped
                      strings={["Welcome to the Ultimate Blog Writing Platform!"]}
                      typeSpeed={50}
                      backSpeed={50}
                      backDelay={1000}
                      loop
                    />
                  </h2>

                  <motion.p
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    Start writing, sharing, and growing your audience today.
                  </motion.p>
                  <motion.button
                    initial={{ y: 50 }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 120 }}
                  >
                    <Link to="/login">Get Started</Link>
                  </motion.button>
                </motion.main>

                {/* Animated Card Section */}
                <section className="card-section">
                  <h3>Why Choose Us?</h3>
                  <div className="cards-container">
                    {/* Existing Cards */}
                    <motion.div
                      className="card"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <Link to="/login">
                        <h4>Write Blogs</h4>
                        <p>Express your thoughts with our intuitive editor.</p>
                      </Link>
                    </motion.div>

                    <motion.div
                      className="card"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      <Link to="/login">
                        <h4>Share Content</h4>
                        <p>Reach a wider audience with just one click.</p>
                      </Link>
                    </motion.div>

                    <motion.div
                      className="card"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                    >
                      <Link to="/login">
                        <h4>Grow Audience</h4>
                        <p>Track your growth with our analytics tools.</p>
                      </Link>
                    </motion.div>

                    {/* New Cards */}
                    <motion.div
                      className="card"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.1 }}
                    >
                      <Link to="/write-story">
                        <h4>Write Story</h4>
                        <p>Craft captivating stories using our special editor.</p>
                      </Link>
                    </motion.div>

                    <motion.div
                      className="card"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.3 }}
                    >
                      <Link to="/login">
                        <h4>Read Story</h4>
                        <p>Discover stories from around the world and get inspired.</p>
                      </Link>
                    </motion.div>
                  </div>
                </section>
              </>
            }
          />

          {/* Other Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<Features />} />
          <Route path="/write-story" element={<WriteStory />} /> {/* Added WriteStory Route */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="footer"
        >
          <p>&copy; 2024 Blog Writing Platform</p>
        </motion.footer>
      </div>
    </Router>
  );
}

export default App;
