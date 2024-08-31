require('dotenv').config()
const express = require('express');
const path = require('path')
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerPath = path.join(__dirname, 'swagger.yaml');
const swaggerDocument = YAML.load(swaggerPath);


const fetchArticles = require('./routes/fetchArticles');
const findArticle = require('./routes/findArticle');
const searchArticle = require('./routes/searchArticle');

const app = express();

// routes
app.get('/fetchArticles', fetchArticles);
app.get('/findArticle', findArticle);
app.get('/searchArticle', searchArticle);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => {
    console.log('Server running on port 3000');
  });