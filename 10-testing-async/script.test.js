const { fetchData, sum } = require('./script');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

const data = [
  {
    "id": "1",
    "createdAt": "2020-01-30T08:15:11.589Z",
    "name": "Bruce Smitham",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/soffes/128.jpg"
  },
  {
    "id": "2",
    "createdAt": "2020-01-31T07:00:04.603Z",
    "name": "Dr. Shayna Braun",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/polarity/128.jpg"
  },
  {
    "id": "3",
    "createdAt": "2020-01-31T04:12:56.035Z",
    "name": "Elissa Bradtke",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/belyaev_rs/128.jpg"
  }
];

test('the data is users data', () => {
  return expect(fetchData('https://5e33e13be0161c00140ac5b8.mockapi.io/users')).resolves.toStrictEqual(data);
});

test('the fetched data is users data', async ()=> {
  await expect(fetchData('https://5e33e13be0161c00140ac5b8.mockapi.io/users')).resolves.toStrictEqual(data);
});
