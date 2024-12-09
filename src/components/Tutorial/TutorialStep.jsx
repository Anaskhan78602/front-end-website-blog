import React from 'react';
import './TutorialStep.css';

const TutorialStep = ({ step, onNext, onClose }) => {
  const steps = [
    {
      title: "Welcome to the Site!",
      description: "We are going to guide you through the main features of this website. Let's start with the navigation menu.",
      buttonText: "Next"
    },
    {
      title: "Navigation Menu",
      description: "Click here to explore the different sections of the website.",
      buttonText: "Next"
    },
    {
      title: "Hero Section",
      description: "This is the hero section. You can see important information and call-to-action buttons here.",
      buttonText: "Next"
    },
    {
      title: "Interactive Cards",
      description: "Hover over the cards to explore our services!",
      buttonText: "Got it!"
    }
  ];

  const { title, description, buttonText } = steps[step - 1];

  return (
    <div className="tutorial-step">
      <h3>{title}</h3>
      <p>{description}</p>
      <button 
        className={buttonText === "Got it!" ? "close-tutorial" : "next-step"} 
        onClick={buttonText === "Got it!" ? onClose : onNext}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default TutorialStep;
