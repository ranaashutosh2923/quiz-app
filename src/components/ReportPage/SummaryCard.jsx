import React from 'react';
import { formatTime, calculateTimeTaken } from '../../utils/helpers';
import { QUIZ_CONFIG } from '../../utils/constants';
import './ReportPage.css';

const SummaryCard = ({ user, score, timeRemaining }) => {
  const timeTaken = calculateTimeTaken(QUIZ_CONFIG.TIMER_DURATION, timeRemaining);

  return (
    <div className="summary-card">
      <h2 className="summary-title">Quiz Completed! 🎉</h2>
      
      <div className="user-info">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Time Taken:</strong> {timeTaken}</p>
      </div>

      <div className="score-container">
        <div className="score-circle">
          <div className="score-percentage">{score.percentage}%</div>
          <div className="score-text">Score</div>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">{score.totalQuestions}</div>
          <div className="stat-label">Total Questions</div>
        </div>
        <div className="stat-card stat-attempted">
          <div className="stat-value">{score.attemptedCount}</div>
          <div className="stat-label">Attempted</div>
        </div>
        <div className="stat-card stat-correct">
          <div className="stat-value">{score.correctCount}</div>
          <div className="stat-label">Correct</div>
        </div>
        <div className="stat-card stat-incorrect">
          <div className="stat-value">{score.attemptedCount - score.correctCount}</div>
          <div className="stat-label">Incorrect</div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
