/**
 * Created by osin on 12/04/16.
 */
angular.module('collectionsOsin', [])
  .filter('truncate', function () {

  return function (input, length = 20) {
    return input.slice(0, length) + '…';
  };
})
.filter('rot13', function () {
  // private
  function rot13 (s) {
    return s.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
  }

  // public
  return function (input) {
    return rot13(input);
  }
});