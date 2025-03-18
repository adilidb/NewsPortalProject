import React, { useState } from 'react';
import NewsList from './components/NewsList';
import NewsForm from './components/NewsForm';

function App() {
    const [selectedNews, setSelectedNews] = useState(null);

    const handleEdit = (news) => {
        setSelectedNews(news);
    };

    const handleSave = () => {
        setSelectedNews(null);
    };

    return (
        <div>
            <h1>News Portal Admin</h1>
            <NewsForm selectedNews={selectedNews} onSave={handleSave} />
            <NewsList onEdit={handleEdit} />
        </div>
    );
}

export default App;
