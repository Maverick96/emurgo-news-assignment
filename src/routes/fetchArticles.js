const cache = require('../utils/cache');
const gNewsService = require('../utils/gNews');

async function fetchArticles(req, res) {
    let { limit } = req.query;
    if (limit) {
        limit = parseInt(limit, 10);
        if (isNaN(limit) || limit <= 0) {
          return res.status(400).json({ error: 'Bad Request', message: 'limit must be a positive integer' });
        }
      } else {
        limit = 10; // default value
      }

    const cacheKey = `articles_${limit}`;
    const cachedData = cache.get(cacheKey);
    // check if articles are already present in cache or not
    if(cachedData) {
        console.log("Serving data from cache");
        return res.json(cachedData);
    }


    try{
        const resp = await gNewsService.fetchHeadLines(limit);
        // update cache with new articles
        cache.set(cacheKey, resp.data)
        return res.json(resp.data)
    }
    catch(err) {
        console.log("Error in getting articles from GNews", err);
        return res.status(500).json({ error: "Internal Server Error", message: 'Error in fetching articles from Gnews'})
    }

}

module.exports = fetchArticles