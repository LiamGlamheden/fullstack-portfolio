import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';

export default function App() {
  return (
    <Router>
      <div
        className="App"
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/resume' element={<ResumePage />} />

          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
