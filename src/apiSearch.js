require('dotenv').config();
const fetch = require('node-fetch');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const Apikey = process.env.FACEBOOK_API_KEY;
const FB_GRAPH_URL = process.env.FACEBOOK_GRAPH_URL;

const apiSearch = async (query) => {
  const fetchURL = `${FB_GRAPH_URL}${Apikey}&q=[${query}]`;
  console.log(fetchURL);
  let response = await fetch(fetchURL);
  let json = await response.json();
  const interests = json.data;

  if (!json) {
    return {
      notFound: true,
    };
  }

  return interests;
}

module.exports = apiSearch;
