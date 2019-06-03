//importing function declaration from displayData module
const displayUsers = require("./displayUsers.js").displayUsers;


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
