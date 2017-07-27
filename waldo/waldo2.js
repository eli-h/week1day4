// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(key, i) {
    if (key === "Waldo") {
    	findWaldo.index = i
    	findWaldo.waldo = key
      found();   // execute callback
    }
  })
}

function actionWhenFound() {
  console.log(`Found ${findWaldo.waldo} at index ${findWaldo.index}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);