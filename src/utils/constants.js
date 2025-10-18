export const QUIZ_CONFIG = {
  TOTAL_QUESTIONS: 15,
  TIMER_DURATION: 1800, // 30 minutes in seconds
  TIMER_WARNING_THRESHOLD: 300, // 5 minutes
  API_ENDPOINT: 'https://opentdb.com/api.php?amount=15'
};

export const QUESTION_STATUS = {
  NOT_VISITED: 'not-visited',
  VISITED: 'visited',
  ATTEMPTED: 'attempted',
  CURRENT: 'current'
};

export const QUIZ_STATES = {
  NOT_STARTED: 'not-started',
  IN_PROGRESS: 'in-progress',
  SUBMITTED: 'submitted'
};

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
