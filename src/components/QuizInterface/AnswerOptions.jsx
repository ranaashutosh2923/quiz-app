import React from 'react';
import './QuizInterface.css';

const AnswerOptions = ({ options, selectedAnswer, onSelectAnswer, questionType }) => {
  return (
    <div className={`answer-options ${questionType === 'boolean' ? 'boolean-options' : ''}`}>
      {options.map((option, index) => (
        <label
          key={index}
          className={`option-card ${selectedAnswer === option ? 'option-selected' : ''}`}
        >
          <input
            type="radio"
            name="answer"
            value={option}
            checked={selectedAnswer === option}
            onChange={() => onSelectAnswer(option)}
            className="option-radio"
          />
          <span className="option-label">
            {String.fromCharCode(65 + index)}
          </span>
          <span className="option-text">{option}</span>
          {selectedAnswer === option && <span className="option-checkmark">✓</span>}
        </label>
      ))}
    </div>
  );
};

export default AnswerOptions;
