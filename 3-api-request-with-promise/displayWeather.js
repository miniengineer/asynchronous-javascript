const displayWeather = (data) => {
  let result = JSON.parse(data);
  return result.map((element) => {
    return `Today's weather going to be ${element.weather}`;
  });
}

module.exports.displayWeather = displayWeather;
