function Promise(func) {
  let resolveFunc;

  const resolve = (...args) => {
    return resolveFunc(...args);
  }

  const reject = (...args) => {
    //...
  }

  return {
    then: function (thenFunc) {
      resolveFunc = thenFunc;
      return func(resolveFunc);
    },
    catch: function (catchFunc) {
      return catchFunc();
    }
  };

}




Promise((resolve,reject) => {
  resolve('test');
}).then((response) => {
  console.log(response);
});
