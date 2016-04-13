/**
 * Created by osin on 13/04/16.
 */
app.controller('ListCtrl', function ($scope, cepages, colors, regions, WineService) {
  "use strict";
  this.cepages = cepages;
  this.colors = colors;
  this.regions = regions;
  this.wines = [];
  WineService.getWines()
    .then((wines) => {
      this.wines = wines;
      this.headers = Object.keys(this.wines[0]);
    });
  this.search = {};
  this.predicate = 'region';
  this.reverse = false;
  this.sort = function (h) {
    this.predicate = h;
    this.reverse = !this.reverse;
  };

  $scope.$watch('list.search', function (newValue) {
    Object.keys(newValue).forEach(function (k) {
      if (newValue[k] === null) delete newValue[k];
    })
  }, true);
});