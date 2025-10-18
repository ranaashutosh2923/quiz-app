import React, { useState } from 'react';
import Button from '../Common/Button';
import './QuizInterface.css';

const NavigationButtons = ({ 
  onPrevious, 
  onNext, 
  onSubmit, 
  isFirstQuestion, 
  isLastQuestion 
}) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmitClick = () => {
    setShowConfirm(true);
  };

  const handleConfirmSubmit = () => {
    setShowConfirm(false);
    onSubmit();
  };

  const handleCancelSubmit = () => {
    setShowConfirm(false);
  };

  return (
    <>
      <div className="navigation-buttons">
        <div className="nav-left">
          <Button
            onClick={onPrevious}
            disabled={isFirstQuestion}
            variant="secondary"
          >
            Previous
          </Button>
        </div>
        
        <div className="nav-center">
          <Button
            onClick={handleSubmitClick}
            variant="danger"
          >
            Submit Quiz
          </Button>
        </div>
        
        <div className="nav-right">
          <Button
            onClick={onNext}
            disabled={isLastQuestion}
            variant="secondary"
          >
            Next
          </Button>
        </div>
      </div>

      {showConfirm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Submit Quiz?</h3>
            <p>Are you sure you want to submit? You cannot change your answers after submission.</p>
            <div className="modal-actions">
              <Button onClick={handleCancelSubmit} variant="secondary">
                Cancel
              </Button>
              <Button onClick={handleConfirmSubmit} variant="primary">
                Submit
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationButtons;
