app.controller('MainCtrl', function ($scope) {
  this.wines = generateWines(30);
  this.headers = Object.keys(this.wines[0]);

  this.predicate = 'region';
  this.reverse = false;

  this.search = {};

  this.cepages = cepages;
  this.colors = colors;
  this.regions = regions;

  this.sort = function (h) {
    this.predicate = h;
    this.reverse = !this.reverse;
  };

  $scope.$watch('main.search', function (newValue) {
    Object.keys(newValue).forEach(function (k) {
      if (newValue[k] === null) delete newValue[k];
    })
  }, true);

  this.createWine = function (form, wine) {
    if (form.$invalid) return;

    // save wine…
    var newWine = angular.copy(wine);
    newWine.id = ++id;
    this.wines.push(newWine);

    // reset form
    form.$setUntouched();
    form.$setPristine();

    // empty fields
    Object.keys(wine).forEach(function (k) {
      delete wine[k];
    });
  }
});