import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/Landing/LoginPage';
import MainPage from './Pages/Main/MainPage';
import CategoryPage from './Pages/Category/CategoryPage';
import DetailPage from './Pages/Detail/DetailPage';
import MyInfoPage from './Pages/MyInfo/MyInfoPage';
import SearchPage from './Pages/Search/SerchPage';
import SurveyPage from './Pages/Survey/SurveyPage';
import Footer from './Components/Footer';

const Root = () => {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<LoginPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/myinfo" element={<MyInfoPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/survey" element={<SurveyPage />} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default Root;