/**
 * Created by osin on 11/04/16.
 */

var id = 0;
function generateWine() {
  return {
    id: ++id,
    vigneron: chance.name(),
    color: chance.pickone(["jaune vert", "jaune paille", "or vert", "or pale", "or jaune", "doré", "vieil or", "ambré clair", "ambré foncé", "roux", "tuilé", "grenat", "violet", "pourpre", "rubis", "cerise", "framboise"]),
    cepage: chance.pickone(["Cabernet sauvignon", "le Médoc", "Le Merlot", "le Libournais", "Cabernet franc", "Petit verdot", "Malbec"]),
    region: chance.pickone(["Alsace", "Armagnac et Cognac", "Beaujolais et Lyonnais", "Bordeaux", "Bourgogne", "Champagne", "Corse", "Jura", "Languedoc", "Lorraine", "Poitou-Charentes", "Provence", "Roussillon", "Savoie et Bugey", "Sud-Ouest", "Vallée de la Loire", "Vallée du Rhône"]),
    year: chance.year({min: 1700, max: 2015}),
    quantity: chance.integer({min: 0, max: 100}),
    degree: chance.integer({min: 5, max: 15}),
    description: chance.paragraph(),
    castle: chance.bool(),
    email: chance.email(),
  }
}

function generateWines(quantity) {
  if (parseInt(quantity) <= 0)
    return false;
  var wines = [];
  for (var i = 0; i < quantity; i++) {
    wines.push(generateWine());
  }
  return wines;
}