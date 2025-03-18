import React, { useState, useEffect } from 'react';
import { createNews, updateNews } from '../services/api';

const NewsForm = ({ selectedNews, onSave }) => {
    const [news, setNews] = useState({
        title: '',
        content: '',
        imageUrl: '',
        publishedAt: '',
    });

    useEffect(() => {
        if (selectedNews) {
            setNews(selectedNews);
        }
    }, [selectedNews]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNews({ ...news, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (news.id) {
            await updateNews(news.id, news);
        } else {
            await createNews(news);
        }
        onSave();
        setNews({ title: '', content: '', imageUrl: '', publishedAt: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{news.id ? 'Edit News' : 'Add News'}</h2>
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={news.title}
                onChange={handleChange}
                required
            />
            <textarea
                name="content"
                placeholder="Content"
                value={news.content}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="imageUrl"
                placeholder="Image URL"
                value={news.imageUrl}
                onChange={handleChange}
            />
            <input
                type="date"
                name="publishedAt"
                value={news.publishedAt}
                onChange={handleChange}
                required
            />
            <button type="submit">{news.id ? 'Update' : 'Create'}</button>
        </form>
    );
};

export default NewsForm;
