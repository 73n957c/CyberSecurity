import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import EducationPage from "./pages/EducationPage";
import CommunityPage from "./pages/CommunityPage";
import TopicPage from "./pages/TopicPage";
import NewsInfoPage from "./pages/NewsInfoPage";
import AboutusPage from "./pages/AboutusPage";
import NavBottom from './components/NavBottom';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/community/topic1" element={<TopicPage />} />
        <Route path="/newsinfo" element={<NewsInfoPage />} />
        <Route path="/aboutus" element={<AboutusPage />} />
      </Routes>
      <NavBottom />
    </Router>
  )
}

export default App