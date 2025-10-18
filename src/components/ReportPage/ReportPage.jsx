import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuizContext } from '../../context/QuizContext';
import { useQuiz } from '../../hooks/useQuiz';
import SummaryCard from './SummaryCard';
import QuestionReview from './QuestionReview';
import Button from '../Common/Button';
import ThemeToggle from '../Common/ThemeToggle';
import ExportPDFButton from './ExportPDFButton';
import './ReportPage.css';

const ReportPage = () => {
  const { state } = useQuizContext();
  const { resetQuiz } = useQuiz();
  const navigate = useNavigate();

  useEffect(() => {
    if (state.quizState !== 'submitted') {
      navigate('/');
    }
  }, [state.quizState, navigate]);

  if (!state.score) {
    return <div>Loading results...</div>;
  }

  return (
    <div className="report-page">
      <div className="theme-toggle-wrapper">
        <ThemeToggle />
      </div>
      <div className="report-container">
        <SummaryCard 
          user={state.user} 
          score={state.score} 
          timeRemaining={state.timeRemaining}
        />

        <div className="review-section">
          <h2 className="review-title">Question-by-Question Review</h2>
          <div className="questions-list">
            {state.questions.map((question, index) => (
              <QuestionReview 
                key={question.id} 
                question={question} 
                index={index} 
              />
            ))}
          </div>
        </div>
        <div className="report-actions">
          <div className="action-buttons">
            <ExportPDFButton userEmail={state.user.email} />
            <Button onClick={resetQuiz} variant="primary">
              Retake Quiz
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
