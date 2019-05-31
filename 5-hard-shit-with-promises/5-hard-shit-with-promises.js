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

function goToNext(word) {
  return new Promise(resolve => {
    resolve(translateToSpanish(word).then(translation => result.push(translation)).catch(err => console.log(err)));
  });
}
var result = [];

function waitForEveryWord(array) {
  words.forEach(word => {
    goToNext(word);
  });
  return result;
}

console.log(waitForEveryWord(words));
