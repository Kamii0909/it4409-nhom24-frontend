import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Route } from 'react-router'
import HomePage from './pages/HomePage';
import DetailHotelPage from './pages/DetailHotelPage';
import './App.css';

const App: React.FC = () => {

    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/detail/:id" element={<DetailHotelPage />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;