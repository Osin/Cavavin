angular.module('stringsOsin', [])
  .filter('pluck', function () {
    return function (input, key) {
      // imperative
      // var results = [];
      // for (var i = 0; i < input.length; i++) {
      // 	results.push(input[i][key]);
      // }
      // return results;
      //
      // functional
      return input.map((v) => v[key]);
    };
  });