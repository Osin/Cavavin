/**
 * Created by osin on 13/04/16.
 */
app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      template: "Home is home",
    })
    .otherwise({
      redirectTo: '/'
    });
});