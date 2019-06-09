//importing function declaration from displayData module
const displayData = require("./displayData.js").displayData;

//declaring request function using request node module
//if require path does not have any ./ at the beginning it imports node module

const request = require("request");
let result;

request("https://5cfca797a954a70014032906.mockapi.io/accounts", function (error,reponce,body) {
  if (error) {
    return 'there has been some error';
  } else {
    result = body;
    //since node.js does not have alert property we use console.log
    console.log(displayData(result));
  }
});
