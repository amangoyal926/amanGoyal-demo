// Creating a promise
let myPromise = new Promise(function(resolve, reject) {
    let x = 0;
      
    setTimeout(function() {
      if (x === 0) {
        resolve("Success!");
      } else {
        reject("Failure!");
      }
    }, 1000);
  });
  
  // Using the promise
  myPromise.then(function(value) {
    console.log(value);
  }).catch(function(error) {
    console.log(error);
  });
  