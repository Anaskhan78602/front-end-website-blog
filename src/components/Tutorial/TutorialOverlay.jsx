import React, { useState } from 'react';
import TutorialStep from './TutorialStep';
import './TutorialOverlay.css';

const TutorialOverlay = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const totalSteps = 4; // Total number of steps in the tutorial

  // Move to the next step
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Close the tutorial
  const closeTutorial = () => {
    onClose();
  };

  return (
    <div className="tutorial-overlay">
      <TutorialStep 
        step={currentStep} 
        onNext={nextStep} 
        onClose={closeTutorial} 
      />
    </div>
  );
};

export default TutorialOverlay;
