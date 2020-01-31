const { fetchData, sum } = require('./script');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('the data is users data', () => {
  const data = [
    {
      "id": "1",
      "createdAt": "2020-01-30T08:15:11.589Z",
      "name": "Bruce Smitham",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/soffes/128.jpg"
    },
    {
      "id": "2",
      "createdAt": "2020-01-30T16:16:05.762Z",
      "name": "Cheyanne Monahan",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/guischmitt/128.jpg"
    },
    {
      "id": "3",
      "createdAt": "2020-01-30T16:23:52.436Z",
      "name": "Gerald Balistreri",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/diesellaws/128.jpg"
    },
    {
      "id": "4",
      "createdAt": "2020-01-31T00:53:41.753Z",
      "name": "Mia Homenick",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/svenlen/128.jpg"
    },
    {
      "id": "5",
      "createdAt": "2020-01-30T20:37:55.261Z",
      "name": "Darlene Schiller",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ZacharyZorbas/128.jpg"
    },
    {
      "id": "6",
      "createdAt": "2020-01-30T09:51:44.415Z",
      "name": "Miss Royce Wehner",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/evandrix/128.jpg"
    },
    {
      "id": "7",
      "createdAt": "2020-01-30T21:51:03.032Z",
      "name": "Emmy Gulgowski",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/samscouto/128.jpg"
    }
  ];

  return expect(fetchData('https://5e33e13be0161c00140ac5b8.mockapi.io/users')).resolves.toStrictEqual(data);
});
