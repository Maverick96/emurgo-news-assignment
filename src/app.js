const express = require('express');
const fetchArticles = require('./routes/fetchArticles');
const findArticle = require('./routes/findArticle');
const searchArticle = require('./routes/searchArticle');

const app = express();

// routes
app.get('/fetchArticles', fetchArticles);
app.get('/findArticle', findArticle);
app.get('/searchArticle', searchArticle);

app.listen(3000, () => {
    console.log('Server running on port 3000');
  });