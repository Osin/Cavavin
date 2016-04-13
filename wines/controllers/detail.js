app.controller('DetailCtrl', function ($routeParams, WineService) {
  WineService.getWine(Number($routeParams.id))
    .then((wine) => {
      this.wine = wine;
    });
});