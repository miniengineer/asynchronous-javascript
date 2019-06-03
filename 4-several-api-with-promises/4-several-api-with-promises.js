//The following are three API calls that in result give a random gyphy
//Since I could not find any free Random Word Generator API, I decided use
//related word generator + random number generator to fake it.


//Our first API call returns an array of related words to the one in the query
fetch("https://api.datamuse.com/words?rel_jja=beautiful")
.then(response => response.json())
.then((searchWord) => {
  //Now we are going to make our second API call
  //to get a random number which we gonna use to
  //get a random word from the previous array of related words
  var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
  targetUrl = 'https://csrng.net/csrng/csrng.php?min=0&max=20';
  fetch(proxyUrl + targetUrl)
  .then(response => response.json())
  .then(number => {
    //declare a variable to make it easier
    let randomWord = searchWord[number[0].random].word
    return randomWord;
  })
  .then(randomWord => {
    //Third API call to gyphy Search
    //I am going to use the randomWord variable here
      let URL = `https://api.giphy.com/v1/gifs/search?api_key=SH03syw27CCqSr3yOf3hnR0bD0hRq99b&q=${randomWord}&limit=25&offset=0&rating=G&lang=en`;
      fetch(URL)
      .then(dataObject => dataObject.json())
      .then(gyphy => {
        let output = '<h3>Random Giphy</h3>';
        output += `<ul><li><img src="${gyphy.data[0].images.downsized.url}"></li></ul>`;
        //In the end I am going to display the result in the index.html
        document.getElementById('screenshots').innerHTML = output;
      })
  })
})
.catch(error => console.error(error))
