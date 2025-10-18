import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuizContext } from '../context/QuizContext';
import { ACTIONS } from '../context/QuizReducer';
import { fetchQuizQuestions } from '../services/api';
import { calculateScore } from '../utils/helpers';

/**
 * Custom hook for quiz operations
 */
export const useQuiz = () => {
  const { state, dispatch } = useQuizContext();
  const navigate = useNavigate();
  
  // Start quiz - fetch questions
  const startQuiz = useCallback(async (email) => {
    try {
      dispatch({ type: ACTIONS.SET_LOADING, payload: true });
      dispatch({ type: ACTIONS.SET_USER_EMAIL, payload: email });
      
      const questions = await fetchQuizQuestions();
      
      // Mark first question as visited
      questions[0].isVisited = true;
      
      dispatch({ type: ACTIONS.SET_QUESTIONS, payload: questions });
      navigate('/quiz');
      
    } catch (error) {
      dispatch({ type: ACTIONS.SET_ERROR, payload: error.message });
    }
  }, [dispatch, navigate]);
  
  // Navigate to specific question
  const goToQuestion = useCallback((index) => {
    if (index >= 0 && index < state.questions.length) {
      dispatch({ type: ACTIONS.SET_CURRENT_QUESTION, payload: index });
    }
  }, [dispatch, state.questions.length]);
  
  // Navigate to next question
  const nextQuestion = useCallback(() => {
    if (state.currentQuestionIndex < state.questions.length - 1) {
      goToQuestion(state.currentQuestionIndex + 1);
    }
  }, [state.currentQuestionIndex, state.questions.length, goToQuestion]);
  
  // Navigate to previous question
  const previousQuestion = useCallback(() => {
    if (state.currentQuestionIndex > 0) {
      goToQuestion(state.currentQuestionIndex - 1);
    }
  }, [state.currentQuestionIndex, goToQuestion]);
  
  // Answer current question
  const answerQuestion = useCallback((answer) => {
    dispatch({ type: ACTIONS.ANSWER_QUESTION, payload: answer });
  }, [dispatch]);
  
  // Submit quiz - FIXED VERSION
  const submitQuiz = useCallback(() => {
    const score = calculateScore(state.questions);
    dispatch({ type: ACTIONS.SUBMIT_QUIZ, payload: score });
    // Use setTimeout to ensure state updates before navigation
    setTimeout(() => {
      navigate('/report');
    }, 100);
  }, [state.questions, dispatch, navigate]);
  
  // Reset quiz
  const resetQuiz = useCallback(() => {
    dispatch({ type: ACTIONS.RESET_QUIZ });
    navigate('/');
  }, [dispatch, navigate]);
  
  return {
    startQuiz,
    goToQuestion,
    nextQuestion,
    previousQuestion,
    answerQuestion,
    submitQuiz,
    resetQuiz,
    currentQuestion: state.questions[state.currentQuestionIndex],
    currentQuestionIndex: state.currentQuestionIndex,
    totalQuestions: state.questions.length,
    isFirstQuestion: state.currentQuestionIndex === 0,
    isLastQuestion: state.currentQuestionIndex === state.questions.length - 1
  };
};