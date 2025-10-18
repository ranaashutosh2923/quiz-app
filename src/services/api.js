import { QUIZ_CONFIG } from '../utils/constants';
import { processQuestion } from '../utils/helpers';

/**
 * Fetch quiz questions from OpenTDB API
 * @returns {Promise<Array>} Array of processed questions
 * @throws {Error} If API request fails
 */
export const fetchQuizQuestions = async () => {
  try {
    const response = await fetch(QUIZ_CONFIG.API_ENDPOINT);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Check response code
    if (data.response_code !== 0) {
      throw new Error('API returned an error code');
    }
    
    // Validate question count
    if (data.results.length !== QUIZ_CONFIG.TOTAL_QUESTIONS) {
      throw new Error(`Expected ${QUIZ_CONFIG.TOTAL_QUESTIONS} questions, got ${data.results.length}`);
    }
    
    // Process and return questions
    return data.results.map((q, index) => processQuestion(q, index + 1));
  } catch (error) {
    console.error('Error fetching quiz questions:', error);
    throw new Error('Unable to load questions. Please check your internet connection and try again.');
  }
};
