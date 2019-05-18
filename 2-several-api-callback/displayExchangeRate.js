const displayExchangeRate = (data) => {
  let result = JSON.parse(data);
  return result.map((element) => {
    return `Today's exchange rate of ${element.currency} is ${element.exchangeRate}`;
  });
}

module.exports.displayExchangeRate = displayExchangeRate;
