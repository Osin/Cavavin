/**
 * Created by osin on 12/04/16.
 */
angular.module('mathsOsin', [])
  .filter('sum', function () {
    return function (input) {
      if(input.length === 0){
        return input;
      }
      // imperative
      // var sum = 0;
      // for (var i = 0; i < input.length; i++) {
      // 	var n = Number(input[i]); // 1
      // 	if (!isNaN(n)) { // 2
      // 		sum += n; // 3
      // 	}
      // }
      // return sum;

      var not = (fn) => (args) => !fn(args);

      var add = (a, b) => a + b;
      // functional
      // 1
      return input
        .map(Number)
        .filter(not(isNaN))
        .reduce(add);
    };
  })
  .filter('average', function (sumFilter) {
    return function (input) {
      return sumFilter(input) / input.length;
    };
  });