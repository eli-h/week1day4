var words = ["ground", "control", "to", "major", "tom"];

function map (arr, func) {
	var length = []
  arr.forEach(function (x){
  	length.push(func(x));
  })
  console.log(length);
}

map(words, function(word) {
  return word.length;
});


