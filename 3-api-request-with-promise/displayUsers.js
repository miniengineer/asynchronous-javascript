//declare a function inside of displayData module

function displayUsers(data) {
  var result = JSON.parse(data);
  return result.map((element) => {
    return `${element.name} has an id of ${element.id} and a phone number of ${element.phone}`;
  })
};

//export function declaration as a key of module.exports object
module.exports.displayUsers = displayUsers;
