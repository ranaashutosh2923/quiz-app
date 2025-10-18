import React from 'react';
import { useTimer } from '../../hooks/useTimer';
import { useQuiz } from '../../hooks/useQuiz';
import { formatTime } from '../../utils/helpers';
import './QuizInterface.css';

const Timer = () => {
  const { submitQuiz } = useQuiz();
  const { timeRemaining, isWarning } = useTimer(submitQuiz);

  return (
    <div className={`timer ${isWarning ? 'timer-warning' : ''}`}>
      <span className="timer-icon">⏰</span>
      <span className="timer-text">{formatTime(timeRemaining)}</span>
      {isWarning && <span className="timer-alert">Time running out!</span>}
    </div>
  );
};

export default Timer;
