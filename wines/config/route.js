/**
 * Created by osin on 13/04/16.
 */
app.config(function($routeProvider) {
  $routeProvider
    .when("/wines/", {
      templateUrl: "wines/views/list.html",
      controller: "ListCtrl",
      controllerAs: "list"
    })
    .when("/wine/create", {
      templateUrl: "wines/views/create.html",
      controller: "CreateCtrl",
      controllerAs: "create"
    })
    .when("/wine/:id", {
      templateUrl: "wines/views/detail.html",
      controller: "DetailCtrl",
      controllerAs: "detail"
    })
});