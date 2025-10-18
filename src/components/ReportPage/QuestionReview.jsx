import React from 'react';
import './ReportPage.css';

const QuestionReview = ({ question, index }) => {
  const isCorrect = question.userAnswer === question.correctAnswer;
  const isAttempted = question.userAnswer !== null;

  return (
    <div className={`question-review ${isAttempted ? (isCorrect ? 'correct' : 'incorrect') : 'not-attempted'}`}>
      <div className="review-header">
        <span className="review-number">Question {index + 1}</span>
        <span className={`review-badge badge-${question.difficulty}`}>
          {question.difficulty}
        </span>
        <span className={`review-status ${isAttempted ? (isCorrect ? 'status-correct' : 'status-incorrect') : 'status-not-attempted'}`}>
          {isAttempted ? (isCorrect ? 'Correct' : 'Incorrect') : 'Not Attempted'}
        </span>
      </div>
      
      <div className="review-category">{question.category}</div>
      
      <div className="review-question">
        <p>{question.questionText}</p>
      </div>

      <div className="review-answers">
        <div className="answer-row">
          <span className="answer-label">Your Answer:</span>
          <span className={`answer-value ${isAttempted ? (isCorrect ? 'answer-correct' : 'answer-wrong') : 'answer-not-attempted'}`}>
            {isAttempted ? question.userAnswer : 'Not Attempted'}
          </span>
        </div>
        {!isCorrect && (
          <div className="answer-row">
            <span className="answer-label">Correct Answer:</span>
            <span className="answer-value answer-correct">
              {question.correctAnswer}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionReview;
