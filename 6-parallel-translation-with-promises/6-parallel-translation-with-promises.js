//We have a function that translates a word into Spanish. It returns a promise.
//We need to write a function that given an array of words uses translateToSpanish function and returns an array of translated words.

function translateToSpanish(word) {
  return new Promise(resolve => {
    const delay = Math.ceil(Math.random() * 1000);
    setTimeout(() => {
      resolve(`el ${word}`);
    }, delay);
  });
}

let words = ["feed", "firewall", "panel", "alarm", "matrix", "matrix", "array", "feed", "microchip",
 "interface", "interface", "program", "feed", "pixel", "matrix"];

// var promise1 = translateToSpanish(words[0]);
// var promise2 = translateToSpanish(words[1]);
//
//
// Promise.all([promise1, promise2]).then(translatedWords => console.log(translatedWords));

function translateParallel(words) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    result.push(translateToSpanish(words[i]));
  }
  console.log(result);
  return Promise.all(result).then(translatedWords => console.log(translatedWords));
}

console.log(translateParallel(words));
