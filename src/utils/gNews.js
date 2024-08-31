const axios = require('axios');

const BASE_URL = "https://gnews.io/api/v4";
const API_KEY = "efc155ce6320f4802c753bf7a2811981"; // replace with your API KEY

async function fetchHeadLines(max) {
    const params = {
        apikey: API_KEY,
        max,
        lang: 'en'
    };
    return axios.get(`${BASE_URL}/top-headlines`, params);
}

async function searchArticles(query, searchIn) {
    const params = {
        apikey: API_KEY,
        lang: 'en',
        q: query
    }
    if(searchIn) params['in'] = searchIn;
    return axios.get(`${BASE_URL}/search`, params);
}


module.exports = {
    fetchHeadLines,
    searchArticles
}