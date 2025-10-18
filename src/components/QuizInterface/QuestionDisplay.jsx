import React from 'react';
import './QuizInterface.css';

const QuestionDisplay = ({ question, questionNumber, totalQuestions }) => {
  return (
    <div className="question-display">
      <div className="question-header">
        <span className="question-number">Question {questionNumber} of {totalQuestions}</span>
        <span className={`question-difficulty badge badge-${question.difficulty}`}>
          {question.difficulty}
        </span>
      </div>
      
      <div className="question-category">{question.category}</div>
      
      <h2 className="question-text">{question.questionText}</h2>
    </div>
  );
};

export default QuestionDisplay;
