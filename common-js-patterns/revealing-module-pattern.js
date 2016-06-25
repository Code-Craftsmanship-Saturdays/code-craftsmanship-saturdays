// IIFE
var Scores = (function() {
  var scores = [100, 98, 95, 89, 85, 78, 74];

  var printScores = function() {
    return scores.forEach(function(score) {
      console.log(score);
    })
  };

  return {
    printScores: printScores
  }
}());

// Calling function outside the block becuase it is immediately invoked and is a Singleton.
Scores.printScores();