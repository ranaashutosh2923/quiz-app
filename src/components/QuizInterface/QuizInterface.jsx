import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuizContext } from '../../context/QuizContext';
import { useQuiz } from '../../hooks/useQuiz';
import Timer from './Timer';
import QuestionDisplay from './QuestionDisplay';
import AnswerOptions from './AnswerOptions';
import NavigationButtons from './NavigationButtons';
import OverviewPanel from './OverviewPanel';
import ThemeToggle from '../Common/ThemeToggle';
import './QuizInterface.css';

const QuizInterface = () => {
  const { state } = useQuizContext();
  const navigate = useNavigate();
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    nextQuestion,
    previousQuestion,
    answerQuestion,
    submitQuiz,
    isFirstQuestion,
    isLastQuestion
  } = useQuiz();

  // Redirect if quiz not started
  useEffect(() => {
    if (state.quizState !== 'in-progress') {
      navigate('/');
    }
  }, [state.quizState, navigate]);

  // Warn before leaving page
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  return (
    <div className="quiz-interface">
      <header className="quiz-header">
        <div className="header-left">
          <h1 className="quiz-title">Quiz Application</h1>
        </div>
        <div className="header-right">
          <Timer />
          <ThemeToggle />
        </div>
      </header>

      <div className="quiz-body">
        <aside className="quiz-sidebar">
          <OverviewPanel />
        </aside>

        <main className="quiz-content">
          <QuestionDisplay
            question={currentQuestion}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={totalQuestions}
          />

          <AnswerOptions
            options={currentQuestion.options}
            selectedAnswer={currentQuestion.userAnswer}
            onSelectAnswer={answerQuestion}
            questionType={currentQuestion.type}
          />

          <NavigationButtons
            onPrevious={previousQuestion}
            onNext={nextQuestion}
            onSubmit={submitQuiz}
            isFirstQuestion={isFirstQuestion}
            isLastQuestion={isLastQuestion}
          />
        </main>
      </div>

      <div className="progress-bar-container">
        <div 
          className="progress-bar" 
          style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default QuizInterface;
