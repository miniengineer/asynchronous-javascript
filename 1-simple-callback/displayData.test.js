const displayData = require('./displayData.js').displayData;

var accounts = [
{"id":"1","name":"Brent Romaguera","phone":"372-746-9818"},
{"id":"2","name":"Aryanna Adams","phone":"(956) 491-7705"}
];

accounts = JSON.stringify(accounts);

test('should parse a JSON file and render name, id and phone number', () => {
  const text = displayData(accounts);
  expect(text).toStrictEqual([`Brent Romaguera has an id of 1 and a phone number of 372-746-9818`,
     `Aryanna Adams has an id of 2 and a phone number of (956) 491-7705`]);
});
