const cache = require('../utils/cache');
const gNewsService = require('../utils/gNews');

async function searchArticle(req, res) {
    let { searchBy } = req.query;
    if(!searchBy) 
        return res.status(400).json({ error: 'Bad Request', message: 'searchBy is a required param' });

    searchBy = JSON.stringify(searchBy);
    const cacheKey = `searchBy_${searchBy}`;
    const cachedData = cache.get(cacheKey);
    // check if articles are already present in cache or not
    if(cachedData) {
        console.log("Serving data from cache");
        return res.json(cachedData);
    }

    try{
        const resp = await gNewsService.searchArticles(searchBy);
        // update cache with new articles
        cache.set(cacheKey, resp.data)
        return res.json(resp.data)
    }
    catch(err) {
        console.log("Error in getting articles from GNews", err);
        return res.status(500).json({ error: "Internal Server Error", message: 'Error in fetching articles from Gnews'})
    }

}

module.exports = searchArticle;