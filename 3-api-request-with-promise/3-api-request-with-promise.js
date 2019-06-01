//importing function declaration from displayData module
const displayUsers = require("./displayUsers.js").displayUsers;
// const displayExchangeRate = require("./displayExchangeRate.js").displayExchangeRate;
// const displayWeather = require("./displayWeather.js").displayWeather;


//declaring request function using request node module
//if require path does not have any ./ at the beginning it imports node module
//we are using request with promise node module

const request = require("request");

function getData() {
  return new Promise((resolve,reject) => {
    request("http://5cdfa066fc90670014267af7.mockapi.io/users", (error, response, body) => {
      resolve(body);
    });
  });
}

getData().then((data) => {
  console.log(displayUsers(data));
});


// function (error,reponce,body) {
//   if (error) {
//     return 'there has been some error';
//   } else {
//     result = body;
//     //since node.js does not have alert property we use console.log
//     console.log(displayUsers(result));
//     request("http://5cdfa066fc90670014267af7.mockapi.io/exchange_rate", function (error,reponce,body) {
//       if (error) {
//         return 'there has been some error';
//       } else {
//         result = body;
//         //since node.js does not have alert property we use console.log
//         console.log(displayExchangeRate(result));
//         request("http://5cdfa066fc90670014267af7.mockapi.io/weather", function (error,reponce,body) {
//           if (error) {
//             return 'there has been some error';
//           } else {
//             result = body;
//             //since node.js does not have alert property we use console.log
//             console.log(displayWeather(result));
//             console.log('готово!!');
//           }
//         });
//       }
//     });
//   }
// });
