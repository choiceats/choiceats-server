export default [
  // unit_id hardcoded to the order in the seed-units file

  // made up
  {name: '4 1/2 oz. cans', quantity: 4.5, unit_id: 5},
  {name: '4 oz. cans', quantity: 4, unit_id: 5},
  {name: '6 oz. cans', quantity: 6, unit_id: 5},
  {name: '8 oz. cans', quantity: 8, unit_id: 5},
  {name: '10.75 oz. cans', quantity: 10.75, unit_id: 5},
  {name: '11.5 oz. cans', quantity: 11.5, unit_id: 5},
  {name: '12 oz. cans', quantity: 12, unit_id: 5},
  {name: '14 oz. cans', quantity: 14, unit_id: 5},
  {name: '14 1/2 oz. cans', quantity: 14.5, unit_id: 5},
  {name: '15 oz. cans', quantity: 15, unit_id: 5},
  {name: '16 oz. cans', quantity: 16, unit_id: 5},
  {name: '19 oz. cans', quantity: 19, unit_id: 5},
  {name: '20 oz. cans', quantity: 20, unit_id: 5},
  {name: '26 oz. cans', quantity: 26, unit_id: 5},
  {name: '28 oz. cans', quantity: 28, unit_id: 5},
  {name: 'cans', quantity: null, unit_id: 23}, // UNITLESS
  {name: 'tall cans', quantity: null, unit_id: 23}, // UNITLESS
  {name: 'large cans', quantity: null, unit_id: 23}, // UNITLESS

  // from textbook //http://higheredbcs.wiley.com/legacy/college/gisslen/1118636600/appendices/Appendix_Metric_Conversions.pdf
  {name: 'no. 1 picnic cans', quantity: 10.5, unit_id: 5},
  {name: 'no. 211 cylinder cans', quantity: 12, unit_id: 5},
  {name: 'no. 300 cans', quantity: 13.5, unit_id: 5},
  {name: 'no. 303 cans', quantity: 15.6, unit_id: 5},
  {name: 'no. 2 cans', quantity: 20, unit_id: 5},
  {name: 'no. 2 1/2 cans', quantity: 28.5, unit_id: 5},
  {name: 'no. 3 cylinder cans', quantity: 46, unit_id: 5},
  {name: 'no. 5 cylinder cans', quantity: 56, unit_id: 5},
  {name: 'no. 10 cylinder cans', quantity: 103.7, unit_id: 5},

  // package sizes (for things like noodles, yeast, candies, pepperoni, vegetables)
  {name: '1/4 oz. packages', quantity: 0.25, unit_id: 17},
  {name: '3 oz. packages', quantity: 3, unit_id: 17},
  {name: '8 oz. packages', quantity: 8, unit_id: 17},
  {name: '10 oz. packages', quantity: 10, unit_id: 17},
  {name: '14 oz. packages', quantity: 14, unit_id: 17},
  {name: '16 oz. packages', quantity: 16, unit_id: 17},
  {name: '20 oz. packages', quantity: 20, unit_id: 17},
  {name: '26 oz. packages', quantity: 26, unit_id: 17},
  {name: 'packages', quantity: null, unit_id: 23}, // UNITLESS
  {name: 'small packages', quantity: null, unit_id: 23}, // UNITLESS
  {name: 'large packages', quantity: null, unit_id: 23}, // UNITLESS
  {name: '4-serving size packages', quantity: null, unit_id: 23}, // UNITLESS

  // made up
  {name: '12 oz. jars', quantity: 12, unit_id: 5},
  {name: '14 oz. jars', quantity: 14, unit_id: 5},
  {name: '16 oz. jars', quantity: 16, unit_id: 5},
  {name: 'jars', quantity: null, unit_id: 23}, // UNITLESS

  {name: '10 oz. bags', quantity: 10, unit_id: 17},
  {name: '20 oz. bags', quantity: 20, unit_id: 17},
  {name: '30 oz. bags', quantity: 30, unit_id: 17},
  {name: '32 oz. bags', quantity: 32, unit_id: 17},
  {name: 'bags', quantity: null, unit_id: 23}, // UNITLESS
  {name: 'large bags', quantity: null, unit_id: 23}, // UNITLESS

  {name: 'sticks', quantity: 8, unit_id: 17}, // i.e. butter
  {name: 'cubes', quantity: 8, unit_id: 17}, // i.e. butter

  {name: 'loaves', quantity: null, unit_id: 23}, // UNITLESS
  {name: 'pinches', quantity: null, unit_id: 23}, // UNITLESS
  {name: 'glugs', quantity: null, unit_id: 23}, // UNITLESS
  {name: 'drops', quantity: null, unit_id: 23}, // UNITLESS
  {name: 'dollops', quantity: null, unit_id: 23}, // UNITLESS
  {name: 'dashes', quantity: null, unit_id: 23}, // UNITLESS
  {name: 'bunches', quantity: null, unit_id: 23}, // UNITLESS
  {name: 'slabs', quantity: null, unit_id: 23}, // UNITLESS
  {name: 'trays', quantity: null, unit_id: 23}, // UNITLESS
  {name: 'to taste', quantity: null, unit_id: 23}, // UNITLESS

  {name: 'Kevin blue cups', quantity: null, unit_id: 23} // UNITLESS
]

export const units = [
  {name: 'CENTIMETERS', abbr: 'cm.'},
  {name: 'CUPS', abbr: 'c.'},
  {name: 'DESSERT_SPOONS', abbr: 'dessert spoons'},
  {name: 'FEET', abbr: 'ft.'},
  {name: 'FLUID_OUNCES', abbr: 'fl oz.'},
  {name: 'GALLONS', abbr: 'ga.'},
  {name: 'GRAMS', abbr: 'g.'},
  {name: 'INCHES', abbr: 'in.'},
  {name: 'KILOGRAMS', abbr: 'kg.'},
  {name: 'KILOMETERS', abbr: 'km.'},
  {name: 'LITERS', abbr: 'l.'},
  {name: 'METERS', abbr: 'm.'},
  {name: 'MILES', abbr: 'mi.'},
  {name: 'MILLIGRAMS', abbr: 'mg.'},
  {name: 'MILLILITERS', abbr: 'mL.'},
  {name: 'MILLIMETERS', abbr: 'mm.'},
  {name: 'OUNCES', abbr: 'oz.'},
  {name: 'PINTS', abbr: 'pts.'},
  {name: 'POUNDS', abbr: 'lbs.'},
  {name: 'QUARTS', abbr: 'qts.'},
  {name: 'TABLESPOONS', abbr: 'tbsp.'},
  {name: 'TEASPOONS', abbr: 'tsp.'},
  {name: 'UNITLESS', abbr: ''},
  {name: 'YARDS', abbr: 'yds.'}
]
// 1 c. choco chips ~= 6 oz. choco chips
