const axios = require('axios');

const sum = (a, b) => {
  return a + b;
}

const fetchData = (url) => {
  return axios.get(url).then(response => response.data);
}


module.exports = {
  sum,
  fetchData
}


