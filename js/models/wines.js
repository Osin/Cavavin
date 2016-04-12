/**
 * Created by osin on 11/04/16.
 */

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
var id = 0;
var cepages = ['muscadet', 'beaujolais'];
var colors = ['red', 'white', 'pink'];
var regions = ['bordeaux', 'bourgogne', 'rhone'];

function generateWine () {
  return {
    id: ++id,
    vigneron: chance.name(),
    color: chance.pickone(['red', 'white', 'pink']),
    cepage: chance.pickone(cepages),
    region: chance.pickone(['bordeaux', 'bourgogne', 'rhone']),
    year: chance.year({ min: 1942, max: 2015 }),
    quantity: chance.integer({ min: 1, max: 100 }),
    degree: chance.integer({ min: 5, max: 15 }),
    volume: chance.integer({ min: 50, max: 100 }),
    description: chance.paragraph(),
    castle: chance.bool(),
    email: chance.email()
  }
}

function generateWines (count = 20) {
  var wines = [];
  for (var i = 0; i < count; i++) {
    wines.push(generateWine())
  }
  return wines;
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