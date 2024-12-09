import React, { useState } from "react";
import { motion } from "framer-motion";
import "./WriteStory.css";

function WriteStory() {
  const [story, setStory] = useState("");

  const handleStoryChange = (e) => {
    setStory(e.target.value);
  };

  const handlePost = () => {
    alert("Your story/blog has been posted!");
    setStory(""); // Clear text after posting
  };

  return (
    <motion.div
      className="write-story-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="write-title"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Write Your Story
      </motion.h1>

      <motion.textarea
        className="story-input"
        placeholder="Start writing your story here..."
        value={story}
        onChange={handleStoryChange}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 150 }}
      />

      <motion.button
        className="post-button"
        onClick={handlePost}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Post Your Story
      </motion.button>

      <motion.div
        className="fun-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p>Share your ideas, express your creativity, and post your story to the world!</p>
      </motion.div>
    </motion.div>
  );
}

export default WriteStory;
