import React, { useEffect, useState } from 'react';
import { getAllNews } from '../services/api';
import { Link } from 'react-router-dom';

const NewsList = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        loadNews();
    }, []);

    const loadNews = async () => {
        const data = await getAllNews();
        setNews(data);
    };

    return (
        <div>
            <h2>News</h2>
            <div className="news-list">
                {news.map((item) => (
                    <div key={item.id} className="news-item">
                        <h3>{item.title}</h3>
                        <p>{item.content.slice(0, 100)}...</p>
                        <Link to={`/news/${item.id}`}>Read More</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsList;
