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

export { getAllNews, getNewsById };
