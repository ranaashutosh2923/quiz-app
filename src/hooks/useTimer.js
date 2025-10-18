import { useEffect, useRef } from 'react';
import { useQuizContext } from '../context/QuizContext';
import { ACTIONS } from '../context/QuizReducer';
import { QUIZ_CONFIG } from '../utils/constants';

/**
 * Custom hook for managing quiz timer
 * @param {Function} onTimeUp - Callback when timer reaches 0
 */
export const useTimer = (onTimeUp) => {
  const { state, dispatch } = useQuizContext();
  const intervalRef = useRef(null);

  useEffect(() => {
    // Start timer only if quiz is in progress
    if (state.quizState === 'in-progress' && state.timeRemaining > 0) {
      intervalRef.current = setInterval(() => {
        dispatch({
          type: ACTIONS.UPDATE_TIMER,
          payload: state.timeRemaining - 1
        });
      }, 1000);

      // Auto-submit when time reaches 0
      if (state.timeRemaining === 0 && state.quizState === 'in-progress') {
        onTimeUp();
      }
    }

    // Cleanup
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [state.timeRemaining, state.quizState, dispatch, onTimeUp]);

  return {
    timeRemaining: state.timeRemaining,
    isWarning: state.timeRemaining <= QUIZ_CONFIG.TIMER_WARNING_THRESHOLD
  };
};
