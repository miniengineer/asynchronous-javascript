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




//, "feed", "firewall", "panel", "alarm", "matrix", "matrix", "array", "feed", "microchip", "interface", "interface", "program", "feed", "pixel", "matrix"

const translateAll = (words) => {
  return new Promise(resolve => {
    let result = [];
    let p = translateToSpanish(words[0]);
    //we must use let for the loop because if we use var declaration
    //when call stack is empty and .then starts execution it will use the global var
    //which in this case after for loop finishes will be 5, which will give an undefined, since we have only 4 elements in array
    //we MUST use let, since it will declare a variable for each for loop block and when .then will go to the stack
    //it will use the let variable which was created for each for loop
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
