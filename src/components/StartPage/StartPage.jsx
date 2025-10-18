import React, { useState } from 'react';
import { validateEmail } from '../../utils/validators';
import { useQuiz } from '../../hooks/useQuiz';
import { useQuizContext } from '../../context/QuizContext';
import Button from '../Common/Button';
import Loading from '../Common/Loading';
import ErrorMessage from '../Common/ErrorMessage';
import ThemeToggle from '../Common/ThemeToggle';
import { QUIZ_CONFIG } from '../../utils/constants';
import './StartPage.css';

const StartPage = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const { startQuiz } = useQuiz();
  const { state } = useQuizContext();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) {
      setEmailError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validation = validateEmail(email);
    if (!validation.isValid) {
      setEmailError(validation.error);
      return;
    }

    await startQuiz(email.trim());
  };

  if (state.isLoading) {
    return <Loading message="Loading quiz questions..." />;
  }

  if (state.error) {
    return <ErrorMessage message={state.error} onRetry={() => window.location.reload()} />;
  }

  return (
    <div className="start-page">
      <div className="theme-toggle-wrapper">
       <ThemeToggle />
      </div>
      <div className="start-container">
        <h1 className="start-title">Welcome to the Quiz</h1>
        
        <div className="quiz-info">
          <p>{QUIZ_CONFIG.TOTAL_QUESTIONS} Questions</p>
          <p>{QUIZ_CONFIG.TIMER_DURATION / 60} Minutes</p>
          <p>Multiple Choice & True/False</p>
        </div>

        <form onSubmit={handleSubmit} className="email-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className={`form-input ${emailError ? 'input-error' : ''}`}
            />
            {emailError && <span className="error-text">{emailError}</span>}
          </div>
          
          <Button
            type="submit"
            variant="primary"
            disabled={!email.trim()}
          >
            Start Quiz
          </Button>
        </form>

        <div className="instructions">
          <h3>Instructions</h3>
          <ul>
            <li>Answer all questions within the time limit</li>
            <li>You can navigate between questions</li>
            <li>Quiz will auto-submit when time runs out</li>
            <li>Review your answers before submitting</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
