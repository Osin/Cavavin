/**
 * Created by osin on 11/04/16.
 */
app.filter('truncate', function() {
  return function (input, size){
    return input.slice(0, size) + "…";
  }
});

app.filter('rot13', function(){
  function rot13(s) {
    return s.replace(/[a-zA-Z]/g, function (c) {
      return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
  }
  return function (input){
    return rot13(input);
  }
});