import { QUIZ_STATES } from '../utils/constants';

export const ACTIONS = {
  SET_USER_EMAIL: 'SET_USER_EMAIL',
  SET_QUESTIONS: 'SET_QUESTIONS',
  SET_CURRENT_QUESTION: 'SET_CURRENT_QUESTION',
  ANSWER_QUESTION: 'ANSWER_QUESTION',
  MARK_VISITED: 'MARK_VISITED',
  UPDATE_TIMER: 'UPDATE_TIMER',
  SUBMIT_QUIZ: 'SUBMIT_QUIZ',
  RESET_QUIZ: 'RESET_QUIZ',
  SET_ERROR: 'SET_ERROR',
  SET_LOADING: 'SET_LOADING'
};

export const initialState = {
  user: {
    email: '',
    startTime: null,
    endTime: null
  },
  questions: [],
  currentQuestionIndex: 0,
  timeRemaining: 1800, // 30 minutes
  quizState: QUIZ_STATES.NOT_STARTED,
  score: null,
  isLoading: false,
  error: null
};

export const quizReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_USER_EMAIL:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload,
          startTime: new Date()
        }
      };

    case ACTIONS.SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
        quizState: QUIZ_STATES.IN_PROGRESS,
        isLoading: false
      };

    case ACTIONS.SET_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestionIndex: action.payload,
        questions: state.questions.map((q, idx) => ({
          ...q,
          isVisited: idx === action.payload ? true : q.isVisited
        }))
      };

    case ACTIONS.ANSWER_QUESTION:
      return {
        ...state,
        questions: state.questions.map((q, idx) =>
          idx === state.currentQuestionIndex
            ? { ...q, userAnswer: action.payload, isAttempted: true }
            : q
        )
      };

    case ACTIONS.MARK_VISITED:
      return {
        ...state,
        questions: state.questions.map((q, idx) =>
          idx === action.payload ? { ...q, isVisited: true } : q
        )
      };

    case ACTIONS.UPDATE_TIMER:
      return {
        ...state,
        timeRemaining: action.payload
      };

    case ACTIONS.SUBMIT_QUIZ:
      return {
        ...state,
        quizState: QUIZ_STATES.SUBMITTED,
        user: {
          ...state.user,
          endTime: new Date()
        },
        score: action.payload
      };

    case ACTIONS.RESET_QUIZ:
      return {
        ...initialState
      };

    case ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    case ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };

    default:
      return state;
  }
};
