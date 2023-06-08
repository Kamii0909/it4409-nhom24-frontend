import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import DetailHotelPage from './pages/DetailHotelPage/DetailHotelPage';
import './App.css';
import React from 'react';
import LoginPage from './pages/LoginPage/LoginPage';
import HotelSearchPage from './pages/HotelSearchPage/HotelSearchPage';

const App: React.FC = () => {

    return (
        <div className='app'>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/hotel-search" element={<HotelSearchPage/>} />
                    <Route path="/detail/:id" element={<DetailHotelPage />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;