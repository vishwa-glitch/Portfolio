import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import useDarkMode from './hooks/useDarkMode';
import './styles/global.css';

function App() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <Router>
      <div className="App">
        <Navigation theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
