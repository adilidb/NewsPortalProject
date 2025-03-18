import React, { useEffect, useState } from 'react';
import { getAllNews, deleteNews } from '../services/api';

const NewsList = ({ onEdit }) => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        loadNews();
    }, []);

    const loadNews = async () => {
        const data = await getAllNews();
        setNews(data);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this news?')) {
            await deleteNews(id);
            loadNews();
        }
    };

    return (
        <div>
            <h2>News List</h2>
            <table border="1" width="100%">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Published At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {news.map((item) => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.content}</td>
                            <td>{new Date(item.publishedAt).toLocaleDateString()}</td>
                            <td>
                                <button onClick={() => onEdit(item)}>Edit</button>
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default NewsList;
