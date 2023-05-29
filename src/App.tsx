import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import DetailHotelPage from './pages/DetailHotelPage/DetailHotelPage';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import React from 'react';

const App: React.FC = () => {

    return (
        <div className='app'>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/detail/:id" element={<DetailHotelPage />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

export default App;