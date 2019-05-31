function translateToSpanish(word) {
  return new Promise(resolve => {
    const delay = Math.ceil(Math.random() * 1000 / 20);
    setTimeout(() => {
      resolve(`el ${word}`);
    }, delay);
  });
}

let words = ["alarm","circuit", "bus", "system", "firewall"];

//, "feed", "firewall", "panel", "alarm", "matrix", "matrix", "array", "feed", "microchip", "interface", "interface", "program", "feed", "pixel", "matrix"
debugger;

var result

function waitForEveryWord(array) {
  let result = [];
  for(var i = 0; i < array.length; i++) {
    translateToSpanish(array[i])
    .then(translatedWord => result.push(translatedWord))
    .catch(err => console.log(err));
  }
  return result;
}

console.log(waitForEveryWord(words));

function waitForEveryWord(array) {

}

new Promise(resolve => {
  translateToSpanish(word)
  .then(translation => result.push(translation))
  .catch(err => console.log(err));
});
