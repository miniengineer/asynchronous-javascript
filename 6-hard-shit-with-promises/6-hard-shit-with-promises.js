//We have a function that translates a word into Spanish. It returns a promise.
//We need to write a function that given an array of words uses translateToSpanish function and returns an array of translated words.

function translateToSpanish(word) {
  return new Promise(resolve => {
    const delay = Math.ceil(Math.random() * 1000 / 20);
    setTimeout(() => {
      resolve(`el ${word}`);
    }, delay);
  });
}


let words = ["alarm", "circuit", "bus", "system", "firewall"];

const translateAll = (words) => {
  return new Promise(resolve => {
    let result = [];
    let p = translateToSpanish(words[0]);
    //`i` is declared globally and its value is updated with each `loop` iteration. 
    //the asynchronous code is executed only when the `Call Stack` is empty 
    //and thus will have access only to the last value of `i` which in the end will be equal to `4`
    //need to use `let` declaration for `i` so that each chuck of asynchronous code within the `loop` 
    //will have its own `i` value because `let` scope is limited to a block statement.
    //in result, when `Call Stack` will be empty each `loop` iteration will execute with the correct `i` value.
    for (let i = 1; i < words.length; i++) {
      p = p.then(translation => {
        result.push(translation);
        return translateToSpanish(words[i]);
      });
    }
    p.then(translation => {
      result.push(translation);
      resolve(result);
    }).catch(err => console.log(err));
  });
}


translateAll(words).then(result => console.log(result));
