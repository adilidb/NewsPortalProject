import axios from 'axios';

const API_URL = 'https://localhost:7009/api/news';

const getAllNews = async () => {
    const response = await axios.get(`${API_URL}/all`);
    return response.data;
};

const getNewsById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

const createNews = async (news) => {
    const response = await axios.post(`${API_URL}/create`, news);
    return response.data;
};

const updateNews = async (id, news) => {
    const response = await axios.put(`${API_URL}/update/${id}`, news);
    return response.data;
};

const deleteNews = async (id) => {
    await axios.delete(`${API_URL}/delete/${id}`);
};

export {
    getAllNews,
    getNewsById,
    createNews,
    updateNews,
    deleteNews
};
