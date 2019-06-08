function translateToSpanish(word) {
  return new Promise((resolve, reject) => {
    const delay = Math.ceil(Math.random() * 1000);
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error('API call failed'));
      } else {
        resolve(`el ${word}`);
      }
    }, delay);
  });
}

let words = ["feed", "firewall", "panel", "alarm", "matrix", "matrix", "array", "feed", "microchip",
 "interface", "interface", "program", "feed", "pixel", "matrix"];

const translateParallel = (words) => {
  return Promise.all(words.map(word => checkTranslation(word)));
}

translateParallel(words)
.then(translatedWords => console.log(translatedWords));

function checkTranslation(word) {
  return new Promise(resolve => {
    translateToSpanish(word)
    .then(word => resolve(word))
    .catch(err => {
      checkTranslation(word)
      .then(word => resolve(word));
    });
  });
}
