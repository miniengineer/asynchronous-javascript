const axios = require('axios');

const sum = (a, b) => {
  return a + b;
}

const fetchData = (url) => {
  return axios.get(url).then(response => response.data);
}

// fetchData('https://5e33e13be0161c00140ac5b8.mockapi.io/users');

module.exports = {
  sum,
  fetchData
}


