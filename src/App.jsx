import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QuizProvider } from './context/QuizContext';
import { ThemeProvider } from './context/ThemeContext';
import StartPage from './components/StartPage/StartPage';
import QuizInterface from './components/QuizInterface/QuizInterface';
import ReportPage from './components/ReportPage/ReportPage';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <QuizProvider>
        <Router>
          <div className="app">
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route path="/quiz" element={<QuizInterface />} />
              <Route path="/report" element={<ReportPage />} />
            </Routes>
          </div>
        </Router>
      </QuizProvider>
    </ThemeProvider>
  );
}

export default App;