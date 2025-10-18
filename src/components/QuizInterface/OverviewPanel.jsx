import React, { useState } from 'react';
import { useQuizContext } from '../../context/QuizContext';
import { useQuiz } from '../../hooks/useQuiz';
import './QuizInterface.css';

const OverviewPanel = () => {
  const { state } = useQuizContext();
  const { goToQuestion, currentQuestionIndex } = useQuiz();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const getQuestionStatus = (question, index) => {
    if (index === currentQuestionIndex) return 'current';
    if (question.isAttempted) return 'attempted';
    if (question.isVisited) return 'visited';
    return 'not-visited';
  };

  return (
    <div className={`overview-panel ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="overview-header">
        <h3>Questions Overview</h3>
        <button 
          className="toggle-btn" 
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>

      {!isCollapsed && (
        <>
          <div className="overview-legend">
            <div className="legend-item">
              <span className="legend-badge badge-attempted"></span>
              <span>Attempted</span>
            </div>
            <div className="legend-item">
              <span className="legend-badge badge-visited"></span>
              <span>Visited</span>
            </div>
            <div className="legend-item">
              <span className="legend-badge badge-not-visited"></span>
              <span>Not Visited</span>
            </div>
          </div>

          <div className="overview-grid">
            {state.questions.map((question, index) => {
              const status = getQuestionStatus(question, index);
              return (
                <button
                  key={question.id}
                  className={`overview-item status-${status}`}
                  onClick={() => goToQuestion(index)}
                  title={`Question ${index + 1} - ${status}`}
                >
                  {index + 1}
                  {question.isAttempted && <span className="checkmark">✓</span>}
                </button>
              );
            })}
          </div>

          <div className="overview-stats">
            <div className="stat">
              <span className="stat-value">
                {state.questions.filter(q => q.isAttempted).length}
              </span>
              <span className="stat-label">Attempted</span>
            </div>
            <div className="stat">
              <span className="stat-value">
                {state.questions.filter(q => !q.isAttempted).length}
              </span>
              <span className="stat-label">Remaining</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default OverviewPanel;
