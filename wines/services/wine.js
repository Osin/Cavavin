/**
 * Created by osin on 11/04/16.
 */
app
  .value('cepages', ['muscadet', 'beaujolais'])
  .value('colors', ['red', 'white', 'pink'])
  .value('regions', ['bordeaux', 'bourgogne', 'rhone'])

  // wines

  // id int autoincrement
  // vigneron string
  // color enum
  // cepage string
  // region enum
  // year num
  // quantity num
  // degree num
  // volume num
  // description string++
  // castle bool
  // email email
  .factory('WineService', function ($http) {

    function generateWine() {
      return {
        id,
        vigneron,
        color,
        cepage,
        region,
        year,
        quantity,
        degree,
        volume,
        description,
        castle,
        email
      }
    };

    var wines = [];

    return {
      getWines () {

        var promiseResHTTP = $http.get('http://localhost:3000/wines');
        var promiseWines = promiseResHTTP.then(function (resHTTP) {
          wines = resHTTP.data;
          return wines;
        });
        return promiseWines;
      },

      getWine (id) {
        if (wines.length) {
          return $q.resolve(wines.find(x => x.id === id));
        }
        var promiseResHTTP = $http.get(`http://localhost:3000/wines/${id}`);
        var promiseWine = promiseResHTTP.then(function (resHTTP) {
          return resHTTP.data;
        });
        return promiseWine;
      },

      createWine (wine) {
        var promiseResHTTP = $http.post(`http://localhost:3000/wines`, wine)
        var promiseWine = promiseResHTTP.then(function (resHTTP) {
          wines.push(resHTTP.data);
          return resHTTP.data;
        });
        return promiseWine;
      }
    }
  });