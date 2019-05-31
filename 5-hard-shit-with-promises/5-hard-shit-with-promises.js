function translateToSpanish(word) {
  return new Promise(resolve => {
    const delay = Math.ceil(Math.random() * 1000 / 20);
    setTimeout(() => {
      resolve(`el ${word}`);
    }, delay);
  });
}

console.log(translateToSpanish("hello"));
