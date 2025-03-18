import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewsList from './components/NewsList';
import NewsDetails from './components/NewsDetails';


function App() {
    return (
        <Router>
            <div>
                <h1>News Portal</h1>
                <Routes>
                    <Route path="/" element={<NewsList />} />
                    <Route path="/news/:id" element={<NewsDetails />} />
                   
                </Routes>
            </div>
        </Router>
    );
}

export default App;
