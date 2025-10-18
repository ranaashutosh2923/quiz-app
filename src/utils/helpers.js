import { decode } from 'he';

/**
 * Decode HTML entities in text
 * @param {string} text - Text with HTML entities
 * @returns {string} Decoded text
 */
export const decodeHTML = (text) => {
  return decode(text);
};

/**
 * Shuffle array using Fisher-Yates algorithm
 * @param {Array} array - Array to shuffle
 * @returns {Array} Shuffled array
 */
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Format seconds to MM:SS
 * @param {number} seconds - Total seconds
 * @returns {string} Formatted time string
 */
export const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

/**
 * Process raw API question data
 * @param {Object} rawQuestion - Raw question from API
 * @param {number} id - Question ID
 * @returns {Object} Processed question object
 */
export const processQuestion = (rawQuestion, id) => {
  const allAnswers = [
    rawQuestion.correct_answer,
    ...rawQuestion.incorrect_answers
  ];
  
  return {
    id,
    type: rawQuestion.type,
    difficulty: rawQuestion.difficulty,
    category: decodeHTML(rawQuestion.category),
    questionText: decodeHTML(rawQuestion.question),
    options: shuffleArray(allAnswers.map(ans => decodeHTML(ans))),
    correctAnswer: decodeHTML(rawQuestion.correct_answer),
    userAnswer: null,
    isVisited: false,
    isAttempted: false
  };
};

/**
 * Calculate quiz score and statistics
 * @param {Array} questions - Array of question objects
 * @returns {Object} Score statistics
 */
export const calculateScore = (questions) => {
  const attempted = questions.filter(q => q.userAnswer !== null);
  const correct = questions.filter(
    q => q.userAnswer === q.correctAnswer
  );
  
  return {
    totalQuestions: questions.length,
    attemptedCount: attempted.length,
    correctCount: correct.length,
    percentage: ((correct.length / questions.length) * 100).toFixed(2)
  };
};

/**
 * Calculate time taken in MM:SS format
 * @param {number} totalSeconds - Total quiz duration
 * @param {number} remainingSeconds - Remaining seconds
 * @returns {string} Time taken
 */
export const calculateTimeTaken = (totalSeconds, remainingSeconds) => {
  const timeTaken = totalSeconds - remainingSeconds;
  return formatTime(timeTaken);
};
