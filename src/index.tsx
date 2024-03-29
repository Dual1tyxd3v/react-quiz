import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import './index.css';
import QuizProvider from './contexts/quiz-context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>
);
