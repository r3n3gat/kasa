// src/routes.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/home/home';
import AboutPage from './pages/about/about';
import AccomodationPage from './pages/accomodation/accomodation';
import ErrorPage from './pages/error/error';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/accomodation/:id" element={<AccomodationPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
