/**
 * Created by osin on 13/04/16.
 */
app.controller('CreateCtrl', function ($location, cepages, colors, regions, WineService) {
  this.cepages = cepages;
  this.colors = colors;
  this.regions = regions;
  this.createWine = function (form, wine) {
    if (form.$invalid) return;

    // save wine…
    var newWine = angular.copy(wine);
    WineService.createWine(newWine)
      .then(function (wine) {
        // redirect
        $location.path(`/wine/${wine.id}`);
      });

    // reset form
    // form.$setUntouched();
    // form.$setPristine();

    // empty fields
    // Object.keys(wine).forEach(function (k) {
    //   delete wine[k];
    // });
  }
});