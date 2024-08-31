const cache = require('../utils/cache');
const gNewsService = require('../utils/gNews');

async function findArticle(req, res) {
    // the task had mentioned to search by title or author. but there are not apis to search based on author.
    let { title } = req.query;
    if(!title) 
        return res.status(400).json({ error: 'Bad Request', message: 'title is a required field' });

    // stringifying so that search api get valid input
    title = JSON.stringify(title);
    const cacheKey = `title_${title}`;
    const cachedData = cache.get(cacheKey);
    // check if articles are already present in cache or not
    if(cachedData) {
        console.log("Serving data from cache");
        return res.json(cachedData);
    }

    try{
        const resp = await gNewsService.searchArticles(title, "title");
        // update cache with new articles
        cache.set(cacheKey, resp.data)
        return res.json(resp.data)
    }
    catch(err) {
        console.log("Error in getting articles from GNews", err);
        return res.status(500).json({ error: "Internal Server Error", message: 'Error in fetching articles from Gnews'})
    }
}

module.exports = findArticle