var axios = require('axios');
import API_KEY from '../API_KEY';

export async function fetchDataByUrl (id: string) {
  const response = await axios.get(
    `https://newsapi.org/v2/everything?qInTitle=${id}&apiKey=${API_KEY}`,
  );
}