var countdownGenerator = function (x) {
  /* your code here */
  counter = x + 1;
  return function() {
  	counter -= 1
  	if (counter > 0) {
  		console.log("T-minus", counter, "...")
  	}
  	else if (counter == 0) {
  		console.log("Blast Off!")
  	}
  	else {
  		console.log("Rockets already gone, bub!")
  	}
  }
  return counter;
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!