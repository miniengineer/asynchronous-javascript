//importing function declaration from displayData module
const displayUsers = require("./displayUsers.js").displayUsers;
const displayExchangeRate = require("./displayExchangeRate.js").displayExchangeRate;
const displayWeather = require("./displayWeather.js").displayWeather;


//declaring request function using request node module
//if require path does not have any ./ at the beginning it imports node module

const request = require("request");
let result;

//here we nest one request under another because only then we are sure that
//next request will be executed only when first is done
//if we write code as follows then the console.log with a message will be the last one to execute

request("http://5cdfa066fc90670014267af7.mockapi.io/users", function (error,reponce,body) {
  if (error) {
    return 'there has been some error';
  } else {
    result = body;
    //since node.js does not have alert property we use console.log
    console.log(displayUsers(result));
    request("http://5cdfa066fc90670014267af7.mockapi.io/exchange_rate", function (error,reponce,body) {
      if (error) {
        return 'there has been some error';
      } else {
        result = body;
        //since node.js does not have alert property we use console.log
        console.log(displayExchangeRate(result));
        request("http://5cdfa066fc90670014267af7.mockapi.io/weather", function (error,reponce,body) {
          if (error) {
            return 'there has been some error';
          } else {
            result = body;
            //since node.js does not have alert property we use console.log
            console.log(displayWeather(result));
            console.log('готово!!');
          }
        });
      }
    });
  }
});
