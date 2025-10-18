# 🎯 Quiz Application

A fully-featured, interactive quiz application built with React that delivers a comprehensive timed assessment experience. Fetches questions from the OpenTDB (Open Trivia Database) API and provides detailed performance analytics with modern UI/UX.

![Quiz Application](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5+-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 🚀 Live Demo

**Deployed Application**: [Live Demo Link](https://your-app-url.netlify.app) _(Update after deployment)_

---

## 📋 Table of Contents

- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Integration](#-api-integration)
- [Bonus Features](#-bonus-features)
- [Design Decisions](#-design-decisions)
- [Challenges & Solutions](#-challenges--solutions)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## ✨ Features

### Core Functionality
- ✅ **Email Validation**: Secure entry point with regex-based validation
- ✅ **Dynamic Question Loading**: Fetches 15 questions from OpenTDB API
- ✅ **30-Minute Timer**: Real-time countdown with visual warnings at 5 minutes
- ✅ **Auto-Submit**: Automatic quiz submission when timer expires
- ✅ **Flexible Navigation**: Previous/Next buttons for sequential navigation
- ✅ **Overview Panel**: Interactive grid showing all questions with status indicators
- ✅ **Progress Tracking**: Visual indicators for visited, attempted, and current questions
- ✅ **Answer Management**: Select and modify answers before final submission
- ✅ **Comprehensive Reporting**: Detailed score breakdown and question-by-question review
- ✅ **Retry Functionality**: Retake quiz option to start fresh

### User Experience
- 🎨 **Responsive Design**: Seamlessly adapts to mobile, tablet, and desktop
- ⚡ **Fast Loading**: Optimized with Vite for lightning-fast performance
- 🛡️ **Error Handling**: Graceful error messages with retry mechanisms
- ⏳ **Loading States**: User-friendly loading indicators throughout
- 🔄 **State Management**: Robust state handling with Context API and useReducer
- 📱 **Mobile-First**: Touch-optimized interface for mobile devices

---

## 🌟 Bonus Features

### 1. Dark Mode Toggle 🌙☀️
- **Theme Switcher**: Available on all pages (Start, Quiz, Report)
- **Smooth Transitions**: Elegant color transitions between themes
- **Persistent Preference**: Theme selection saved in localStorage
- **Accessibility**: WCAG 2.1 AA compliant color contrasts in both modes
- **Implementation**: React Context API with CSS variables for dynamic theming

### 2. PDF Export 📄
- **One-Click Export**: Download complete quiz results as PDF
- **Professional Formatting**: High-quality rendering with proper styling
- **Comprehensive Content**: Includes score summary and detailed question review
- **Unique Filenames**: Timestamped files for easy organization
- **Implementation**: html2canvas for DOM capture + jsPDF for generation
- **Multi-Page Support**: Automatically handles long reports across pages

---

## 🛠️ Technology Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3+ | UI component library |
| **Vite** | 5.0+ | Build tool and dev server |
| **React Router DOM** | 6.x | Client-side routing |

### State Management
| Technology | Purpose |
|------------|---------|
| **React Context API** | Global state management |
| **useReducer Hook** | Complex state logic |
| **Custom Hooks** | Reusable stateful logic |

### Styling & UI
| Technology | Purpose |
|------------|---------|
| **CSS3** | Component styling |
| **CSS Variables** | Dynamic theming |
| **Flexbox & Grid** | Responsive layouts |

### Libraries
| Library | Version | Purpose |
|---------|---------|---------|
| **he** | 1.2+ | HTML entity decoding |
| **html2canvas** | 1.4+ | DOM to canvas rendering |
| **jsPDF** | 2.5+ | PDF generation |

### API
| Service | Purpose |
|---------|---------|
| **OpenTDB API** | Trivia question provider |

---

## 📁 Project Structure
```
quiz-app/
├── public/
│   └── vite.svg                 # Application favicon
├── src/
│   ├── assets/                  # Static assets (if any)
│   ├── components/
│   │   ├── Common/
│   │   │   ├── Button.jsx       # Reusable button component
│   │   │   ├── Loading.jsx      # Loading spinner component
│   │   │   ├── ErrorMessage.jsx # Error display component
│   │   │   ├── ThemeToggle.jsx  # Dark mode toggle
│   │   │   ├── Common.css       # Shared component styles
│   │   │   └── ThemeToggle.css
│   │   ├── StartPage/
│   │   │   ├── StartPage.jsx    # Email entry and quiz start
│   │   │   └── StartPage.css
│   │   ├── QuizInterface/
│   │   │   ├── QuizInterface.jsx      # Main quiz container
│   │   │   ├── Timer.jsx              # Countdown timer
│   │   │   ├── QuestionDisplay.jsx    # Question text display
│   │   │   ├── AnswerOptions.jsx      # Answer selection UI
│   │   │   ├── NavigationButtons.jsx  # Prev/Next/Submit buttons
│   │   │   ├── OverviewPanel.jsx      # Question grid overview
│   │   │   └── QuizInterface.css
│   │   └── ReportPage/
│   │       ├── ReportPage.jsx         # Results page container
│   │       ├── SummaryCard.jsx        # Score summary display
│   │       ├── QuestionReview.jsx     # Individual question review
│   │       ├── ExportPDFButton.jsx    # PDF download button
│   │       ├── ReportPage.css
│   │       └── ExportPDFButton.css
│   ├── context/
│   │   ├── QuizContext.jsx      # Quiz state context provider
│   │   ├── QuizReducer.js       # State reducer logic
│   │   └── ThemeContext.jsx     # Theme state management
│   ├── hooks/
│   │   ├── useTimer.js          # Timer management hook
│   │   └── useQuiz.js           # Quiz operations hook
│   ├── services/
│   │   └── api.js               # OpenTDB API integration
│   ├── utils/
│   │   ├── constants.js         # Application constants
│   │   ├── helpers.js           # Utility functions
│   │   ├── validators.js        # Input validation
│   │   └── pdfExport.js         # PDF generation logic
│   ├── App.jsx                  # Root component with routing
│   ├── App.css                  # Global app styles
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Global CSS and variables
├── .env                         # Environment variables (not committed)
├── .gitignore                   # Git ignore rules
├── eslint.config.js             # ESLint configuration
├── index.html                   # HTML entry point
├── package.json                 # Dependencies and scripts
├── package-lock.json            # Dependency lock file
├── README.md                    # This file
└── vite.config.js               # Vite configuration
```

---

## 💻 Installation

### Prerequisites
- **Node.js**: v16.0.0 or higher
- **npm**: v7.0.0 or higher
- **Git**: For version control

### Step 1: Clone Repository
```bash
git clone https://github.com/yourusername/quiz-app.git
cd quiz-app
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Environment Setup (Optional)
Create `.env` file in root directory if needed:
```env
VITE_API_URL=https://opentdb.com/api.php
```

### Step 4: Start Development Server
```bash
npm run dev
```

Application will be available at `http://localhost:5173`

### Step 5: Build for Production
```bash
npm run build
```

### Step 6: Preview Production Build
```bash
npm run preview
```

---

## 🎮 Usage

### Starting a Quiz
1. Navigate to the application homepage
2. Enter a valid email address in the input field
3. Click **"Start Quiz"** button
4. Questions will be fetched from the OpenTDB API

### Taking the Quiz
1. **Read the question** displayed on screen
2. **Select an answer** by clicking on an option
3. Use **Previous/Next** buttons to navigate between questions
4. View **Overview Panel** to see question status:
   - 🟢 Green = Attempted
   - 🟡 Yellow = Visited but not attempted
   - ⚪ Gray = Not visited
   - 🔵 Blue border = Current question
5. Monitor the **timer** at the top of the page
6. Click **Submit Quiz** when ready (or wait for auto-submit)

### Viewing Results
1. After submission, view comprehensive **Score Summary**:
   - Overall percentage score
   - Total questions attempted
   - Correct vs incorrect breakdown
   - Time taken
2. Scroll down for **Question-by-Question Review**:
   - Your answer vs correct answer
   - Color-coded results (green/red/gray)
   - Question difficulty and category
3. **Download PDF Report** for offline reference
4. Click **Retake Quiz** to start over

### Using Dark Mode
1. Click the **🌙 moon icon** to enable dark mode
2. Click the **☀️ sun icon** to return to light mode
3. Preference is automatically saved

---

## 🔌 API Integration

### OpenTDB API

**Endpoint**: `https://opentdb.com/api.php?amount=15`

**Request Method**: GET

**Parameters**:
- `amount`: Number of questions (fixed at 15)

**Response Structure**:
```json
{
  "response_code": 0,
  "results": [
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "Science & Nature",
      "question": "What is the largest planet?",
      "correct_answer": "Jupiter",
      "incorrect_answers": ["Mars", "Saturn", "Neptune"]
    }
  ]
}
```

**Data Processing**:
1. **HTML Entity Decoding**: Questions contain entities like `&quot;`, `&#039;` - decoded using `he` library
2. **Answer Shuffling**: Fisher-Yates algorithm randomizes answer positions
3. **Error Handling**: Network failures handled with retry mechanisms
4. **Validation**: Ensures exactly 15 questions received

---

## 🎨 Design Decisions

### Architecture
- **Component-Based**: Modular, reusable React components
- **Context API**: Chosen over Redux for simplicity and no external dependencies
- **Custom Hooks**: Extracted reusable logic (useTimer, useQuiz)
- **CSS Modules**: Component-scoped styling prevents conflicts

### State Management Philosophy
```
Single Source of Truth → Context API
Complex State Logic → useReducer
Side Effects → useEffect
Derived State → useMemo/Computed values
```

### Styling Approach
- **CSS Variables**: Dynamic theming without CSS-in-JS overhead
- **Mobile-First**: Base styles for mobile, enhanced for larger screens
- **BEM-like Naming**: Consistent, predictable class names
- **Accessibility**: WCAG 2.1 AA compliant color contrasts

### Performance Optimizations
- **Lazy Loading**: Route-based code splitting (if needed)
- **Memoization**: Expensive calculations cached
- **Efficient Re-renders**: Proper dependency arrays in hooks
- **Optimized Builds**: Vite's tree-shaking and minification

---

## 🧩 Challenges & Solutions

### Challenge 1: HTML Entity Decoding
**Problem**: API returns questions with HTML entities (`&quot;`, `&#039;`, `&amp;`)  
**Impact**: Questions displayed incorrectly  
**Solution**: Integrated `he` library for proper entity decoding  
**Result**: All special characters render correctly

### Challenge 2: Answer Randomization
**Problem**: Correct answer always in first position from API  
**Impact**: Predictable answer patterns  
**Solution**: Implemented Fisher-Yates shuffle algorithm  
**Result**: Truly randomized answer positions

### Challenge 3: Timer Accuracy
**Problem**: Timer drift over 30 minutes with simple setInterval  
**Impact**: Inaccurate auto-submit timing  
**Solution**: State-based countdown with cleanup in useEffect  
**Result**: Consistent, reliable timer performance

### Challenge 4: PDF Export Compatibility
**Problem**: Initial `jspdf-autotable` had compatibility issues with Node.js v24  
**Impact**: PDF generation failed  
**Solution**: Switched to `html2canvas` + `jsPDF` approach  
**Result**: Reliable PDF generation across all environments

### Challenge 5: Page Refresh Data Loss
**Problem**: Users losing progress on accidental refresh  
**Impact**: Frustrating user experience  
**Solution**: Implemented `beforeunload` event warning  
**Result**: Users warned before losing progress

### Challenge 6: Dark Mode Implementation
**Problem**: Need theme persistence and smooth transitions  
**Impact**: Poor UX without proper theming  
**Solution**: Context API + localStorage + CSS variables  
**Result**: Seamless theme switching with persistence

---

## 🔮 Future Enhancements

### Feature Roadmap
- [ ] **Backend Integration**: Save quiz results to database
- [ ] **User Authentication**: Login/signup with JWT tokens
- [ ] **Question Categories**: Filter questions by category/difficulty
- [ ] **Leaderboard**: Global/friend rankings
- [ ] **Progress Persistence**: Save quiz state to localStorage
- [ ] **Social Sharing**: Share scores on social media
- [ ] **Detailed Analytics**: Time per question, accuracy trends
- [ ] **Keyboard Shortcuts**: Arrow keys navigation, number keys for answers
- [ ] **Accessibility Enhancements**: Full screen reader support
- [ ] **Multi-Language Support**: i18n implementation
- [ ] **Question Bookmarking**: Flag questions for review
- [ ] **Offline Mode**: Service worker for offline functionality
- [ ] **Gamification**: Badges, achievements, streaks

### Technical Improvements
- [ ] **Unit Tests**: Jest + React Testing Library
- [ ] **E2E Tests**: Cypress/Playwright
- [ ] **TypeScript Migration**: Full type safety
- [ ] **Performance Monitoring**: Web Vitals tracking
- [ ] **CI/CD Pipeline**: Automated testing and deployment
- [ ] **Docker Support**: Containerized deployment

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/AmazingFeature`
3. **Commit changes**: `git commit -m 'Add some AmazingFeature'`
4. **Push to branch**: `git push origin feature/AmazingFeature`
5. **Open Pull Request**

### Coding Standards
- Follow existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Ensure all tests pass
- Update documentation as needed

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Your Name**

- GitHub: [ranaashutosh2923](https://github.com/ranaashutosh2923)
- LinkedIn: [Ashutosh Rana](https://www.linkedin.com/in/ashutosh-rana-067268228/)
- Email: ashutoshrana3036@gmail.com

---

## 🙏 Acknowledgments

- **OpenTDB**: Questions provided by [Open Trivia Database](https://opentdb.com/)
- **CausalFunnel**: Assignment specification and opportunity
- **React Community**: Excellent documentation and ecosystem
- **Vite Team**: Lightning-fast build tool
- **Open Source Contributors**: All the amazing library maintainers

---

## 📊 Project Stats

- **Lines of Code**: ~2,500+
- **Components**: 15+
- **Custom Hooks**: 2
- **Context Providers**: 2
- **Utility Functions**: 10+
- **Development Time**: ~5 days
- **Test Coverage**: Manual testing complete

---

## 🔗 Useful Links

- [OpenTDB API Documentation](https://opentdb.com/api_config.php)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)


<div align="center">

**⭐ Star this repo if you found it helpful!**

Made with ❤️ and ☕ by [Ashutosh Rana]

</div>