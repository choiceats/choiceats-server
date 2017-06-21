const CENTIMETERS = 'CENTIMETERS'
const CUPS = 'CUPS'
const DESSERT_SPOONS = 'DESSERT_SPOONS'
const FEET = 'FEET'
const FLUID_OUNCES = 'FLUID_OUNCES'
const GALLONS = 'GALLONS'
const GRAMS = 'GRAMS'
const INCHES = 'INCHES'
const KILOGRAMS = 'KILOGRAMS'
const KILOMETERS = 'KILOMETERS'
const LITERS = 'LITERS'
const METERS = 'METERS'
const MILES = 'MILES'
const MILLIGRAMS = 'MILLIGRAMS'
const MILLILITERS = 'MILLILITERS'
const MILLIMETERS = 'MILLIMETERS'
const OUNCES = 'OUNCES'
const PINTS = 'PINTS'
const POUNDS = 'POUNDS'
const QUARTS = 'QUARTS'
const TABLESPOONS = 'TABLESPOONS'
const TEASPOONS = 'TEASPOONS'
const UNITLESS = 'UNITLESS'
const YARDS = 'YARDS'

export default [{
  'author': 'six_sisters_stuff',
  'ingredients': [
    {unitQuantity: 1, unit: UNITLESS, name: 'Oreo cookie crust'},
    {unitQuantity: 6, unit: OUNCES, name: 'cool whip'},
    {unitQuantity: 16, unit: UNITLESS, name: 'Grasshopper cookies (crushed)'},
    {packageQuantity: 1, package: '14 oz. cans', name: 'sweetened condensed milk'},
    {unitQuantity: 8, unit: OUNCES, name: 'cream cheese'},
    {unitQuantity: 1, unit: UNITLESS, name: 'green food coloring'},
  ],
  'instructions': 'Mix cream cheese, sweetened condensed milk and 3 drops of green coloring.\nFold in cool whip and crushed cookies. Pour into crust.\nGarnish with more crushed cookies and freeze for at least 5 hours or overnight.',
  'name': 'Cookie Grasshopper Pie',
  'description': 'Delicious mint and chocolate recipe.',
  'image_url': 'https://upload.wikimedia.org/wikipedia/en/e/e2/Zorak_Space_Ghost.png',
}, {
  'author': 'neallred',
  'ingredients': [
    {unitQuantity: 3.5, unit: CUPS, name: 'sugar'},
    {unitQuantity: 1, unit: CUPS, name: 'margarine'},
    {unitQuantity: 1.5, unit: TABLESPOONS, name: 'molasses'},
    {unitQuantity: 0.667, unit: CUPS, name: 'water'},
    {unitQuantity: 3, unit: UNITLESS, name: 'eggs'},
    {unitQuantity: 1, unit: TABLESPOONS, name: 'vanilla'},
    {unitQuantity: 6, unit: CUPS, name: 'flour'},
    {unitQuantity: 1, unit: TABLESPOONS, name: 'baking soda'},
    {unitQuantity: 2, unit: TEASPOONS, name: 'salt'},
    {unitQuantity: 3, unit: CUPS, name: 'chocolate chips'}
  ],
  'instructions': '1. Cream sugar and margarine together.\n2. Add water, eggs, vanilla, and flour to mixture.\n3. Add flour, baking soda, and salt.\n4. Add chocolate chips.\n5. Drop spoons of batter onto greased cookie sheets.\n6. Bake at 350 deg. F. for 11-12 minutes.',
  'name': 'Chocolate Chip Cookies'
}, {
    'author': 'neallred',
    'ingredients': [
      {unitQuantity: 0.75, unit: CUPS, name: 'oil'},
      {unitQuantity: 1.334, unit: CUPS, name: 'sugar'},
      {unitQuantity: 2, unit: UNITLESS, name: 'egg whites'},
      {unitQuantity: 0.5, unit: CUPS, name: 'molasses'},
      {unitQuantity: 0.25, unit: CUPS, name: 'applesauce'},
      {unitQuantity: 2, unit: TEASPOONS, name: 'vanilla'},
      {unitQuantity: 3.25, unit: CUPS, name: 'flour'},
      {unitQuantity: 0.75, unit: CUPS, name: 'cocoa'},
      {unitQuantity: 2, unit: TEASPOONS, name: 'baking soda'},
      {unitQuantity: 2, unit: CUPS, name: 'salt'},
      {unitQuantity: 1, unit: UNITLESS, name: 'sugar'}
    ],
    'instructions': '1. Mix oil, sugar, egg whites, molasses, applesauce, and vanilla.\n2. Add flour, cocoa, baking soda, and salt and mix well.\n3. Roll dough into 1 1/4" balls and roll balls in granulated sugar.\n4. Place on ungreased cookie sheets.\n5. Bake at 350 deg. F. for 11-12 minutes.',
    'name': 'Chocolate Softies'
  }, {
    'author': 'neallred',
    'ingredients': [
      {unitQuantity: 3, unit: CUPS, name: 'flour'},
      {unitQuantity: 1, unit: TABLESPOONS, name: 'baking powder'},
      {unitQuantity: 1, unit: TEASPOONS, name: 'salt'},
      {unitQuantity: 2, unit: CUPS, name: 'sugar'},
      {unitQuantity: 0.667, unit: CUPS, name: 'oil'},
      {unitQuantity: 6, unit: UNITLESS, name: 'egg whites'},
      {unitQuantity: 2, unit: CUPS, name: 'chocolate chips'},
      {unitQuantity: 2, unit: TEASPOONS, name: 'vanilla'}
    ],
    'instructions': '1. Preheat oven to 350 deg. F.\n2. Line a 10 x 15 pan with 2 layers of waxed paper.\n3. Oil top of waxed paper.\n4. Stir together the flour, baking powder, salt, and sugar.\n5. Add the oil, egg whites, vanilla, and beat until thoroughly combined. Mixture will be stiff.\n6. Stir in the chocolate chips.\n7. Scrape the dough into the prepared pan, flattening the dough in the pan.\n8. Bake for about 30 minutes at 350 deg. F. Cool in the pan and then cut into squares, 2" x 2".',
    'name': 'Chocolate Chip Blond Brownies'
  }, {
    'author': 'violet2flame',
    'ingredients': [
      {unitQuantity: 0.5, unit: CUPS, name: 'butter'},
      {unitQuantity: 2, unit: TABLESPOONS, name: 'granulated sweetening'},
      {unitQuantity: 2.5, unit: CUPS, name: 'flour'},
      {unitQuantity: 0.5, unit: TEASPOONS, name: 'salt'},
      {unitQuantity: 0.5, unit: CUPS, name: 'ice water'},
      {unitQuantity: 5, unit: CUPS, name: 'blueberries'},
      {unitQuantity: 1, unit: CUPS, name: 'granulated sweetening'},
      {unitQuantity: 0.25, unit: TEASPOONS, name: 'powdered klah bark (cinnamon)'},
      {unitQuantity: 2, unit: TEASPOONS, name: 'citrus juice'},
      {unitQuantity: 1.5, unit: TABLESPOONS, name: 'butter'}
    ],
    'instructions': 'Cut the butter into chunks.\nCombine the dry ingredients into a bowl.\nWork the butter gently into the dry mixture with a fork until pieces the size of peas form.\nSprinkle the water over and work in. (do not overwork the dough).\nForm the dough into a ball.\nGently toss berries with sweetening and klah bark in a large bowl.\nSprinkle citrus juice over mixture.\nSpoon berries into crust and dot with butter.\nBake in oven at 350 deg. F. for 30 min.\nMakes 1 Bubbly Pie :)\nCan substitute one 20 ounce package of frozen blueberries for 5 c. fresh blueberries',
    'name': 'Bubbly Pies'
  }, {
    'author': 'neallred',
    'ingredients': [
      {unitQuantity: 2, unit: POUNDS, name: 'baking potatoes'},
      {unitQuantity: 2, unit: TABLESPOONS, name: 'salt'},
      {unitQuantity: 2, unit: UNITLESS, name: 'eggs'},
      {unitQuantity: 1, unit: CUPS, name: 'Ricotta cheese'},
      {unitQuantity: 2.5, unit: CUPS, name: 'flour'},
      {unitQuantity: 1, unit: UNITLESS, name: 'flour'},
    ],
    'instructions': "1. Peel and quarter the potatoes, putting them in a medium stock pot with enough water to cover the potatoes with one inch of water.\n 2. Add a scant handful of salt.\n 3. Put the potatoes to boil until they are tender when pierced with a fork , but not mushy.\n4. Drain the potatoes.\n5. Put the potatoes through a food mill or potato ricer.\n 6 In a large bowl, combine the potatoes, eggs, and ricotta, and mix well using your hands or a fork until a consistent dough is formed. Be careful not to overmix.\n 7.  Add the flour a half cup at a time, mixing each time by hand until there is a soft, pliable dough. The dough should not be sticky, and it should not be hard. If it's too sticky or soft, the gnocchi will be mushy, but if there's too much flour, the gnocchi will be chewy and tough. (This is the challenging part!).\n8.  Knead the dough a few times until uniform, and divide the dough in half.\n 9. Flour a work area, and roll the dough out into a long thin roll about 3/4 inch thick.\n 10.  Cut these tubes of dough into sections about 1 inch long.\n 11.  Meanwhile, bring a stock pot of water to a boil.\n 12.  There are a variety of ways to 'mark' the gnocchi-all just a style choice, since at this point, they are more or less done. Here are some suggestions: Mark an indentation in the center of each gnocchi with your index finger; or roll over the side of a cheese grater to make patterned indentations; or roll over the backside of a fork, or roll over the center of a wooden gnocchi tool. At this point, the gnocchi can be frozen laid out on a baking sheet lined with wax paper. After they are frozen, they can be stored in a freezer bag. Frozen gnocchi are just put into the boiling water like the unfrozen ones.\n14. Throw the gnocchi one at a time into the boiling water. They are cooked when they rise to the top.\n 15. Collect with a slotted spoon and transfer to a plate.\n 16. Serve with the sauce of your choice. (Some nice choices are walnut Gorgonzola, tomato or white sauce.)\n2 pounds potatoes is about 6 potatoes",
    'name': 'Noquis'
  }, {
    'author': 'samashby',
    'ingredients': [
      {unitQuantity: 1.5, unit: POUNDS, name: 'fresh tomatoes'},
      {unitQuantity: 2, unit: UNITLESS, name: 'Anaheim chilies'},
      {unitQuantity: 1, unit: UNITLESS, name: 'yellow wax peppers'},
      {unitQuantity: 1, unit: UNITLESS, name: 'small onions'},
      {unitQuantity: 1, unit: TEASPOONS, name: 'garlic powder'},
      {unitQuantity: 0.5, unit: TEASPOONS, name: 'pepper'},
      {unitQuantity: 0.5, unit: TEASPOONS, name: 'salt'},
      {unitQuantity: 1, unit: UNITLESS, name: 'cilantro'}
    ],
    'instructions': '1. Dice tomatoes and oinoins.\n2. Chop chilies, peppers and cilantro.\n3. In a bowl, mix tomatoes, onions, chilies, peppers, salt, garlic powder and pepper. Add cilantro to taste. Serve with corn chips.',
    'name': 'Fresh Salsa'
  }, {
    'author': 'neallred',
    'ingredients': [
      {unitQuantity: 2, unit: CUPS, name: 'margarine'},
      {unitQuantity: 2.667, unit: CUPS, name: 'sugar'},
      {unitQuantity: 2, unit: UNITLESS, name: 'eggs'},
      {unitQuantity: 0.667, unit: CUPS, name: 'molasses'},
      {unitQuantity: 6, unit: TABLESPOONS, name: 'corn syrup'},
      {unitQuantity: 0.25, unit: CUPS, name: 'milk'},
      {unitQuantity: 8, unit: CUPS, name: 'flour'},
      {unitQuantity: 4, unit: TEASPOONS, name: 'baking soda'},
      {unitQuantity: 4, unit: TEASPOONS, name: 'cinnamon'},
      {unitQuantity: 3, unit: TEASPOONS, name: 'ginger'},
      {unitQuantity: 3, unit: TEASPOONS, name: 'allspice'},
      {unitQuantity: 1, unit: UNITLESS, name: 'sugar'}
    ],
    'instructions': '1. Mix margarine, sugar, eggs, molasses, corn syrup, and milk.\n2. Add flour, baking soda, cinnamon, ginger, and allspice and mix well.\n3. Roll dough into 1 1/4" balls and roll balls in granulated sugar.\n4. Place on ungreased cookie sheets.\n5. Bake at 350 deg. F. for 11-12 minutes.',
    'name': 'Molasses Softies'
  }, {
    'author': 'neallred',
    'ingredients': [
      {unitQuantity: 0.75, unit: CUPS, name: 'uncooked white rice'},
      {unitQuantity: 2, unit: CUPS, name: 'milk'},
      {unitQuantity: 0.333, unit: CUPS, name: 'white sugar'},
      {unitQuantity: 0.25, unit: TEASPOONS, name: 'salt'},
      {unitQuantity: 1, unit: UNITLESS, name: 'eggs, beaten'},
      {unitQuantity: 0.667, unit: CUPS, name: 'raisins'},
      {unitQuantity: 1, unit: TABLESPOONS, name: 'butter'},
      {unitQuantity: 0.5, unit: TEASPOONS, name: 'vanilla'}
    ],
    'instructions': '1. Boil 1 1/2 c. water in a saucepan; stir rice into boiling water. Reduce heat to low, cover, and simmer for 20 min.\n2. Add in 1 1/2 c. milk, sugar and salt. Cook over medium heat until thick and creamy, 15 to 20 min.\n3. Stir in remaining 1/2 cup milk, beaten egg, and raisins; cook 2 min. more, stirring constantly.\n4. Remove from heat, stir in butter and vanilla, pour into preferred container, and cool in refrigerator.',
    'name': 'Rice Pudding'
  }, {
    'author': 'aggies_kitchen',
    'ingredients': [
      {unitQuantity: 1, unit: POUNDS, name: 'zucchini'},
      {unitQuantity: 0.5, unit: CUPS, name: 'Italian-seasoned Panko bread crumbs'},
      {unitQuantity: 0.25, unit: CUPS, name: 'Parmesan cheese'},
      {unitQuantity: 2, unit: UNITLESS, name: 'eggs'}
    ],
    'instructions': "1. Preheat oven to 425. Line baking sheet with aluminum foil and spray with cooking spray.\n2. Combine bread crumbs and Parmesan cheese.\n3. Whisk 2 eggs together in a shallow pie plate.\n4. Cut the ends off the zucchinis. Cut in half hamburger style and then eighth each half hotdog style, giving you 16 pieces per zucchini. If thinner fries desired, further cut the strips hotdog style. Dry off zucchinis with a paper towel.\n 5. Working with a small handful at a time, dip the zucchini sticks in the egg, shake them to remove any excess, and then roll them in about 2-3 tablespoons of bread crumbs at a time (more if needed). Don't use all the bread crumbs at once because they'll soak up moisture from the egg and won't stick to the zucchini. Place the coated strips on the prepared baking sheet and repeat until all the zucchini strips have been coated.\n6. Bake for 10-12 minutes in the prepared oven then remove from oven, flip the fries, and bake for another 10-12 minutes or until the zucchini is not soggy and the coating is crisp and golden brown. Serve immediately with pizza sauce or ranch dressing. Serves 6-8 as a side dish.\n1 pound zucchini is about 2 zucchinis",
    'name': 'Baked Zucchini Fries'
  }, {
    'author': 'susanna',
    'ingredients': [
      {unitQuantity: 1, unit: CUPS, name: 'butter'},
      {unitQuantity: 2, unit: CUPS, name: 'sugar'},
      {unitQuantity: 4, unit: UNITLESS, name: 'large eggs'},
      {unitQuantity: 2, unit: TEASPOONS, name: 'vanilla extract'},
      {unitQuantity: 1, unit: CUPS, name: 'all-purpose flour'},
      {unitQuantity: 1, unit: CUPS, name: 'cocoa powder'},
      {unitQuantity: 0.5, unit: TEASPOONS, name: 'baking powder'},
      {unitQuantity: 0.5, unit: TEASPOONS, name: 'salt'},
      {unitQuantity: 8, unit: OUNCES, name: 'cream cheese'},
      {unitQuantity: 0.333, unit: CUPS, name: 'sugar'},
      {unitQuantity: 0.5, unit: TEASPOONS, name: 'vanilla'}
    ],
    'instructions': '1. Preheat oven to 350 deg. F. and grease a 9" by 13" pan.\n2. In a saucepan, melt butter over low heat. Remove from heat and mix in sugar. Stir in eggs, 1 at a time, and vanilla. In a medium bowl, combine flour, cocoa powder, baking powder, and salt. Stir flour mixture into saucepan until blended. Pour batter into prepared pan and spread evenly.\n3. In a small bowl, stir sugar and cream cheese together until evenly blended. Drop by spoonfuls into brownie batter. Swirl a table knife through the cream cheese and batter to create marbled effect.\n4. Bake for 20-25 minutes, or until toothpick (or knife) inserted 2 inches from the center comes out almost clean. Cool until warm, but not hot. Cut into 32 pieces, and maybe only eat 1 because cream cheese brownies are a health hazard.\n 1 cup of butter is 2 sticks',
    'name': 'Cream Cheese Brownies'
  }, {
    'author': 'neallred',
    'ingredients': [
      {packageQuantity: 1, package: '10 oz. packages', name: 'pizza crust dough'},
      {unitQuantity: 0.5, unit: POUNDS, name: 'lean ground beef'},
      {unitQuantity: 1, unit: CUPS, name: 'cooked ham, diced'},
      {unitQuantity: 1, unit: UNITLESS, name: 'green bell peppers, chopped'},
      {unitQuantity: 1, unit: UNITLESS, name: 'red onions, finely chopped'},
      {packageQuantity: 1, package: '14 oz. jars', name: 'pizza sauce'},
      {packageQuantity: 1, package: '4 1/2 oz. cans', name: 'mushrooms, drained'},
      {unitQuantity: 0.25, unit: CUPS, name: 'butter, melted'},
      {packageQuantity: 1, package: '8 oz. packages', name: 'pepperoni, sliced'},
      {unitQuantity: 1, unit: CUPS, name: 'Mozzarella cheese, shredded'}
    ],
    'instructions': '1. Preheat oven to 400 deg. F. (200 deg C).\n2. In a skillet over medium heat, brown the ground beef until no pink shows; drain. Mix in the ham, bell pepper, onions, pizza sauce and mushrooms.\n3. Lay pizza dough flat on cookie sheet.\n4. Distribute pepperoni slices over dough.\n5. Place a heaping pile of the sauce mixture on one side of dough (some may be left over).\n6. Sprinkle with mozzarella cheese.\n7. Fold dough over and pinch ends and sides together.\n8. Poke holes in the top and brush melted butter on it.\n9. Cook in a preheated oven for 30 minutes or until golden brown.\n10. Slice into individual sections to serve.',
    'name': 'Stromboli'
  }, {
    'author': 'neallred',
    'ingredients': [
      {unitQuantity: 0.667, unit: CUPS, name: 'sugar'},
      {unitQuantity: 0.25, unit: CUPS, name: 'margarine'},
      {unitQuantity: 1, unit: UNITLESS, name: 'eggs'},
      {unitQuantity: 0.5, unit: CUPS, name: 'milk'},
      {unitQuantity: 1.5, unit: CUPS, name: 'flour'},
      {unitQuantity: 2, unit: TEASPOONS, name: 'baking powder'},
      {unitQuantity: 0.5, unit: TEASPOONS, name: 'salt'},
      {unitQuantity: 0.5, unit: CUPS, name: 'brown sugar, packed'},
      {unitQuantity: 2, unit: TABLESPOONS, name: 'flour'},
      {unitQuantity: 2, unit: TABLESPOONS, name: 'butter, melted'},
      {unitQuantity: 2, unit: TEASPOONS, name: 'cinnamon'},
      {unitQuantity: 1, unit: UNITLESS, name: 'nuts, chopped'},
      {unitQuantity: 0.5, unit: TEASPOONS, name: 'nutmeg'},
      {unitQuantity: 2, unit: UNITLESS, name: 'apple slices'}
    ],
    'instructions': '1. Mix together sugar, margarine, and egg.\n2. Stir in milk.\n3. Add flour, baking powder, and salt.\n4. Mix well and spread half of dough in 9 x 9 pan.\n5. Mix streusel mixture by combining remaining ingredients.\n6. Cover with apple slices and streusel mixture, top with other half of dough, and bake at 375 deg. F. for 25-35 minutes.\n Need about (about 2 large apples) worth of slices',
    'name': 'Cheerful Morning Apple Coffee Cake'
  }, {
    'author': 'lemuel',
    'ingredients': [
      {unitQuantity: 1, unit: CUPS, name: 'warm water'},
      {unitQuantity: 0.5, unit: TEASPOONS, name: 'yeast'},
      {unitQuantity: 1, unit: TABLESPOONS, name: 'sugar'},
      {unitQuantity: 4, unit: CUPS, name: 'white flour'},
      {unitQuantity: 0.125, unit: CUPS, name: 'oil'},
      {unitQuantity: 0.5, unit: CUPS, name: 'whole milk'},
      {unitQuantity: 1.5, unit: TEASPOONS, name: 'salt'},
      {unitQuantity: 1, unit: UNITLESS, name: 'eggs'}
    ],
    'instructions': '1. Sprinkle yeast and sugar over water in mixing bowl. Let sit for 3 minutes.\n2. Add and mix the rest of the ingredients to the bowl, except for one cup of the flour.\n3. Add remaining flour 1/2 cup at a time and kneed until dough is sticky, but pulls away from hands easily. Add more flour if needed.\n4. Preheat oven to 170 deg. F., and turn off hit when 170 deg. F. is reached.\n5. Form a dough ball, cover with cloth in the bowl, and let it raise in the heated oven for at least 1 hour.\n6. Remove dough, form into an oval shape, heat oven to 350-375 deg. F., grease desired pan, place oval inside, score the top, and bake for at least 30 minutes.',
    'name': 'Vanilla Egg Bread'
  }, {
      'author': 'meganashby',
      'ingredients': [
        {packageQuantity: 1, package: 'packages', name: 'frozen corn'},
        {unitQuantity: 1, unit: CUPS, name: 'carrots, sliced'},
        {unitQuantity: 1, unit: CUPS, name: 'broccoli'},
        {packageQuantity: 2, package: 'cans', name: 'cream of potato soup'},
        {unitQuantity: 0.5, unit: CUPS, name: 'Parmesan cheese, grated'},
        {unitQuantity: 2, unit: CUPS, name: 'milk'},
        {packageQuantity: 1, package: 'to taste', name: 'Cheddar cheese'}
      ],
      'instructions': '1. Cook corn, carrots, and broccoli together.\n2. Add remaining ingredients and simmer until warmed through.',
      'name': 'Broccoli Cheese Soup'
    }, {
      'author': 'neallred',
      'ingredients': [
        {unitQuantity: 2, unit: CUPS, name: 'sugar'},
        {unitQuantity: 1, unit: TABLESPOONS, name: 'molasses'},
        {unitQuantity: 0.5, unit: CUPS, name: 'oil'},
        {unitQuantity: 1, unit: CUPS, name: 'peanut butter'},
        {unitQuantity: 1, unit: TEASPOONS, name: 'butter flavor'},
        {unitQuantity: 1, unit: TEASPOONS, name: 'vanilla'},
        {unitQuantity: 3, unit: UNITLESS, name: 'large eggs'},
        {unitQuantity: 2.5, unit: CUPS, name: 'flour'},
        {unitQuantity: 1, unit: CUPS, name: 'oatmeal'},
        {unitQuantity: 1.5, unit: TEASPOONS, name: 'baking soda'},
        {unitQuantity: 1, unit: TEASPOONS, name: 'baking powder'},
        {unitQuantity: 0.5, unit: TEASPOONS, name: 'salt'},
        {unitQuantity: 1, unit: UNITLESS, name: 'granulated sugar'}
      ],
      'instructions': '1. Mix together: sugar, molasses, oil, peanut butter, butter flavor, vanilla, eggs.\n2. Mix in: flour, oatmeal, baking soda, baking powder, salt.\n3. Roll into 1 1/4" balls.\n4. Roll balls in sugar and place on baking sheet. Flatten with fork or bottom of cup.\n5. Bake at 375 deg. F. for 8-9 minutes.',
      'name': 'Peanut Butter Oatmeal Cookies'
    }, {
      'author': 'violet2flame',
      'ingredients': [
       {unitQuantity: 0.5, unit: CUPS, name: 'black beans'},
       {unitQuantity: 1, unit: UNITLESS, name: 'cilantro, chopped'},
       {unitQuantity: 1, unit: TEASPOONS, name: 'cayenne powder'},
       {packageQuantity: 1, package: 'dashes', name: 'salt'},
       {unitQuantity: 1, unit: UNITLESS, name: 'onions, chopped'},
       {unitQuantity: 1, unit: UNITLESS, name: 'minced garlic'}
      ],
      'instructions': '1. Bring ingredients to boil, and let simmer 5 minutes. Serve with chips.',
      'name': "Jenna's Black Bean Dip"
    }, {
      'author': 'neallred',
      'ingredients': [
       {unitQuantity: 3, unit: CUPS, name: 'bread flour'},
       {unitQuantity: 1.25, unit: CUPS, name: 'boiling water'},
       {unitQuantity: 2, unit: TABLESPOONS, name: 'vegetable oil'},
       {packageQuantity: 1, package: 'to taste', name: 'salt'},
       {packageQuantity: 1, package: 'to taste', name: 'pepper'},
       {packageQuantity: 1, package: 'bunches', name: 'green onions, finely chopped'},
       {unitQuantity: 2, unit: TEASPOONS, name: 'vegetable oil'}
      ],
      'instructions': '1. Use fork to mix flour and boiling water in a large bowl. Knead dough into a ball. Cover bowl with plastic wrap; let dough rest for 30-60 min.\n2. Evenly divide dough into 16 pieces. Roll each piece into a 1/4" thick circle. Brush each circle with oil, season with salt and pepper, and sprinkle with about 1 tsp. green onions. Roll up, cigar style, and pinch open ends together to form a circle. Roll each circle flat to 1/4".\n3. Heat 2 tsp. oil in a large skillet. Fry pancakes until golden brown, about 2 min. on each side. Makes 16 pancakes.',
      'name': 'Green Onion Pancakes'
    }, {
      'author': 'lemuel',
      'ingredients': [
       {unitQuantity: 12, unit: UNITLESS, name: 'lasagna noodles'},
       {unitQuantity: 8, unit: OUNCES, name: 'Parmesan cheese, grated or dry'},
       {unitQuantity: 0.5, unit: POUNDS, name: 'ground beef'},
       {unitQuantity: 0.25, unit: CUPS, name: 'olive oil'},
       {unitQuantity: 0.5, unit: UNITLESS, name: 'onions, finely chopped'},
       {unitQuantity: 2, unit: UNITLESS, name: 'garlic cloves, minced'},
       {packageQuantity: 1, package: '28 oz. cans', name: 'crushed tomatoes'},
       {unitQuantity: 8, unit: OUNCES, name: 'tomato sauce'},
       {unitQuantity: 1, unit: TABLESPOONS, name: 'sugar'},
       {unitQuantity: 2, unit: UNITLESS, name: 'bay leaves'},
       {unitQuantity: 1, unit: TEASPOONS, name: 'celery seed'},
       {unitQuantity: 1, unit: TEASPOONS, name: 'salt'},
       {unitQuantity: 1, unit: TEASPOONS, name: 'basil'},
       {unitQuantity: 1, unit: TEASPOONS, name: 'oregano'},
       {unitQuantity: 0.125, unit: TEASPOONS, name: 'pepper'},
       {packageQuantity: 1, package: 'cubes', name: 'margarine'},
       {unitQuantity: 0.5, unit: CUPS, name: 'flour'},
       {unitQuantity: 0.5, unit: TEASPOONS, name: 'salt'},
       {unitQuantity: 3, unit: CUPS, name: 'milk'}
      ],
      'instructions': 'RED SAUCE:\n1. In 4-6 qt pot, brown hamburger, onion, and garlic in olive oil.\n2. Add all spices, tomato sauce, and crushed tomatoes.\n3. Simmer 20-30 min.\nWHITE SAUCE:\n1. In sauce pan, melt margarine.\n2. Add flour and salt to make paste.\n3. Add the milk all at once.\n4. cook and stir over medium heat until sauce is thick and bubbly\nNOODLES:\n1. Cook 1 large package of lasagna noodles according to directions (9 or 12 noodles).\n2. Drain and rinse on cool water\nLASAGNA:\n1. In 9x13 pan, assemble lasagna in following order at least three times: Noodles, red sauce, white sauce, sprinkle with Parmesan cheese.\n2. Bake at 350 deg. F. for 40-45 min. Allow 10-15 min to cool.',
      'name': 'Kennedy Center Lasagna'
    }, {
      'author': 'neallred',
      'ingredients': [
       {unitQuantity: 1, unit: TABLESPOONS, name: 'butter, unsalted'},
       {unitQuantity: 0.5, unit: UNITLESS, name: 'medium onions, finely chopped'},
       {unitQuantity: 0.5, unit: UNITLESS, name: 'medium red bell peppers, finely chopped'},
       {packageQuantity: 2, package: 'pinches', name: 'kosher salt'},
       {unitQuantity: 1.5, unit: TEASPOONS, name: 'kosher salt'},
       {unitQuantity: 2, unit: CUPS, name: 'long-grain white rice'},
       {packageQuantity: 1, package: 'pinches', name: 'saffron'},
       {unitQuantity: 2.5, unit: CUPS, name: 'chicken broth'},
       {unitQuantity: 1, unit: UNITLESS, name: '1 by 2 inch strip orange zest'},
       {unitQuantity: 2, unit: UNITLESS, name: 'bay leaves'},
       {unitQuantity: 0.5, unit: CUPS, name: 'peas'},
       {unitQuantity: 0.25, unit: CUPS, name: 'golden raisins'},
       {unitQuantity: 0.25, unit: CUPS, name: 'pistachios, chopped'}
      ],
      'instructions': '1. Steep saffron in 1/4 c. hot but not boiling water (substitute turmeric powder if saffron is not available). 2. Preheat the oven to 350 deg. F.\n3. Melt the butter in a 3-quart saucier over medium heat.\n4. Stir in the onion, bell pepper and 2 pinches of salt.\n5. Decrease the heat to low and sweat until the onion is translucent and aromatic but not browned, 3 to 4 minutes. Increase the heat to medium and add the rice. Cook, stirring frequently, until you smell nuts, another 3 to 4 minutes.\n6. Add the saffron and its water, the broth, orange zest, bay leaves and the remaining 1 1/2 teaspoons salt. Increase the heat and bring to a boil.\n7. OK, now the weird part: Thoroughly wet a clean towel, kill the heat, scatter the peas (fresh or frozen) on top of the rice, then place the towel across the top of the saucier. Top with the lid, then fold the towel corners up over the lid.\n8. Transfer the saucier (towel and all) to the oven and bake 15 minutes.\n9. Remove and rest at room temperature for 15 more minutes without opening the lid.\n10. Fish out the orange zest and bay leaves. Turn the pilaf out onto a platter, fluff with a large fork and garnish with the raisins and pistachios.',
      'name': 'Rice Pilaf'
    }, {
      'author': 'neallred',
      'ingredients': [
       {unitQuantity: 2, unit: CUPS, name: 'flour'},
       {unitQuantity: 1, unit: TABLESPOONS, name: 'baking powder'},
       {unitQuantity: 1, unit: TEASPOONS, name: 'salt'},
       {unitQuantity: 0.25, unit: CUPS, name: 'butter'},
       {unitQuantity: 0.667, unit: CUPS, name: 'milk'}
      ],
      'instructions': '1. Mix the dry ingredients.\n2. Cut/mix in butter (can substitute 3 Tbsp. oil for 1/4 c. butter)\n3.Stir in the milk.\n4. Knead the dough on a floured surface.\n5. Roll or pat it out about 3/4" thick.Cut it into biscuits.\n6. You can use an official cutter, or a tomato sauce or mushroom or green chile can works well for a cutter.\n7.Bake at 400 deg. F. for about 10 min., but watch it the first few times until you know what your oven does.',
      'name': 'Biscuits'
    }, {
      'author': 'neallred',
      'ingredients': [
       {unitQuantity: 1, unit: CUPS, name: 'butter, softened'},
       {unitQuantity: 0.5, unit: CUPS, name: 'sugar'},
       {unitQuantity: 2, unit: CUPS, name: 'all-purpose flour'},
       {unitQuantity: 4, unit: UNITLESS, name: 'eggs'},
       {unitQuantity: 1.5, unit: CUPS, name: 'white sugar'},
       {unitQuantity: 0.25, unit: CUPS, name: 'all-purpose flour'},
       {unitQuantity: 2, unit: UNITLESS, name: 'lemons, juiced'}
      ],
      'instructions': '1. Preheat oven to 350 deg. F. (175 deg C).\n2. In a medium bowl, blend together softened butter, 2 c. flour and 1/2 c. sugar. Press into the bottom of an ungreased 9x13 inch pan.\n3. Bake for 15 to 20 min. in the preheated oven, or until firm and golden.\n4. In another bowl, whisk together the remaining 1 1/2 c. sugar and 1/4 c. flour. Whisk in the eggs and lemon juice (2 lemons = 1/2 c. lemon juice). Pour over the baked crust.\n5. Bake for an additional 20 min. in the preheated oven. The bars will firm up as they cool.\nMakes 1 9"x13" pan.',
      'name': 'Lemon Bars'
    }, {
      'author': 'samashby',
      'ingredients': [
       {unitQuantity: 12, unit: UNITLESS, name: 'tortilla shells (corn or flour)'},
       {unitQuantity: 2, unit: TABLESPOONS, name: 'butter'},
       {unitQuantity: 0.5, unit: CUPS, name: 'onions, chopped'},
       {unitQuantity: 3, unit: TABLESPOONS, name: 'flour'},
       {unitQuantity: 4, unit: UNITLESS, name: 'garlic cloves, minced'},
       {unitQuantity: 8, unit: OUNCES, name: 'sour cream'},
       {unitQuantity: 2, unit: CUPS, name: 'chicken broth'},
       {unitQuantity: 1, unit: TEASPOONS, name: 'coriander'},
       {packageQuantity: 1, package: '4 oz. cans', name: 'diced green chilies, drained'},
       {unitQuantity: 0.25, unit: TEASPOONS, name: 'pepper'},
       {unitQuantity: 1, unit: CUPS, name: 'Monterey Jack cheese'},
       {unitQuantity: 1, unit: UNITLESS, name: 'chicken bouillon cubes'},
       {unitQuantity: 2, unit: CUPS, name: 'cooked chicken'},
       {unitQuantity: 1, unit: UNITLESS, name: 'green onions'},
       {unitQuantity: 1, unit: UNITLESS, name: 'olives'},
       {unitQuantity: 1, unit: UNITLESS, name: 'tomatoes'},
      ],
      'instructions': 'SAUCE:\n1. In saucepan, cook onion, garlic (4 garlic cloves, minced = 1 tsp. bottled crushed garlic), coriander (optional), pepper and chicken bouillon in butter until tender.\n2. Stir flour into sour cream, and add to onion mixture.\n3. Stir in broth and chili peppers all at once. Cook and stir until thickened and bubbly. Remove from heat and add in 1/2 c. cheese.\nFILLING:\n1. Stir in 1/2 - 1 c. sauce into shredded chicken. Place about 1/4 c. filling on top of each tortilla shell that has been warmed in microwave for 10 seconds each, and roll up.\n2. Place rolls, seam side down, in a lightly greased baking dish. Top with remaining sauce (if sauce becomes too thick, add a litle broth or water).\n3. Bake at 350 deg. F for 35 min. or until heated through.\n4. Sprinkle with remaining chese. Bake 5 min. more to melt cheese. Sprinkle green onions, olives, and tomatoes on top.',
      'name': 'Chicken Enchiladas'
    }, {
      'author': 'lemuel',
      'ingredients': [
       {unitQuantity: 8, unit: CUPS, name: 'hot water'},
       {unitQuantity: 2, unit: TABLESPOONS, name: 'yeast'},
       {unitQuantity: 0.5, unit: CUPS, name: 'sugar'},
       {packageQuantity: 1, package: 'dollops', name: 'molasses'},
       {packageQuantity: 1, package: 'dollops', name: 'oil'},
       {unitQuantity: 10, unit: CUPS, name: 'white flour'},
       {unitQuantity: 10, unit: CUPS, name: 'wheat flour'},
       {unitQuantity: 4, unit: CUPS, name: 'oats'},
       {unitQuantity: 0.125, unit: CUPS, name: 'salt'}
      ],
      'instructions': '1. Mix water, yeast, sugar, molasses and oil. Let sit 2 minutes.\n2. Pour in white and wheat flour, oats, and salt. Mix dry ingredients together and then knead into dough by hand. This can take half an hour but it will all knead in.\n3. Preheat oven to 170 deg. F. and turn off as soon as temperature attained. Cover bread dough bowl and put in oven to raise for 1 hour.\n4. Take out dough, scrape it onto counter, and cut in 1/8 wedges of circles. Roll each 1/8th into a loaf, place in pans, and bake at 375 deg. F. for 40 min.',
      'name': 'Whole Wheat Bread'
    }, {
      'author': 'samashby',
      'ingredients': [
       {unitQuantity: 8, unit: OUNCES, name: 'cream cheese'},
       {packageQuantity: 1, package: '8 oz. cans', name: 'crushed pineapple, drained'},
       {unitQuantity: 1, unit: TEASPOONS, name: 'seasoning salt'},
       {unitQuantity: 0.5, unit: CUPS, name: 'green peppers, finely chopped'},
       {unitQuantity: 2, unit: TABLESPOONS, name: 'onions, finely chopped'},
       {unitQuantity: 1, unit: CUPS, name: 'nuts, chopped'}
      ],
      'instructions': '1. Mix all together except nuts.\n2. Make into balls and roll into nuts.\n3. Refrigerate. Serve with a variety of crackers.',
      'name': 'Cheese Ball'
    }, {
      'author': 'sam_song',
      'ingredients': [
       {unitQuantity: 2, unit: CUPS, name: 'sugar'},
       {unitQuantity: 4, unit: TABLESPOONS, name: 'cocoa'},
       {unitQuantity: 0.5, unit: CUPS, name: 'butter'},
       {unitQuantity: 0.5, unit: CUPS, name: 'milk'},
       {unitQuantity: 1, unit: CUPS, name: 'peanut butter'},
       {unitQuantity: 1, unit: TABLESPOONS, name: 'vanilla'},
       {unitQuantity: 3, unit: CUPS, name: 'oatmeal'},
      ],
      'instructions': '1. In a heavy saucepan bring to a boil, the sugar, cocoa, butter and milk. Let boil for 1 min.\n2. Add peanut butter, vanilla and oatmeal. On a sheet of waxed paper, drop mixture by the teaspoonfuls, until cooled and hardened.',
      'name': 'No Bake Cookies'
    }, {
      'author': 'neallred',
      'ingredients': [
       {unitQuantity: 1, unit: TABLESPOONS, name: 'active dry yeast'},
       {unitQuantity: 1.5, unit: CUPS, name: 'water'},
       {unitQuantity: 1, unit: TEASPOONS, name: 'sugar'},
       {unitQuantity: 1.5, unit: CUPS, name: 'milk'},
       {unitQuantity: 0.5, unit: CUPS, name: 'sugar'},
       {unitQuantity: 0.334, unit: CUPS, name: 'oil'},
       {unitQuantity: 6, unit: CUPS, name: 'white flour'},
       {unitQuantity: 2.5, unit: TEASPOONS, name: 'salt'},
       {unitQuantity: 1, unit: UNITLESS, name: 'butter, softened'},
       {unitQuantity: 1, unit: UNITLESS, name: 'cinnamon sugar'},
       {unitQuantity: 1, unit: CUPS, name: 'brown sugar'},
       {unitQuantity: 6, unit: TABLESPOONS, name: 'butter'},
       {unitQuantity: 0.25, unit: CUPS, name: 'corn syrup'}
      ],
      'instructions': "ROLLS:\n1. Mix yeast, water, milk, and 1 tsp. sugar. Let sit for 10-15 minutes.\n2. Pour in sugar and oil.\n3. Mix in 5 of 6 c. flour and salt.\n4. Knead in last cup of flour. Knead in more flour as needed. \n5. Let dough rise till double in bulk (about 40 minutes, can do less in a pinch but rolls won't be as fluffy).\n6. Prepare caramel while waiting for dough to rise. Pour caramel into pans as soon as it is ready.\n7. Cut risen dough in half. Roll one half into a rectangle, about 11\" x 16\".\n8. Spread melted soft butter over the rectangle.\n9. Sprinkle cinnamon sugar over the rectangle.\n10. Roll rectangle into a tube (hotdog style).\n11. Cut tube into 15 rolls.\n12. Place rolls into pans.\n13. Repeat steps 7-12 for the other half of dough.\n14. Heat oven to 350 and bake rolls for 20-25 minutes.\nCARAMEL:\n1. In a saucepan, mix brown sugar, butter, and corn syrup.\n2. Cook on low heat (2-3 on a 10-point burner) just until blended. Caramel should still be grainy. It will finish cooking in the oven. Over-cooking caramel in the pot will make the caramel inedibly hard after it cools from being in the oven.\n3. Pour caramel evenly between two lightly oiled 9\" x 13\" pans.",
      'name': 'Caramel Rolls'
    }, {
      'author': 'renee',
      'ingredients': [
        {packageQuantity: 1, package: '15 oz. cans', name: 'Nalley\'s chili with no beans'},
        {unitQuantity: 8, unit: OUNCES, name: 'cream cheese'},
        {unitQuantity: 1, unit: UNITLESS, name: 'chips'}
      ],
      'instructions': '1. Melt chili and cheese together. Serve with chips.',
      'name': "Renee's Bean Dip"
    }, {
      'author': 'violet2flame',
      'ingredients': [
       {unitQuantity: 2, unit: CUPS, name: 'flour'},
       {unitQuantity: 2, unit: TABLESPOONS, name: 'sugar'},
       {unitQuantity: 2, unit: TABLESPOONS, name: 'baking powder'},
       {unitQuantity: 1, unit: TEASPOONS, name: 'baking soda'},
       {unitQuantity: 0.5, unit: TEASPOONS, name: 'salt'},
       {unitQuantity: 2, unit: CUPS, name: 'buttermilk'},
       {unitQuantity: 2, unit: UNITLESS, name: 'eggs'},
       {unitQuantity: 2, unit: TABLESPOONS, name: 'oil'},
       {unitQuantity: 1, unit: TEASPOONS, name: 'vanilla'}
      ],
      'instructions': '1. Mix dry ingredients in bowl.\n2. Mix wet ingredients into dry ingredients.\n3. Batter should be fluffy.\n4. Heat griddle to 350.\n5. Pour batter onto griddle.\n6. When bubbles in the batter pop and stay popped and when the edges of the pancake look dry, flip them over.\n7. Cook other side for about 40 seconds.',
      'name': 'Buttermilk Pancakes'
    }, {
      'author': 'samashby',
      'ingredients': [
       {unitQuantity: 1, unit: POUNDS, name: 'hamburger'},
       {unitQuantity: 2, unit: UNITLESS, name: 'onions'},
       {packageQuantity: 1, package: 'cans', name: 'cream of chicken soup'},
       {packageQuantity: 1, package: 'cans', name: 'cream of mushroom soup'},
       {unitQuantity: 0.5, unit: CUPS, name: 'rice, uncooked'},
       {unitQuantity: 1.5, unit: CUPS, name: 'water'},
       {unitQuantity: 1, unit: TABLESPOONS, name: 'soy sauce'},
       {unitQuantity: 0.25, unit: TEASPOONS, name: 'black pepper'}
      ],
      'instructions': '1. Mix all ingredients.\n2. Bake at 350 for 30 min. covered, and an additional 30 min. uncovered.\n3. Sprinkle dried chow-mein noodles on top and serve.',
      'name': 'Hamburger Chow Mein'
    }, {
    'author': 'polleeashby',
    'ingredients': [
     {unitQuantity: 1.5, unit: CUPS, name: 'brown sugar'},
     {unitQuantity: 0.75, unit: CUPS, name: 'barbecue sauce'},
     {unitQuantity: 0.75, unit: CUPS, name: 'vinegar'},
     {unitQuantity: 3, unit: TEASPOONS, name: 'Worcestershire sauce'},
     {unitQuantity: 3, unit: TEASPOONS, name: 'prepared mustard'}
    ],
    'instructions': 'Blend thoroughly. Heat and pour over meat. For meatballs bake 30 min. for 350 deg. F. For chicken, bake 1 hour.',
    'name': 'Sweet and Sour Sauce'
  }, {
    'author': 'violet2flame',
    'ingredients': [
     {unitQuantity: 0.25, unit: CUPS, name: 'bacon, cooked and chopped'},
     {unitQuantity: 1, unit: POUNDS, name: 'Italian sausage, spicy'},
     {unitQuantity: 2, unit: TABLESPOONS, name: 'garlic'},
     {packageQuantity: 0.5, package: 'bunches', name: 'kale'},
     {unitQuantity: 1, unit: UNITLESS, name: 'onions'},
     {unitQuantity: 4, unit: UNITLESS, name: 'Russet potatoes'},
     {unitQuantity: 32, unit: OUNCES, name: 'chicken broth'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'cayenne pepper'},
     {unitQuantity: 2, unit: TABLESPOONS, name: 'flour'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'pepper'},
     {unitQuantity: 1, unit: CUPS, name: 'heavy whipping cream'}
    ],
    'instructions': '1. Brown sausage with garlic and onion.\n2. Mix in potatoes and broth. If necessary, add water until potatoes and meat are just barely covered.\n3. Simmer for 3-4 hours until potatoes are soft.\n4. 30 minutes before serving, mix flour into cream, removing lumps.\n5. Add cream and kale to crockpot and stir.\n6. Cook on high for 30 min. or until broth thickens slightly.\n7. Add salt, cayenne, and pepper to taste.\n8. Top with bacon immediately before serving.',
    'name': "Zupa's Toscana (Sausage Potato) Soup"
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 2, unit: CUPS, name: 'sugar'},
     {unitQuantity: 2, unit: CUPS, name: 'water'},
     {unitQuantity: 2, unit: CUPS, name: 'orange juice'},
     {unitQuantity: 2, unit: QUARTS, name: 'water'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'almond extract'},
     {unitQuantity: 0.75, unit: CUPS, name: 'lemon juice'},
     {unitQuantity: 2, unit: TEASPOONS, name: 'vanilla'}
    ],
    'instructions': '1. Simmer 2 c. sugar and 2 c. water for 5 minutes\n2. Add all remaining ingredients and simmer until hot.',
    'name': 'Russian Tea'
  }, {
    'author': 'breana',
    'ingredients': [
     {unitQuantity: 3, unit: TABLESPOONS, name: 'butter'},
     {unitQuantity: 3, unit: TABLESPOONS, name: 'flour'},
     {unitQuantity: 2, unit: CUPS, name: 'milk'},
     {packageQuantity: 1, package: 'to taste', name: 'salt'},
     {packageQuantity: 1, package: 'to taste', name: 'pepper'},
     {packageQuantity: 1, package: 'to taste', name: 'paprika'},
     {unitQuantity: 5, unit: UNITLESS, name: 'hard boiled eggs'},
     {unitQuantity: 1, unit: UNITLESS, name: 'toast'}
    ],
    'instructions': '1. Melt butter and stir with flour and milk until all thicken.\n2. Cut in hard boiled eggs. Add Salt, pepper, and paprika. Serve over toast.',
    'name': 'Creamed Eggs'
  }, {
    'author': 'neallred',
    'ingredients': [
     {packageQuantity: 1, package: 'loaved', name: 'French bread'},
     {unitQuantity: 4, unit: CUPS, name: 'milk'},
     {unitQuantity: 3, unit: UNITLESS, name: 'eggs, beaten'},
     {unitQuantity: 2, unit: CUPS, name: 'sugar'},
     {unitQuantity: 2, unit: TABLESPOONS, name: 'vanilla'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'cinnamon'},
     {unitQuantity: 3, unit: TABLESPOONS, name: 'butter'},
     {unitQuantity: 0.5, unit: CUPS, name: 'butter'},
     {unitQuantity: 1, unit: CUPS, name: 'sugar'},
     {unitQuantity: 1, unit: UNITLESS, name: 'eggs, beaten'},
     {unitQuantity: 0.25, unit: CUPS, name: 'Bourbon'},
     {unitQuantity: 1.25, unit: CUPS, name: 'light brown sugar'},
     {unitQuantity: 0.75, unit: CUPS, name: 'evaporated milk'},
     {unitQuantity: 1, unit: TABLESPOONS, name: 'butter'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'vanilla'},
     {unitQuantity: 0.25, unit: CUPS, name: 'pecans, chopped'}
    ],
    'instructions': '1. In a large bowl, break bread into bite-size pieces.\n2. Cover with milk and soak one hour.\n3. Mix well.\n4. Add eggs and sugar.\n5. Stir in vanilla, cinnamon.\n6. Melt butter and pour in baking dish, tilting to coat all sides.\n7. Pour in pudding and bake one hour.\nSAUCE:\n1. Melt butter and sugar.\n2. Gradually whisk in egg.\n3. Cool slightly.\n4. Add bourbon (optional).\nPRALINE SAUCE:\n1. In a small saucepan over low heat combine brown sugar, evaporated milk, and butter.\n2. Cook and stir praline sauce until sauce is smooth and syrupy, about 5 min.\n3. Stir in vanilla extract and pecans.\n4. Serve praline sauce warm over ice cream. (Makes about 1 1/4 c. of praline sauce)',
    'name': 'Bread Pudding'
  }, {
    'author': 'samashby',
    'ingredients': [
     {packageQuantity: 1, package: 'packages', name: 'lemon instant pudding'},
     {unitQuantity: 1, unit: TABLESPOONS, name: 'lemon juice'},
     {unitQuantity: 0.5, unit: CUPS, name: 'sugar'},
     {unitQuantity: 1.5, unit: CUPS, name: 'pineapple juice'},
     {unitQuantity: 8, unit: OUNCES, name: 'cool whip'}
    ],
    'instructions': '1. Mix all ingredients except cool whip together.\n2. Mix ingredient mixture into cool whip. Serve over fruit.',
    'name': 'Fruit Dip'
  }, {
    'author': 'neallred',
    'ingredients': [
     {unitQuantity: 0.25, unit: CUPS, name: 'butter'},
     {unitQuantity: 3, unit: CUPS, name: 'miniature marshmallows'},
     {unitQuantity: 6, unit: CUPS, name: 'rice krispies cereal'}
    ],
    'instructions': '1. Melt butter over low heat.\n2. Add marshmallows (1 10. oz pk regular marshmellows = 3 c. miniature marshmallows) and stir till all melted. Remove from heat.\n3. Stir in rice krispies cereal until all are coated. 4. Spray 12x9x2" pan and press mixture into it. Optionally, stir marshmallows in with nutella for a chocolate flavor.',
    'name': 'Rice Krispies'
  }, {
    'author': 'betty_crocker',
    'ingredients': [
     {unitQuantity: 4, unit: UNITLESS, name: 'egg yolks'},
     {unitQuantity: 0.25, unit: CUPS, name: 'sugar'},
     {unitQuantity: 1, unit: CUPS, name: 'heavy whipping cream'},
     {unitQuantity: 1, unit: CUPS, name: 'semisweet chocolate chips'},
     {unitQuantity: 1.5, unit: CUPS, name: 'heavy whipping cream'}
    ],
    'instructions': '1. Beat egg yolks in small bowl with electric mixer on high speed about 3 minutes or until thick and lemon colored. Gradually beat in sugar.\n2. Heat 1 cup whipping cream in 2-quart saucepan over medium heat until hot. Gradually stir at least half of the hot whipping cream into egg yolk mixture; stir back into hot cream in saucepan. Cook over low heat about 5 minutes, stirring constantly, until mixture thickens (do not boil). Stir in chocolate chips until melted. Cover and refrigerate about 2 hours, stirring occasionally, just until chilled.\n3. Beat 1 1/2 cups whipping cream in chilled medium bowl with electric mixer on high speed until stiff. Fold chocolate mixture into whipped cream. Pipe or spoon mixture into serving bowls. Immediately refrigerate any remaining dessert after serving.',
    'name': 'Chocolate Mousse'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 1, unit: POUNDS, name: 'ground beef'},
     {unitQuantity: 1, unit: TABLESPOONS, name: 'dried, minced onion'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'garlic salt'},
     {packageQuantity: 1, package: 'cans', name: 'tomato sauce'},
     {unitQuantity: 1, unit: CUPS, name: 'olives, chopped'},
     {unitQuantity: 2, unit: CUPS, name: 'Cheddar cheese, grated'},
     {unitQuantity: 1, unit: CUPS, name: 'sour cream'},
     {unitQuantity: 1, unit: CUPS, name: 'cottage cheese'},
     {packageQuantity: 1, package: '4 oz. cans', name: 'diced green chilies'},
     {packageQuantity: 1, package: '8 oz. packages', name: 'tortilla chips'}
    ],
    'instructions': 'Brown meat; drain and add garlic salt, tomato sauce, onions and olives.\n2. In a separate bowl, combine sour cream, cottage cheese (can substitute cream of mushroom soup) and green chilies.\n3. Layer half of chips, meat mixture, sour cream mixture and Cheddar cheese (can substitute Monterey Jack cheese).\n4. Repeat layers, ending with cheese.\n5. Cover and bake at 350 deg. F. for 35 min.',
    'name': 'El Dorado Beef and Cheese Casserole'
  }, {
    'author': 'kate_jones_n_sara_wells',
    'ingredients': [
     {unitQuantity: 0.5, unit: CUPS, name: 'Crisco'},
     {unitQuantity: 0.5, unit: CUPS, name: 'butter'},
     {unitQuantity: 1, unit: CUPS, name: 'brown sugar'},
     {unitQuantity: 1, unit: CUPS, name: 'white sugar'},
     {unitQuantity: 2, unit: UNITLESS, name: 'eggs'},
     {unitQuantity: 1.5, unit: TEASPOONS, name: 'vanilla'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'baking powder'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'baking soda'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 2.5, unit: CUPS, name: 'flour'},
     {unitQuantity: 6, unit: TABLESPOONS, name: 'unsweetened cocoa powder'},
     {packageQuantity: 1, package: '10 oz. bags', name: 'Cadbury Mini-Eggs'}
    ],
    'instructions': '1. Preheat oven to 350 deg. F.\n2. Crush Cadbury Eggs with rolling pin.\n3. Cream together the butter, crisco, brown sugar and white sugar.\n4. Add in eggs one at a time and the vanilla.\n5. Mix in flour, soda, baking powder, salt, and cocoa powder.\n6. Drop onto a cookie sheet and cook for about 8-10 minutes.',
    'name': 'Cadbury Egg Cookies'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 2, unit: QUARTS, name: 'apple juice'},
     {unitQuantity: 2.25, unit: CUPS, name: 'pineapple juice'},
     {unitQuantity: 1, unit: CUPS, name: 'lemon juice'},
     {unitQuantity: 2, unit: CUPS, name: 'orange juice'},
     {unitQuantity: 0.5, unit: CUPS, name: 'sugar'},
     {unitQuantity: 3, unit: UNITLESS, name: 'cinnamon sticks'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'whole cloves'}
    ],
    'instructions': '1. Combine all ingredients in a large kettle.\n2. Simmer, covered, for 30 minutes.\n3. Uncover the kettle and simmer for 30 minutes longer.\n4. Strain out the spices. Serve hot, and reheat as needed. Makes 24 servings.',
    'name': 'Wonderful Wassail'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 0.334, unit: CUPS, name: 'sugar'},
     {unitQuantity: 2, unit: UNITLESS, name: 'egg yolks'},
     {unitQuantity: 0.25, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 4, unit: CUPS, name: 'milk'},
     {unitQuantity: 0.5, unit: CUPS, name: 'whipping cream'},
     {unitQuantity: 2, unit: UNITLESS, name: 'egg whites'},
     {unitQuantity: 3, unit: TABLESPOONS, name: 'sugar'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'vanilla'},
     {packageQuantity: 1, package: 'to taste', name: 'brandy flavoring'},
     {unitQuantity: 1, unit: CUPS, name: 'ground nutmeg'}
    ],
    'instructions': "1. Beat 1/3 c. sugar into egg yolks.\n2. Add salt and milk.\n3. Cook over medium heat, stirring constantly, till mixture coats spoon. Cool.\n3. Beat egg whites till foamy.\n4. Gradually add 3 Tbsp. sugar, beating to soft peaks.\n5. Add to custard and mix thoroughly.\n6. Add vanilla and flavoring.\n7. Chill 3 or 4 hours. Dot with islands of whipped cream; dash with mutmeg. Serves 6 to 8. (The Ashby's like it warm better than chilled!)",
    'name': 'Eggnog'
  }, {
    'author': 'violet2flame',
    'ingredients': [
     {unitQuantity: 1, unit: CUPS, name: 'buttermilk'},
     {unitQuantity: 0.5, unit: CUPS, name: 'butter'},
     {unitQuantity: 2, unit: TABLESPOONS, name: 'corn syrup'},
     {unitQuantity: 1, unit: CUPS, name: 'sugar'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'baking soda'}
    ],
    'instructions': '1. Heat a saucepan to medium-high.\n2. Pour all ingredients in saucepan.\n3. Mix ingredients, watching carefully for when the syrup boils (it does so very quickly).\n4. Once boiling, remove from heat to prevent overflow and turn burner to 2-3 (of 10)\n5. Let simmer until desired brownness attained.',
    'name': 'Butter Syrup'
  }, {
    'author': 'theresachipman',
    'ingredients': [
     {unitQuantity: 1, unit: CUPS, name: 'onions, chopped'},
     {unitQuantity: 1, unit: CUPS, name: 'celery, diced'},
     {unitQuantity: 2, unit: CUPS, name: 'carrots, chopped'},
     {unitQuantity: 5, unit: CUPS, name: 'potatoes, chopped'},
     {unitQuantity: 0.75, unit: CUPS, name: 'butter'},
     {unitQuantity: 0.75, unit: CUPS, name: 'flour'},
     {unitQuantity: 1, unit: QUARTS, name: 'half and half'},
     {unitQuantity: 1.5, unit: TEASPOONS, name: 'salt'},
     {packageQuantity: 1, package: 'dashes', name: 'pepper'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'sugar'}
    ],
    'instructions': '1. Cover vegetables with water, simmer 20 min.\n2. Melt butter, add flour and mix well.\n3. Add half and half and cook until thick.\n4. Stir in veggies with water.',
    'name': 'Boston Potato Chowder'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 4, unit: CUPS, name: 'flour'},
     {unitQuantity: 1, unit: TABLESPOONS, name: 'baking powder'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 0.25, unit: CUPS, name: 'powdered milk'},
     {unitQuantity: 1, unit: UNITLESS, name: 'water'}
    ],
    'instructions': '1. Mix dry ingredients.\n2. Add enough water for a dough consistency.\n3. Knead 10 min.\n4. Cook in hot oil.',
    'name': 'Navajo Fry Bread'
  }, {
    'author': 'renee',
    'ingredients': [
     {packageQuantity: 1, package: 'packages', name: 'salami'},
     {unitQuantity: 8, unit: OUNCES, name: 'cream cheese'},
     {packageQuantity: 1, package: 'jars', name: 'pepperocini peppers'}
    ],
    'instructions': '1. Spread small amount of cream cheese on each piece of salami.\n2. Add small strip of peppers.\n3. Roll up and stick in toothpick to keep rolled.',
    'name': "Renee's Salami Roll-ups"
  }, {
    'author': 'mabelpickupashby',
    'ingredients': [
     {unitQuantity: 1, unit: CUPS, name: 'shortening, melted'},
     {unitQuantity: 1, unit: CUPS, name: 'melted honey'},
     {unitQuantity: 1, unit: CUPS, name: 'boiling water'},
     {unitQuantity: 1, unit: CUPS, name: 'sugar'},
     {unitQuantity: 4.5, unit: CUPS, name: 'white flour'},
     {unitQuantity: 2, unit: TEASPOONS, name: 'baking soda'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'ginger'}
    ],
    'instructions': '1. Dissolve sugar in water.\n 2. Sift dry ingredients.\n3. Gradually add to the liquid mixture.\n4. Stir until smooth.\n5. Let sit for 2 hours or overnight in refrigerator.\n6. Roll into balls and press with fork. Bake 10-12 min. at 350 deg. F.',
    'name': 'Honey Ginger Cookies'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 1, unit: POUNDS, name: 'ground beef'},
     {unitQuantity: 1, unit: UNITLESS, name: 'medium onions, finely chopped'},
     {unitQuantity: 1, unit: UNITLESS, name: 'garlic cloves, minced'},
     {packageQuantity: 1, package: '16 oz. cans', name: 'refried beans'},
     {packageQuantity: 1, package: '4 oz. cans', name: 'diced green chilies'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'cumin'},
     {unitQuantity: 1, unit: CUPS, name: 'Cheddar cheese, grated'},
     {packageQuantity: 1, package: 'packages', name: 'tortilla chips'},
     {unitQuantity: 1, unit: UNITLESS, name: 'black olives, sliced'},
     {unitQuantity: 1, unit: UNITLESS, name: 'sour cream'},
     {unitQuantity: 1, unit: UNITLESS, name: 'tomatoes, diced'},
     {unitQuantity: 1, unit: UNITLESS, name: 'jalapeno peppers, chopped'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'chili powder'},
     {unitQuantity: 1, unit: CUPS, name: 'Monterey Jack cheese'}
    ],
    'instructions': '1. In microwave safe bowl, combine beef, onion, and garlic. Cook on high for 4 minutes; drain.\n2. Add beans, tomatoes, chilies, jalapeno and seasonings; mix thoroughly and sprinkle with cheese.\n3. Cook 2-3 minutes or until cheese melts.\n4. Top with sour cream and olives. Serve with chips.',
    'name': 'Gourmet Nachos'
  }, {
    'author': 'samashby',
    'ingredients': [
     {packageQuantity: 5, package: 'packages', name: 'vanilla pudding'},
     {unitQuantity: 1, unit: GALLONS, name: 'milk'},
     {unitQuantity: 12, unit: UNITLESS, name: 'eggs, beaten'},
     {unitQuantity: 0.25, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'nutmeg'},
     {unitQuantity: 0.5, unit: CUPS, name: 'sugar'},
     {unitQuantity: 3, unit: TEASPOONS, name: 'vanilla'},
     {packageQuantity: 1, package: 'to taste', name: 'rum extract'}
    ],
    'instructions': '1. Cook pudding with milk as directed on package, then add rest of milk.\n2. Beat eggs with beater and add rest of ingredients. Refrigerate overnight. Makes 1 1/2 gal.',
    'name': 'Rich Eggnog'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 1, unit: CUPS, name: 'flour'},
     {unitQuantity: 6, unit: UNITLESS, name: 'eggs'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'vanilla'},
     {unitQuantity: 1, unit: CUPS, name: 'milk'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 6, unit: TABLESPOONS, name: 'butter'}
    ],
    'instructions': '1. Melt butter in 8X13 cake pan while oven in preheating.\n2. Beat remaining ingredients until smooth. Pour in pan.\n3. Bake at 400 deg. F. for 20-25 minutes.\n 4. Sprinkle with powdered sugar and serve with maple syrup.',
    'name': 'German Pancakes'
  }, {
    'author': 'neallred',
    'ingredients': [
     {unitQuantity: 9, unit: CUPS, name: 'rice chex'},
     {unitQuantity: 0.5, unit: CUPS, name: 'peanut butter'},
     {unitQuantity: 1, unit: CUPS, name: 'chocolate chips'},
     {unitQuantity: 1.5, unit: CUPS, name: 'powdered sugar'}
    ],
    'instructions': '1. Melt chocolate chips over low heat in saucepan.\n2. Mix in peanut butter.\n3. Mix in rice krispy squares.\n4. Pour powdered sugar in plastic bag. Spoon/dump chocolate/peanut butter covered krispies into bag. Close bag and shake.',
    'name': 'Puppy Chow'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 1, unit: POUNDS, name: 'ground beef'},
     {unitQuantity: 0.5, unit: CUPS, name: 'prepared barbecue sauce'},
     {unitQuantity: 1, unit: TABLESPOONS, name: 'instant minced onions'},
     {unitQuantity: 1.5, unit: TABLESPOONS, name: 'brown sugar'},
     {packageQuantity: 1, package: '10 oz. cans', name: 'Hungry Jack Biscuits'},
     {unitQuantity: 0.5, unit: CUPS, name: 'Cheddar cheese, shredded'}
    ],
    'instructions': '1. Heat oven to 400 deg. F. Grease 10 muffin cups.\n2. Brown ground beef in large skillet, drain.\n3. Stir in barbecue sauce, onion (1 Tbsp. instant minced onions = 1/4 c. chopped onions) and brown sugar. Cook 1 minute to blend flavors, stirring constantly.\n4. Separate dough into 10 biscuits. Place 1 biscuit in each greased muffin cup, firmly press in bottom and up sides, forming 1/4 inch rim. Spoon about 1/4 c. meat mixture into each biscuit-lined cup. Sprinkle with cheese.\n5. Bake for 10-12 min. or until edges of biscuits are golden brown.',
    'name': 'Hungry Jack Biscuit Barbecups'
  }, {
    'author': 'faytruman',
    'ingredients': [
     {unitQuantity: 3, unit: UNITLESS, name: 'skinless, boneless chicken breasts'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'olive oil'},
     {unitQuantity: 1, unit: CUPS, name: 'onions, chopped'},
     {unitQuantity: 1, unit: TABLESPOONS, name: 'bottled minced garlic'},
     {packageQuantity: 1, package: '15 oz. cans', name: 'Great Northern white beans'},
     {packageQuantity: 1, package: '19 oz. cans', name: 'Cannellini beans'},
      {packageQuantity: 1, package: '4 1/2 oz. cans', name: 'chopped green chilies'},
     {unitQuantity: 1.5, unit: TEASPOONS, name: 'ground cumin'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'white pepper'},
     {unitQuantity: 0.125, unit: TEASPOONS, name: 'cayenne pepper'},
      {packageQuantity: 1, package: '14 1/2 oz. cans', name: 'fat-free chicken broth'},
     {unitQuantity: 2, unit: TABLESPOONS, name: 'cornstarch'},
     {unitQuantity: 2, unit: TABLESPOONS, name: 'water'},
     {unitQuantity: 0.5, unit: CUPS, name: 'Monterey Jack cheese'},
     {unitQuantity: 0.25, unit: CUPS, name: 'reduced-fat sour cream'}
    ],
    'instructions': '1. Heat oil on medium in 4 1/2 qt. Dutch oven or soup pot.\n2. Peel and coarsely chop onion, adding to pot as chopped. Stir occasionally to prevent sticking.\n3. Cut chicken in bite size chunks, add to pot and stir occasionally.\n4. Add garlic and continue to cook.\n5. Rinse and drain beans and chilies and add to pot along with cumin, white pepper and cayenne.\n6. Raise heat to high and add broth and drained beans.\n7. Cover and cook to boil.\n8. Meanwhile, combine cornstarch and water in a small container that has a lid. Shake well.\n9. When chili boils, the chicken should be cooked through. Add cornstarch mixture a little at a time, stirring constantly.\n10. Continue to boil until the chili reaches the desired thickness.\n11. Garnish with cheese and sour cream if desired.',
    'name': 'White Bean and Chicken Chili'
  }, {
    'author': 'violet2flame',
    'ingredients': [
     {packageQuantity: 1, package: 'cans', name: 'frozen orange juice concentrate'},
     {unitQuantity: 0.5, unit: CUPS, name: 'sugar'},
     {unitQuantity: 0.5, unit: CUPS, name: 'milk'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'vanilla'},
     {unitQuantity: 1.5, unit: CUPS, name: 'water'},
     {packageQuantity: 1, package: 'trays', name: 'ice cubes'}
    ],
    'instructions': 'Blend all ingredients until frothy. Serve immediately.',
    'name': 'Orange Julius'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 2, unit: CUPS, name: 'brown sugar'},
     {unitQuantity: 1.5, unit: CUPS, name: 'white sugar'},
     {unitQuantity: 2, unit: CUPS, name: 'shortening'},
     {unitQuantity: 4, unit: UNITLESS, name: 'eggs'},
     {unitQuantity: 4, unit: CUPS, name: 'flour'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 4, unit: TEASPOONS, name: 'baking soda'},
     {unitQuantity: 2, unit: CUPS, name: 'oatmeal'}
    ],
    'instructions': '1. Cream shortening and sugars; blend in eggs and peanut butter.\n2. Fold in salt, soda, and flour\n3. Roll into medium-size balls.\n4. Place on ungreased baking sheet; mash with fork dipped in water.\n5. Bake at 350 deg. F. about 7 min.',
    'name': 'Peanut Butter Cookies'
  }, {
    'author': 'violet2flame',
    'ingredients': [
     {unitQuantity: 0.25, unit: CUPS, name: 'butter, softened'},
     {unitQuantity: 1, unit: UNITLESS, name: 'apples, grated'},
     {unitQuantity: 0.667, unit: CUPS, name: 'brown sugar'},
     {unitQuantity: 0.334, unit: CUPS, name: 'sugar'},
     {unitQuantity: 2, unit: UNITLESS, name: 'eggs, beaten'},
     {unitQuantity: 0.5, unit: CUPS, name: 'milk'},
     {unitQuantity: 2, unit: CUPS, name: 'flour'},
     {unitQuantity: 2, unit: TEASPOONS, name: 'baking powder'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'cinnamon'},
     {unitQuantity: 0.25, unit: TEASPOONS, name: 'nutmeg'},
     {unitQuantity: 2, unit: CUPS, name: 'fresh blueberries'},
     {unitQuantity: 2, unit: TABLESPOONS, name: 'sugar'},
     {unitQuantity: 2, unit: TABLESPOONS, name: 'butter'},
     {unitQuantity: 1, unit: UNITLESS, name: 'cinnamon'},
     {unitQuantity: 1, unit: UNITLESS, name: 'nutmeg'},
     {unitQuantity: 1, unit: UNITLESS, name: 'oats'}
    ],
    'instructions': '1. Cream butter, grated apple, and brown and white sugar.\n2. Add eggs.\n3. Add milk.\n4. Mix in flour, baking powder, salt, cinnamon, and nutmeg.\n5. Mix in fresh blueberries and pour into muffin tin.\n6. Mix struesel ingredients, pour on muffins.\n7. Bake 375 deg. F. for 20 minutes, or 35 minutes if in cake form.',
    'name': 'Blueberry Muffins'
  }, {
    'author': 'breananorton',
    'ingredients': [
     {unitQuantity: 0.5, unit: CUPS, name: 'whipping cream'},
     {unitQuantity: 0.5, unit: CUPS, name: 'white corn syrup'},
     {unitQuantity: 0.5, unit: CUPS, name: 'sugar'},
     {unitQuantity: 1, unit: UNITLESS, name: 'vanilla'}
    ],
    'instructions': '1. Bring all ingredients to a boil. Cool.',
    'name': 'White Syrup'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 1, unit: CUPS, name: 'warm water'},
     {unitQuantity: 1, unit: TABLESPOONS, name: 'yeast'},
     {unitQuantity: 1.5, unit: CUPS, name: 'flour'},
     {unitQuantity: 2, unit: TABLESPOONS, name: 'butter'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 4, unit: TABLESPOONS, name: 'sugar'},
     {unitQuantity: 4, unit: CUPS, name: 'warm water'},
     {unitQuantity: 5, unit: TEASPOONS, name: 'baking soda'},
     {unitQuantity: 1, unit: UNITLESS, name: 'coarse salt'}
    ],
    'instructions': '1. In a large mixing bowl, combine warm water and yeast. Let proof.\n2. Mix in 1/4 c. flour, butter, salt, and sugar. Beat entire mixture for 3 minutes.\n3. Slowly mix in remaining 1 1/4 c. flour and knead until dough loses its stickiness.\n4. Divide the dough into 6 equal parts. Let rise for 10-15 minutes.\n5. Preheat oven to 425 deg. F. Using palms, roll each piece into 30" lengths, about index finger thickness. Loop and twist the lengths into pretzel shapes & place on cookie sheet after dipping in mixture of 4 c. warm water and 5 tsp. baking soda.\n6.Let rise 10 min. Bake for 10-12 min. Brush on melted butter and sprinkle with coarse salt. (If desired, may use cinnamon sugar instead of salt).',
    'name': 'Soft Pretzels'
  }, {
    'author': 'neallred',
    'ingredients': [
      {packageQuantity: 2, package: '1/4 oz. packages', name: 'active dry yeast'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'sugar'},
     {unitQuantity: 2, unit: TABLESPOONS, name: 'sugar'},
     {unitQuantity: 0.5, unit: CUPS, name: 'warm water'},
     {packageQuantity: 1, package: '10.75 oz. cans', name: 'condensed cream of potato soup, undiluted'},
     {unitQuantity: 1, unit: CUPS, name: 'hot water'},
     {unitQuantity: 0.5, unit: CUPS, name: 'nonfat dry milk powder'},
     {unitQuantity: 0.5, unit: CUPS, name: 'sour cream'},
     {unitQuantity: 0.5, unit: CUPS, name: 'minced chives'},
     {unitQuantity: 2, unit: TABLESPOONS, name: 'butter, melted'},
     {unitQuantity: 2, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'dried tarragon, crushed'},
     {unitQuantity: 6.5, unit: CUPS, name: 'all-purpose flour'}
    ],
    'instructions': '1. In a large bowl, dissolve yeast and 1 tsp. sugar in warm water. Let stand for 5 min.\n2. Add soup, hot water, milk powder, sour cream, chives, butter, salt, tarragon, remaining sugar and 5 c. flour. Beat until smooth.\n3. Stir in enough remaining flour to form a stiff dough.\n4. Turn onto a floured surface; knead until smooth and elastic, about 6-8 min.\n5. Place in a greased bowl, turning once to grease the top. Cover and let rise in a warm place until doubled, about 1 hour.\n6. Punch dough down. Divide in half. Shape in two loaves and place in greased 9-in. x 5-in. loaf pans. Cover and let rise until doubled, about 30 min.\n7. Bake at 400 deg F for 30 min. or until golden. Makes 2 loaves (16 slices each).',
    'name': 'Potato Herb Bread Recipe'
  }, {
    'author': 'billgibson',
    'ingredients': [
     {unitQuantity: 1, unit: UNITLESS, name: 'large brisquit cut meat'},
     {unitQuantity: 1, unit: UNITLESS, name: 'lemon pepper'},
     {unitQuantity: 1, unit: UNITLESS, name: 'garlic powder'},
     {unitQuantity: 1, unit: UNITLESS, name: 'garlic salt'},
     {unitQuantity: 1, unit: UNITLESS, name: 'seasoning salt'}
    ],
    'instructions': '1. Rub mixture into meat. Wrap in foil. Bake several hours in 250 deg. F. oven.',
    'name': 'Texas Brisket'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 1, unit: CUPS, name: 'oil'},
     {unitQuantity: 1, unit: CUPS, name: 'soy sauce'},
     {unitQuantity: 2, unit: CUPS, name: 'Sprite'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'Worcestershire sauce'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'garlic powder'},
     {unitQuantity: 3, unit: TABLESPOONS, name: 'lemon juice'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'horseradish sauce'}
    ],
    'instructions': '1. Mix all ingredients. Soak boneless chicken or turkey (not frozen) overnight. Grill.',
    'name': 'Turkey or Chicken Marinate'
  }, {
    'author': 'violet2flame',
    'ingredients': [
     {packageQuantity: 2, package: '12 oz. cans', name: 'evaporated milk'},
     {unitQuantity: 1, unit: CUPS, name: 'water'},
     {unitQuantity: 0.125, unit: TEASPOONS, name: 'cayenne pepper'},
     {unitQuantity: 1.25, unit: TEASPOONS, name: 'vanilla'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'cinnamon'},
     {unitQuantity: 0.125, unit: TEASPOONS, name: 'cinnamon'},
     {unitQuantity: 1.5, unit: CUPS, name: 'semisweet chocolate chips'}
    ],
    'instructions': '1. Pour 1/2 c. evaporated milk into medium mixer bowl; place beaters into bowl.\n2. Freeze for about 30 min. or until ice crystals form around edge of bowl.\n3. Heat remaining evaporated milk, water, chocolate chips, 1 tsp. vanilla, 1/2 tsp. cinnamon and pinch cayenne pepper in medium saucepan over low heat, stirring frequently, until chocolate is melted. Do not boil. Set aside.\n4. Remove chilled evaporated milk from freezer. Beat on high speed for 1 minute or until very frothy. Add 1/4 tsp. vanilla, 1/8 tsp. cinnamon and pinch cayenne pepper.\n5. Continue beating for 3 to 4 minutes, until mixture forms soft peaks.\n6. Pour hot chocolate into 8 4 oz. cups and immediately dollop with foam topping. Enjoy! =D',
    'name': 'Mexican Hot Chocolate'
  }, {
    'author': 'samashby',
    'ingredients': [
      {packageQuantity: 1, package: '14 1/2 oz. cans', name: 'evaporated milk'},
     {unitQuantity: 2, unit: CUPS, name: 'cream'},
     {unitQuantity: 4, unit: CUPS, name: 'sugar'},
     {unitQuantity: 1.5, unit: TEASPOONS, name: 'lemon extract'},
     {unitQuantity: 1, unit: CUPS, name: 'lemon juice'},
     {unitQuantity: 1, unit: UNITLESS, name: 'whole milk'}
    ],
    'instructions': "1. Mix all ingredients well and pour into canister. (whole milk should be poured last and until it reaches the fill line). \n2. Freeze according to manufacturer's directions.\n3. It is best to freeze this recipe 2-3 hours in advance and allow to ripen before serving. Makes about 5 quarts.",
    'name': 'Luscious Lemon Ice Cream'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 1.25, unit: CUPS, name: 'flour'},
     {unitQuantity: 0.75, unit: CUPS, name: 'oat bran'},
     {unitQuantity: 0.334, unit: CUPS, name: 'brown sugar'},
     {unitQuantity: 1, unit: TABLESPOONS, name: 'baking powder'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'cinnamon'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 1, unit: UNITLESS, name: 'eggs'},
     {unitQuantity: 0.334, unit: CUPS, name: 'canola oil'},
     {unitQuantity: 0.75, unit: CUPS, name: 'milk'}
    ],
    'instructions': '1. Combine all dry ingredients in large bowl.\n2. Beat all wet ingredients together.\n3. Mix wet ingredients into dry until just combined.\n4. Line muffin tin wiht wrapperrs or spray with non-stick coating. Bake at 400 deg. F. for 18 min.\nBLUEBERRY VARIATION:\n1. Fold in 1 c. frozen blueberries and 1 tsp. lemon zest before baking.\nZUCCHINI VARIATION:\n1. Fold in 1 c. shredded zucchini and 1/2 c. raisins and/or walnuts before baking.\nCARROT VARIATION:\n1. Add 1/2 tsp. nutmeg to dry ingredients. Fold in 1 c. shredded carrot and 1/2 c. raisins and/or walnuts before baking.\nCRANBERRY ORANGE VARIATION:\n1. Substitute orange juice for milk in recipe. Fold in 3/4 c. of dried cranberries and 1 tsp. orange zest before baking.\nBANANA NUT VARIATION:\n1. Decrease oil to 1/4 c. Fold in 1 c. mashed bananas and 1/2 c. walnuts before baking.',
    'name': 'Basic Oat Bran Muffin'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 1, unit: CUPS, name: 'white sugar'},
     {unitQuantity: 1, unit: CUPS, name: 'brown sugar'},
     {unitQuantity: 3, unit: UNITLESS, name: 'eggs'},
     {unitQuantity: 1, unit: CUPS, name: 'vegetable oil'},
     {unitQuantity: 2, unit: CUPS, name: 'zucchini, grated'},
     {unitQuantity: 3, unit: TEASPOONS, name: 'vanilla'},
     {unitQuantity: 3, unit: CUPS, name: 'flour'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'baking soda'},
     {unitQuantity: 3, unit: TEASPOONS, name: 'cinnamon'},
     {unitQuantity: 0.25, unit: TEASPOONS, name: 'baking powder'},
     {unitQuantity: 0.5, unit: CUPS, name: 'nuts'}
    ],
    'instructions': '1. Combine sugar, eggs, and oil.\n2. Add zucchini and vanilla.\n3. Mix in flour, salt, baking soda and powder, and cinnamon and nuts (if desired).\n4. Pour into greased and floured bread pan and bake at 325 deg. F. for 1 hour.',
    'name': 'Zucchini Bread'
  }, {
    'author': 'peggywhitehead',
    'ingredients': [
     {unitQuantity: 4, unit: CUPS, name: 'warm water'},
     {unitQuantity: 0.667, unit: CUPS, name: 'honey'},
     {unitQuantity: 4, unit: TABLESPOONS, name: 'yeast'},
     {unitQuantity: 0.667, unit: CUPS, name: 'oil'},
     {unitQuantity: 4, unit: UNITLESS, name: 'eggs'},
     {unitQuantity: 5, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 10, unit: CUPS, name: 'Lehi flour'}
    ],
    'instructions': '1. Mix water, honey (can substitute sugar), yeast, oil, eggs, and salt.\n2. Add flour.\n3. Let raise to double.\n4. Roll into rolls (40-50 rolls on large cookie sheet and one loaf of bread) or makes 4 loaves of bread.\n Bake at 350 deg. F. for 15-20 min. for rolls, or 30-35 min. for bread.\nnote: if making bread, use 12 c. flour instead of 10 c.',
    'name': "Peggy's Rolls"
  }, {
    'author': 'violet2flame',
    'ingredients': [
     {unitQuantity: 18, unit: OUNCES, name: 'triple chocolate cookie dough'},
     {unitQuantity: 8, unit: OUNCES, name: 'milk chocolate toffee bits'},
     {unitQuantity: 9.5, unit: OUNCES, name: 'Dove dark chocolate candies'},
     {packageQuantity: 3, package: '8 oz. packages', name: 'cream cheese'},
     {packageQuantity: 1, package: '14 oz. cans', name: 'sweetened condensed milk'},
     {unitQuantity: 0.75, unit: CUPS, name: 'vanilla yogurt'},
     {unitQuantity: 4, unit: UNITLESS, name: 'eggs, beaten'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'vanilla'},
     {unitQuantity: 1, unit: UNITLESS, name: 'whipped cream'}
    ],
    'instructions': '1. Press dough into ungreased 9x13 pan. Set aside 2 Tbsp. toffee bits for garnish, and sprinkle the rest over dough.\n2. Melt candies in microwave and stir until smooth. Mix in cream cheese, milk and yogurt until smooth. Add eggs and mix until just combined. Pour over crust.\n3. Bake at 350 deg. F. for 40-45 minutes or until middle almost set. Refrigerate for 4+ hours. Garnish with whipped cream and toffee bits.',
    'name': 'Chocolate Cheesecake'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 2, unit: POUNDS, name: 'stew meat'},
     {unitQuantity: 4, unit: UNITLESS, name: 'carrots'},
     {unitQuantity: 1, unit: UNITLESS, name: 'salt'},
     {unitQuantity: 1, unit: UNITLESS, name: 'pepper'},
     {packageQuantity: 1, package: 'cans', name: 'cream of celery soup'},
     {packageQuantity: 1, package: 'packages', name: 'onion soup mix'},
     {unitQuantity: 6, unit: UNITLESS, name: 'potatoes'},
     {unitQuantity: 1.5, unit: CUPS, name: 'water'}
    ],
    'instructions': '1. Place meat in heavy casserole. Sprinkle onion soup mix (can substitute cream of mushroom) and salt and pepper. Add potatoes and carrots.\n2. Combine celery soup and water. Pour over meat and vegetables.\n3. Cover and bake at 300 deg. F. for 5 hours or 250 deg. F. for 6-7 hours.\nIt turns out well in a crock pot-cook on high for 4-5 hours and on low for 7-8 hours. Also consider adding 1 can of tomato sauce with the soup and water.',
    'name': 'Easy Oven Stew'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 6, unit: CUPS, name: 'chicken breasts'},
     {packageQuantity: 1, package: 'cans', name: 'chicken broth'},
     {packageQuantity: 1, package: 'cans', name: 'cream of chicken soup'},
     {unitQuantity: 8, unit: OUNCES, name: 'cream cheese'},
     {packageQuantity: 1, package: 'packages', name: 'Italian salad dressing mix'}
    ],
    'instructions': '1. Cook chicken in crock pot.\n2. One hour before serving, shred chicken and remove fat from bottom of pot. Add remaining ingredients. Serve over pasta.',
    'name': 'Crock Pot Chicken and Pasta'
  }, {
    'author': 'barbaraalldredge',
    'ingredients': [
    {unitQuantity: 1, unit: UNITLESS, name: 'asparagus'},
    {unitQuantity: 1, unit: UNITLESS, name: 'cooking spray'},
    {packageQuantity: 1, package: 'to taste', name: 'salt'},
    {packageQuantity: 1, package: 'to taste', name: 'pepper'},
    {unitQuantity: 2, unit: TABLESPOONS, name: 'butter, melted'},
    {unitQuantity: 1, unit: TABLESPOONS, name: 'soy sauce'},
    {unitQuantity: 1, unit: TEASPOONS, name: 'balsamic vinegar'}
    ],
    'instructions': '1. Lay asparagus on tray, spray with cooking spray and salt and pepper to taste.\n2. Bake for 12 min at 400 deg. F.\n3. After baked (not before!), mix butter sauce ingredients and drizzle over asparagus. Serve immediately.',
    'name': 'Baked Asparagus'
  }, {
    'author': 'samashby',
    'ingredients': [
    {unitQuantity: 1, unit: CUPS, name: 'water'},
    {unitQuantity: 0.5, unit: CUPS, name: 'butter'},
    {unitQuantity: 0.25, unit: TEASPOONS, name: 'salt'},
    {unitQuantity: 4, unit: UNITLESS, name: 'eggs'},
    {unitQuantity: 1, unit: CUPS, name: 'flour'},
    {unitQuantity: 3, unit: CUPS, name: 'milk'},
    {packageQuantity: 2, package: 'small packages', name: 'instant vanilla pudding'},
    {unitQuantity: 8, unit: OUNCES, name: 'cream cheese'}
    ],
    'instructions': 'CRUST:\n 1.Warm cream cheese to room temperature.  \n2. Boil water, butter and salt. Add flour, remove from heat and cool slightly.\n3. Add eggs one at a time. Beat.\n4. Spray jelly roll pan, spread crust in pan.\n5. Bake at 400 deg. F. for 15 min. Cool slightly and flatten crust with hand. Cool Completely.\nFILLING:\n1. Mix milk, instant vanilla pudding, and cream cheese.\n2. Spreat on crust and top with 12 oz. cool whip. Drizzle with chocolate syrup.',
    'name': 'Chocolate Eclair Dessert'
  }, {
    'author': 'anikaashby',
    'ingredients': [
     {unitQuantity: 0.5, unit: CUPS, name: 'butter'},
     {unitQuantity: 1.5, unit: CUPS, name: 'brown sugar'},
     {unitQuantity: 2.5, unit: CUPS, name: 'flour'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 1.334, unit: CUPS, name: 'mashed bananas'},
     {unitQuantity: 0.25, unit: CUPS, name: 'milk'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'vanilla'},
     {unitQuantity: 3, unit: UNITLESS, name: 'eggs'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'baking powder'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'baking soda'}
    ],
    'instructions': '1. Blend all, grease and flour pan.\n2. Bake at 375 deg. F. for 40 minutes. Cool 10 minutes.\nnote: 1 1/3 c. mashed bananas about equals 3 large bananas',
    'name': 'Banana Bread'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 1, unit: TABLESPOONS, name: 'yeast'},
     {unitQuantity: 2, unit: TABLESPOONS, name: 'sugar'},
     {unitQuantity: 1.5, unit: CUPS, name: 'warm water'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 3, unit: CUPS, name: 'flour'},
     {unitQuantity: 1, unit: UNITLESS, name: 'garlic salt'},
     {unitQuantity: 1, unit: UNITLESS, name: 'Parmesan cheese'},
     {unitQuantity: 0.5, unit: CUPS, name: 'butter, melted'}
    ],
    'instructions': '1. Dissolve yeast and sugar in warm water.\n2. Add salt and flour.\n3. Mix and knead 5-6 min. Let sit 10 min.\n4. Pinch dough and roll into sticks.\n5. Put sticks in melted butter on cookie sheets, and sprinkle sticks with garlic salt and Parmesan cheese.\n6. Let rise 15-20 min and bake at 350 for 20 min.',
    'name': 'Breadsticks'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 1.5, unit: CUPS, name: 'sugar'},
     {unitQuantity: 6, unit: TABLESPOONS, name: 'shortening'},
     {unitQuantity: 2, unit: UNITLESS, name: 'eggs'},
     {unitQuantity: 1, unit: UNITLESS, name: 'lemon, zested and juiced'},
     {unitQuantity: 0.5, unit: CUPS, name: 'milk'},
     {unitQuantity: 1.5, unit: CUPS, name: 'flour'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'baking powder'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'salt'}
    ],
    'instructions': '1. Blend 1 cup sugar, shortening and eggs. Mix in lemon rind and milk.\n2. Add dry ingredients.\n3. Bake at 350 deg. F. for 1 hour\n4. Combine remaining sugar and lemon juice and pour over bread.',
    'name': 'Lemon Bread'
  }, {
    'author': 'samashby',
    'ingredients': [
     {packageQuantity: 1, package: '15 oz. cans', name: 'refried beans'},
     {packageQuantity: 1, package: 'to taste', name: 'salt'},
     {packageQuantity: 1, package: 'to taste', name: 'pepper'},
     {packageQuantity: 1, package: 'to taste', name: 'garlic'},
     {packageQuantity: 1, package: 'to taste', name: 'Mexican seasoning'},
     {unitQuantity: 3, unit: UNITLESS, name: 'medium advocadoes'},
     {unitQuantity: 2, unit: TABLESPOONS, name: 'lemon juice'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 0.25, unit: TEASPOONS, name: 'pepper'},
     {unitQuantity: 1, unit: CUPS, name: 'sour cream'},
     {packageQuantity: 0.5, package: 'packages', name: 'taco seasoning'},
     {unitQuantity: 0.5, unit: CUPS, name: 'mayonnaise'},
     {unitQuantity: 8, unit: OUNCES, name: 'Cheddar cheese, grated'},
     {unitQuantity: 3, unit: UNITLESS, name: 'tomatoes, diced & drained'},
     {packageQuantity: 0.5, package: 'bunches', name: 'green onions, chopped'},
     {unitQuantity: 1, unit: UNITLESS, name: 'sliced olives'}
    ],
    'instructions': 'FIRST LAYER:\n1. Mix refried beans with salt, pepper, garlic, and/or Mexican seasoning. Pour in 9X13 pan.\nSECOND LAYER:\n1. Blend advocadoes, lemon juice, salt, and pepper, and put on beans\nTHIRD LAYER:\n1. Mix sour cream, taco seasoning, and mayo and put on advocado layer\nFOURTH LAYER:\n1. Layer on grated Cheddar cheese.\nFIFTH LAYER:\n1. Layer on diced, drained tomatoes\nSIXTH LAYER:\n1. Layer on bunch chopped gren onions.\nSEVENTH LAYER:\n1. Layer on sliced olives.',
    'name': 'Seven Layer Dip (with guacamole)'
  }, {
    'author': 'breananorton',
    'ingredients': [
     {unitQuantity: 12, unit: UNITLESS, name: 'lasagna noodles'},
     {unitQuantity: 4, unit: CUPS, name: 'leaf spinach'},
     {unitQuantity: 2, unit: CUPS, name: 'Ricotta cheese'},
     {unitQuantity: 1, unit: CUPS, name: 'Mozzarella, grated'},
     {unitQuantity: 0.5, unit: CUPS, name: 'Ranch dressing'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 0.334, unit: TEASPOONS, name: 'pepper'},
     {unitQuantity: 0.25, unit: TEASPOONS, name: 'nutmeg'},
     {packageQuantity: 1, package: '26. oz. jars', name: 'pasta sauce'}
    ],
    'instructions': '1. Cook lasagna noodles.\n2. Mix spinach, cheese, 1/4 c. Ranch and seasonings.\n3. Set 1/2 c. pasta sauce aside, pour remaining sauce into greased dish.\n4. Spread 2-3 Tbsp. of cheese mixture on each noodle and roll up. Place flowers curly side up in dish.\n5. Mix remaining Ranch with pasta sauce.\n6. Drizzle over each flower.\n6. Cover and bake for 30 min. in 350 deg. F. oven until heated through.',
    'name': "Bloomin' Lasagna"
  }, {
    'author': 'samashby',
    'ingredients': [
     {packageQuantity: 1, package: 'packages', name: 'white cake mix'},
     {packageQuantity: 1, package: 'cubes', name: 'butter'},
     {unitQuantity: 3, unit: CUPS, name: 'pumpkin'},
     {unitQuantity: 1.5, unit: CUPS, name: 'sugar'},
     {unitQuantity: 2, unit: UNITLESS, name: 'eggs, beaten'},
     {packageQuantity: 1, package: 'tall cans', name: 'evaporated milk'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 1.25, unit: TEASPOONS, name: 'cinnamon'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'cloves'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'ginger'}
    ],
    'instructions': '1. Mix cake mix and cube of butter. Pour 1/2 white cake mix (can substitute yellow cake mix for white cake mix) into greased 9x13 pan.\n2. Mix remaining ingredients together and pour over cake mix in 9x13.\n3. Pour remaining cake mix on top; bake at 350 deg. F. for 1 hour. Serve warm or cold with either whipped cream or ice cream.\nnote: can substitute squash for pumpkin',
    'name': 'Pumpkin Cake'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 2, unit: CUPS, name: 'warm water'},
     {unitQuantity: 2, unit: TEASPOONS, name: 'yeast'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'sugar'},
     {unitQuantity: 0.334, unit: CUPS, name: 'vegetable oil'},
     {unitQuantity: 5, unit: CUPS, name: 'flour'}
    ],
    'instructions': '1. Let rise for 30-60 min.\n2. Spread on sheet and top with tomato sauce, hamburger, cheese, pepperoni, sausage, etc.\n3. Bake for 10-15 min. at 425 deg. F. Makes 2 cookie sheets.',
    'name': 'Pizza dough'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 0.5, unit: CUPS, name: 'butter'},
     {unitQuantity: 0.5, unit: CUPS, name: 'peanut butter'},
     {unitQuantity: 0.5, unit: CUPS, name: 'sugar'},
     {unitQuantity: 0.5, unit: CUPS, name: 'brown sugar'},
     {unitQuantity: 1, unit: UNITLESS, name: 'eggs'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'vanilla'},
     {unitQuantity: 1.75, unit: CUPS, name: 'flour'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'baking soda'},
     {packageQuantity: 1, package: '14 oz. packages', name: 'Hersheys Kisses'}
    ],
    'instructions': '1. Beat liquid ingredients well, and gradually blend in dry ingredient mixture.\n2. Shape into teaspoon balls, roll balls in sugar, and place on cookie sheets.\n3. Bake at 375 deg. F. for 8 min. and take out of oven.\n4. Firmly press Hershey Kiss in middle of balls. Bake 2-5 min. longer.',
    'name': 'Peanut Blossom Cookies'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 6, unit: UNITLESS, name: 'medium chicken breasts, skinned'},
     {unitQuantity: 0.25, unit: CUPS, name: 'flour'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'paprika'},
     {unitQuantity: 0.25, unit: TEASPOONS, name: 'pepper'},
     {unitQuantity: 2, unit: TABLESPOONS, name: 'oil'},
     {unitQuantity: 0.5, unit: CUPS, name: 'evaporated skim milk'},
     {unitQuantity: 0.5, unit: CUPS, name: 'chicken broth'}
    ],
    'instructions': '1. In a plastic bag combine flour, salt, paprika, and pepper.\n2. Shake chicken breasts in sack, shaking off excess coating in bag. Reserve remaining flour mixture.\n3. Cook chicken in heated cooking oil for 10-15 min, turning to brown.\n4. Reduce heat, cover, cook 30 min. Drain chicken on paper towels.\nGRAVY:\n1. In small bowl, stir milk into reserved flour mixture. Stir in chicken broth.\n2. Add to skillet. Cook and stir until thickened. Makes 6 servings.',
    'name': 'Fried Chicken with Cream Gravy'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 3, unit: UNITLESS, name: 'medium potatoes'},
     {unitQuantity: 1, unit: UNITLESS, name: 'green bell peppers'},
     {unitQuantity: 0.25, unit: CUPS, name: 'Parmesan cheese, grated'},
     {unitQuantity: 1, unit: UNITLESS, name: 'olive oil'},
     {unitQuantity: 1, unit: UNITLESS, name: 'red bell peppers'}
    ],
    'instructions': '1. Cut potatoes into 1" wedges, coat with 1 Tbsp. olive oil.\n2. Sprinkle with grated Parmesan cheese; toss and place on nonstick baking sheet.\n3. Bake in 350 deg. F. oven for 15 min.\n4. Meanwhile, seed and cut one each red and green bell peppers into 1" strips. Toss in bowl with 1 tsp. olive oil.\n5. Place among potato wedges on baking sheet. Roast an additional 10-15 min., or until potatoes and peppers are tender.',
    'name': 'Parmesan Potato Wedges'
  }, {
    'author': 'breananorton',
    'ingredients': [
     {unitQuantity: 2, unit: UNITLESS, name: 'apples'},
     {unitQuantity: 3.25, unit: CUPS, name: 'oats'},
     {unitQuantity: 1, unit: UNITLESS, name: 'large eggs'},
     {unitQuantity: 0.5, unit: CUPS, name: 'brown sugar'},
     {unitQuantity: 0.5, unit: CUPS, name: 'applesauce'},
     {unitQuantity: 0.5, unit: TABLESPOONS, name: 'cinnamon'},
     {unitQuantity: 2, unit: TEASPOONS, name: 'baking powder'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 0.75, unit: CUPS, name: 'water'},
     {unitQuantity: 0.5, unit: CUPS, name: 'milk'},
     {unitQuantity: 2, unit: TABLESPOONS, name: 'butter, melted'},
     {unitQuantity: 0.5, unit: TABLESPOONS, name: 'lemon juice'}
    ],
    'instructions': 'Combine all ingredients in 9x13 pan and bake at 350 deg. F. for 20 min. covered and 10-15 min. uncovered.',
    'name': 'Apple Oatmeal Bake'
  }, {
    'author': 'christywhite',
    'ingredients': [
     {unitQuantity: 0.5, unit: CUPS, name: 'mashed potatoes'},
     {unitQuantity: 0.5, unit: CUPS, name: 'sugar'},
     {unitQuantity: 0.5, unit: CUPS, name: 'shortening'},
     {unitQuantity: 2, unit: CUPS, name: 'scalded milk'},
     {unitQuantity: 1, unit: TABLESPOONS, name: 'yeast'},
     {unitQuantity: 0.5, unit: CUPS, name: 'warm water'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'sugar'},
     {unitQuantity: 6, unit: CUPS, name: 'flour'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'baking soda'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'baking powder'}
    ],
    'instructions': '1. Mix mashed potatoes, shortening/margerine, 1/2 c. sugar.\n2. Mix in scalded milk. Let cool.\n3. Mix yeast, warm water, and 1 tsp. sugar in a separate bowl. After 5 minutes, add to mixture.\n4. Add flour, baking soda, salt, and baking powder.\n5. Make soft dough. Refrigerate overnight. Cut off as needed, roll out and cut into squares.\n6. Fry in hot oil. Serve with honey butter. (Dough keeps for several days)',
    'name': "Cristy's Scones"
  }, {
    'author': 'samashby',
    'ingredients': [
      {unitQuantity: 2, unit: POUNDS, name: 'ground beef'},
     {packageQuantity: 1, package: 'large cans', name: 'chili beans'},
      {packageQuantity: 2, package: '14 1/2 oz. cans', name: 'diced tomatoes'},
     {unitQuantity: 2, unit: UNITLESS, name: 'medium onions, chopped'},
     {unitQuantity: 2, unit: UNITLESS, name: 'garlic cloves, crushed'},
     {packageQuantity: 1, package: 'to taste', name: 'salt'},
     {unitQuantity: 1.5, unit: TABLESPOONS, name: 'chili powder'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'pepper'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'cumin'},
     {packageQuantity: 0.667, package: 'cans', name: 'tomato sauce'}
    ],
    'instructions': '1. Brown ground beef.\nAdd all ingredients and cook in crock pot on low all day or on high for 3-4 hours.\nnote: 2 garlic cloves, crushed = 2 tsp. minced garlic',
    'name': 'Chili'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 20, unit: UNITLESS, name: 'Rhodes rolls'},
     {packageQuantity: 1, package: '3 oz. packages', name: 'butterscotch pudding mix'},
     {unitQuantity: 1, unit: UNITLESS, name: 'cinnamon'},
     {packageQuantity: 1.5, package: 'sticks', name: 'butter'},
     {unitQuantity: 2, unit: CUPS, name: 'brown sugar'}
    ],
    'instructions': '1. Place Rhodes rolls in one large pan or two bundt pans.\n2. Sprinkle butterscotch pudding mix over rolls, and cinnamon also. Let stand overnight.\n3. Melt butter and mix with brown sugar. Pour over raised rolls.\n4. Bake at 350 deg. F. for 30 min.',
    'name': 'Cinnamon Pull Aparts'
  }, {
    'author': 'meganashby',
    'ingredients': [
     {unitQuantity: 1, unit: CUPS, name: 'water'},
     {unitQuantity: 1, unit: CUPS, name: 'brown sugar'},
     {packageQuantity: 1, package: '15 oz. cans', name: 'sauerkraut'},
     {packageQuantity: 1, package: '16 oz. cans', name: 'jellied cranberry sauce'},
     {packageQuantity: 1, package: '12 oz. jars', name: 'chili sauce'},
     {unitQuantity: 1, unit: CUPS, name: 'crushed pineapple'},
     {unitQuantity: 1, unit: CUPS, name: 'pineapple juice'}
    ],
    'instructions': '1. In large pot, mix all the sauce ingredients and simmer on medium to medium high for 15-20 min. until blended.\n2. Add sauce to meatballs. Simmer on low for 30 min. to 1 hour.',
    'name': "Everyone's Favorite Meatballs"
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 1, unit: UNITLESS, name: 'fruit'},
     {unitQuantity: 1, unit: UNITLESS, name: 'water'},
     {unitQuantity: 1, unit: TABLESPOONS, name: 'honey'},
     {unitQuantity: 0.5, unit: TABLESPOONS, name: 'lemon juice'}
    ],
    'instructions': '1. Pit fruit.\n2. Fill pan 1/4 full of water and fruit, heat through.\n3. Blend in blender and add honey and lemon juice to every cup of blended fruit.\n4. Damp jelly roll pan around sides and line with handi-wrap.\n5. Pour into pan about 1/8 inches deep. Dry in a car window about 5-6 hours.',
    'name': 'Fruit Leather'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 18, unit: OUNCES, name: 'Pasta Prima Grilled Chicken and Mozzarella Ravioli'},
     {unitQuantity: 0.75, unit: CUPS, name: 'olive oil'},
     {unitQuantity: 2, unit: UNITLESS, name: 'onions, 1/2 inch diced'},
     {unitQuantity: 5, unit: UNITLESS, name: 'garlic cloves, minced'},
     {unitQuantity: 1.5, unit: CUPS, name: 'red bell peppers, 1/2 inch diced'},
     {unitQuantity: 1.5, unit: CUPS, name: 'eggplant, 1/2 inch diced'},
     {unitQuantity: 1.5, unit: CUPS, name: 'zucchini, 1/2 inch diced'},
     {packageQuantity: 1, package: '20 oz. cans', name: 'plum tomatoes, chopped'},
     {unitQuantity: 0.5, unit: CUPS, name: 'Parmesan cheese, grated'},
     {packageQuantity: 1, package: 'to taste', name: 'salt'},
     {packageQuantity: 1, package: 'to taste', name: 'pepper'}
    ],
    'instructions': '1. Heat a large skillet over high heat. Add in 1/4 c. olive oil, then onions and garlic; cook until the onions are tender. Add in peppers (can use yellow bell peppers), and cook until the peppers are tender. Season with salt and black pepper. Remove and keep warm.\n2. Return the pan over high heat, add in 1/4 c. olive oil and saute the zucchini until tender. Remove from pan and add to the onions and peppers mixture.\n3. Return the pan to high heat, add in the remaining olive oil and saute the eggplant until browned and softened. Add the tomatoes and bring to a boil. Reduce to a simmer; add the onions, pepper, and zucchini mixture. Blend together well, mixing with a wooden spatula, and continue to simmer for 3 min.\n4. Serve over cooked Pasta Prima Grilled Chicken & Mozzarella Ravioli (following its cooking instructions) and then top with Parmesan cheese.',
    'name': 'Ratatouille'
  }, {
    'author': 'coletteashby',
    'ingredients': [
     {unitQuantity: 1, unit: POUNDS, name: 'hamburger, browned'},
     {unitQuantity: 0.5, unit: CUPS, name: 'onions, chopped'},
     {unitQuantity: 3, unit: CUPS, name: 'water'},
     {unitQuantity: 4, unit: TABLESPOONS, name: 'taco seasoning'},
     {packageQuantity: 2, package: '26 oz. cans', name: 'stewed tomatoes'},
     {packageQuantity: 2, package: '26 oz. cans', name: 'black beans'},
     {unitQuantity: 1, unit: CUPS, name: 'cheese, grated'},
     {unitQuantity: 1, unit: UNITLESS, name: 'taco chips'},
     {unitQuantity: 1, unit: UNITLESS, name: 'sour cream'},
     {unitQuantity: 1, unit: UNITLESS, name: 'green onions'},
     {unitQuantity: 1, unit: UNITLESS, name: 'tomatoes'}
    ],
    'instructions': '1. Mix soup ingredients together and simmer 15 min. Serve with garnishes (cheese, chips, sour cream, green onions, and tomatoes).',
    'name': 'Taco Soup'
  }, {
    'author': 'violet2flame',
    'ingredients': [
     {unitQuantity: 1.125, unit: CUPS, name: 'butter'},
     {unitQuantity: 1, unit: CUPS, name: 'sugar'},
     {unitQuantity: 0.25, unit: CUPS, name: 'heavy whipping cream'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'baking soda'},
     {unitQuantity: 3.25, unit: CUPS, name: 'all-purpose flour'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'cinnamon'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'black pepper'},
     {unitQuantity: 1.5, unit: TEASPOONS, name: 'ground cardamom'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'baking powder'}
    ],
    'instructions': '1. Cream together the butter and the sugar until light and fluffy. Stir in the cream. Add the baking soda and little water (no more than 2 Tbsp.) to the butter mixture.\n2. Sift the spices, baking powder and flour into the butter mixture. Blend until a nice dough is formed. Roll dough into sausages about 2-1/2 inches in diameter, wrap tightly and let dough chill thoroughly.\n3. Preheat oven to 375 deg. F. (190 deg. C). Remove chilled dough and cut into thin slices. Bake on a lightly greased cookie sheet for 6-8 min. Let cookies cool on wire rack.',
    'name': "Norway's Best Pepper Cookies"
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 0.5, unit: CUPS, name: 'shortening'},
     {unitQuantity: 1, unit: CUPS, name: 'sugar'},
     {unitQuantity: 2, unit: UNITLESS, name: 'eggs'},
     {unitQuantity: 1.75, unit: CUPS, name: 'flour'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'baking soda'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'nutmeg'},
     {unitQuantity: 0.25, unit: TEASPOONS, name: 'ginger'},
     {unitQuantity: 0.25, unit: TEASPOONS, name: 'cloves'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'cinnamon'},
     {unitQuantity: 0.75, unit: CUPS, name: 'pumpkin puree'},
     {unitQuantity: 0.75, unit: CUPS, name: 'chocolate chips'}
    ],
    'instructions': '1. Cream shortening and sugar.\n2. Add eggs and beat.\n3. Add rest of ingredients and beat.\n4. Pour into greased loaf pan and bake at 350 deg. F. for 50-60 min.',
    'name': 'Pumpkin Bread'
  }, {
    'author': 'breananorton',
    'ingredients': [
     {unitQuantity: 0.5, unit: CUPS, name: 'butter, softened'},
     {unitQuantity: 1, unit: CUPS, name: 'sugar'},
     {unitQuantity: 1, unit: UNITLESS, name: 'eggs'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'vanilla'},
     {unitQuantity: 1.5, unit: CUPS, name: 'flour'},
     {unitQuantity: 0.25, unit: TEASPOONS, name: 'baking soda'},
     {unitQuantity: 0.25, unit: TEASPOONS, name: 'cream of tartar'}
    ],
    'instructions': '1. Mix all ingredients. Chill 1 hour. Bake at 375 deg. F. for 10 min.',
    'name': 'Snickerdoodles'
  }, {
    'author': 'samashby',
    'ingredients': [
     {packageQuantity: 2, package: 'cans', name: 'sweetened condensed milk'},
     {packageQuantity: 1, package: 'large packages', name: 'instant chocolate pudding'},
     {unitQuantity: 1, unit: PINTS, name: 'cream'},
     {unitQuantity: 2, unit: TABLESPOONS, name: 'vanilla'},
     {unitQuantity: 1.5, unit: CUPS, name: 'sugar'}
    ],
    'instructions': '1. Mix ingredients and pour into container, fill to line with whole milk.\n2. Freeze in 5 quart ice cream freezer.',
    'name': 'Chocolate Ice Cream'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 4, unit: CUPS, name: 'apple slices'},
     {unitQuantity: 1, unit: TABLESPOONS, name: 'lemon juice'},
     {unitQuantity: 0.334, unit: CUPS, name: 'flour'},
     {unitQuantity: 1, unit: CUPS, name: 'oats'},
     {unitQuantity: 0.5, unit: CUPS, name: 'brown sugar'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'cinnamon'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 0.334, unit: CUPS, name: 'butter, melted'}
    ],
    'instructions': '1. Put apples in 9x13 pan. Sprinkle lemon juice over top of apples.\n2. Mix dry ingredients, add melted butter and mix well.\n3. Spread on top of apples and bake at 375 deg. F. for 30 min.',
    'name': 'Apple Crisp'
  }, {
    'author': 'barbaraalldredge',
    'ingredients': [
     {packageQuantity: 1, package: 'cans', name: 'chili'},
     {packageQuantity: 1, package: 'cans', name: 'corn, drained'},
     {packageQuantity: 1, package: 'cans', name: 'tomatoes'},
     {unitQuantity: 1, unit: CUPS, name: 'cheese'},
     {unitQuantity: 1, unit: UNITLESS, name: 'corn chips'},
     {unitQuantity: 1, unit: UNITLESS, name: 'cheese, grated'}
    ],
    'instructions': '1. Mix chili, corn, tomatoes, and 2 c. cheese in 9x13 pan. Top with chips and cheese.\n2. Bake for 20 min. at 350 deg. F.\n3. Add more cheese and bake for another 5 min.\nnote: cans are all the same size',
    'name': 'Spanish Casserole'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 2, unit: TEASPOONS, name: 'chicken base'},
     {unitQuantity: 3, unit: CUPS, name: 'chicken stock'},
     {unitQuantity: 2, unit: CUPS, name: 'carrots, chopped'},
     {unitQuantity: 2, unit: CUPS, name: 'celery, chopped'},
     {unitQuantity: 0.75, unit: CUPS, name: 'onions, chopped'},
     {packageQuantity: 2, package: 'cans', name: 'cream of chicken soup'},
     {unitQuantity: 0.25, unit: CUPS, name: 'evaporated milk'},
     {unitQuantity: 1, unit: UNITLESS, name: 'roux'},
     {unitQuantity: 2, unit: CUPS, name: 'cooked chicken, diced'},
     {unitQuantity: 4, unit: CUPS, name: 'cooked noodles'},
     {packageQuantity: 1, package: 'to taste', name: 'salt'},
     {packageQuantity: 1, package: 'to taste', name: 'pepper'}
    ],
    'instructions': '1. Heat chicken soup base (can substitute 1 bouillon cube for one tsp chicken base) and stock together.\n2. Add carrots, celery and onions.\n3. Simmer until vegetables are tender.\n4. Add cream of chicken soup and milk.\n5. Thicken with roux as desired, then add cooked chicken and noodles. Add salt and pepper to taste.\nNote: Sam Ashby likes to add potatoes and the noodles (about 2 cups) uncooked. This helps make the soup thicker instead of using the roux.\nnote: 1/2 c. whole milk can be substituted for 1/4 c. evaporated milk',
    'name': 'Lion House Hearty Chicken Noodle Soup'
  }, {
    'author': 'violet2flame',
    'ingredients': [
     {unitQuantity: 2, unit: CUPS, name: 'boiling water'},
     {unitQuantity: 5, unit: TEASPOONS, name: 'baking soda'},
     {unitQuantity: 5, unit: CUPS, name: 'all-purpose flour'},
     {unitQuantity: 1, unit: QUARTS, name: 'buttermilk'},
     {unitQuantity: 4, unit: CUPS, name: 'bran cereal'},
     {unitQuantity: 2, unit: CUPS, name: 'bran flakes cereal'},
     {unitQuantity: 1, unit: CUPS, name: 'walnuts, chopped'},
     {unitQuantity: 1, unit: CUPS, name: 'white sugar'},
     {unitQuantity: 0.5, unit: CUPS, name: 'vegetable oil'},
     {unitQuantity: 0.5, unit: CUPS, name: 'butter, melted'},
     {unitQuantity: 4, unit: UNITLESS, name: 'eggs, beaten'},
     {unitQuantity: 2, unit: TEASPOONS, name: 'cinnamon'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'ginger, ground'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'nutmeg'}
    ],
    'instructions': '1. Combine boiling water and baking soda together in a large bowl. Let cool slightly.\n2. Stir flour, buttermilk, bran cereal (such as Kellogg\'s All-Bran), bran flakes, walnuts, sugar, oil, butter, eggs, cinnamon, salt, ginger, and nutmeg into water-baking soda mixture until just combined. Cover bowl with plastic wrap and refrigerate muffin batter for at least 8 hours or overnight.\n3. Preheat oven to 375 deg. F. (190 deg. C). Grease 60 muffin cups or line with paper muffin liners.\n4. Pour batter into prepared muffin cups 1/2 full.\n5. Bake muffins in the preheated oven until the tops spring back when lightly pressed, about 20 minutes.',
    'name': 'Mormon Muffins'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 1, unit: CUPS, name: 'sugar'},
     {unitQuantity: 2, unit: TABLESPOONS, name: 'cornstarch'},
     {unitQuantity: 0.25, unit: CUPS, name: 'butter'},
     {unitQuantity: 0.25, unit: TEASPOONS, name: 'cinnamon'},
     {unitQuantity: 0.25, unit: TEASPOONS, name: 'nutmeg'},
     {unitQuantity: 2, unit: CUPS, name: 'orange juice'},
     {unitQuantity: 2, unit: TABLESPOONS, name: 'lemon juice'}
    ],
    'instructions': '1. Mix sugar, cornstarch, cinnamon and nutmeg in a saucepan.\n2. Stir in orange juice and lemon juice.\n3. Cook, stirring constantly, until mixture thickens and boils. Then boil and stir for one minute more.\n4. Remove from heat; stir in butter.\nNotes: Can substitute 1/2 tsp pumpkin pie spice for cinnamon and nutmeg.',
    'name': 'Orange Syrup'
  }, {
    'author': 'cindeemay',
    'ingredients': [
     {unitQuantity: 2, unit: CUPS, name: 'sugar'},
     {unitQuantity: 4, unit: TABLESPOONS, name: 'cocoa'},
     {unitQuantity: 4, unit: TABLESPOONS, name: 'flour'},
     {packageQuantity: 1, package: 'cans', name: 'evaporated milk'},
     {unitQuantity: 4, unit: TABLESPOONS, name: 'butter'},
     {unitQuantity: 2, unit: TEASPOONS, name: 'vanilla'}
    ],
    'instructions': '1. Combine sugar, cocoa and flour.\n2. Slowly add can of evaporated milk and cook over medium heat, stirring constantly until thick.\n3. Cool slightly. Add butter and vanilla.',
    'name': 'Hot Fudge Sauce'
  }, {
    'author': 'meganashby',
    'ingredients': [
     {unitQuantity: 1, unit: UNITLESS, name: 'double 9 inch pie shell'},
     {unitQuantity: 5, unit: CUPS, name: 'fresh blueberries'},
     {unitQuantity: 0.25, unit: CUPS, name: 'cornstarch'},
     {unitQuantity: 2, unit: TABLESPOONS, name: 'flour'},
     {unitQuantity: 1.25, unit: CUPS, name: 'sugar'},
     {packageQuantity: 1, package: 'drops', name: 'vanilla extract'},
     {unitQuantity: 1, unit: TABLESPOONS, name: 'lemon juice'},
     {unitQuantity: 1, unit: TABLESPOONS, name: 'butter, unsalted'},
     {unitQuantity: 1, unit: UNITLESS, name: 'egg wash'}
    ],
    'instructions': '1. Line a 9 inch pie pan with pastry dough and preheat oven to 425 deg. F.\n2. In a large bowl, toss blueberries, cornstarch, flour, sugar, vanilla extract and lemon juice.\n3. Spoon or mound into pie shell, and dot with unsalted butter.\n4. Wet pie edges with a bit of water.\n5. Roll remaining pastry to fit top of pie, and place on pie and press securely onto fruit and edges to seal.\n6. Trim edges, crimp, and cut slits for steam to escape.\n7. Brush top of pastry with egg wash.\n8. Place pie on baking sheets and place on lowest rack in oven. Bake for 20 min. at 425 deg. F, then lower to 375 deg. F. and bake until juices begin to bubble through steam slits (about 35-45 min). Cool for 1 hour before serving.\n*Note: You can cook berry mixture on stove before putting in pie shell to thicken filling.',
    'name': 'Blueberry Pie'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 2, unit: CUPS, name: 'flour'},
     {unitQuantity: 1.5, unit: CUPS, name: 'sugar'},
     {unitQuantity: 0.25, unit: CUPS, name: 'cocoa'},
     {unitQuantity: 4, unit: TEASPOONS, name: 'baking powder'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 0.5, unit: CUPS, name: 'cocoa'},
     {unitQuantity: 1, unit: CUPS, name: 'milk'},
     {unitQuantity: 0.25, unit: CUPS, name: 'salad oil'},
     {unitQuantity: 2, unit: TEASPOONS, name: 'vanilla'},
     {unitQuantity: 1, unit: UNITLESS, name: 'nuts, chopped'},
     {unitQuantity: 1.5, unit: CUPS, name: 'brown sugar'},
     {unitQuantity: 3.5, unit: CUPS, name: 'hot water'}
    ],
    'instructions': '1. Sift together dry ingredients; add milk, oil, and vanilla; mix till smooth.\n2. Stir in nuts.\n3. Pour into greased 9x13 pan.\n4. Combine brown sugar and cocoa. Sprinkle over batter.\n5. Slowly pour hot water over top.\n6. Bake at 350 deg. F. about 45 min.\nNote: Double recipe if cooking in 14 inch Dutch Oven',
    'name': 'Brownie Pudding'
  }, {
    'author': 'peggywhitehead',
    'ingredients': [
     {packageQuantity: 1, package: 'large bags', name: 'frozen hash browns'},
     {packageQuantity: 1, package: 'cans', name: 'cream of mushroom soup'},
     {packageQuantity: 1, package: 'cans', name: 'cream of chicken soup'},
     {unitQuantity: 1, unit: UNITLESS, name: 'onions, diced'},
     {unitQuantity: 1, unit: CUPS, name: 'sour cream'},
     {unitQuantity: 1, unit: CUPS, name: 'cheese, shredded'},
     {packageQuantity: 1, package: 'to taste', name: 'garlic salt'},
     {packageQuantity: 1, package: 'to taste', name: 'onion salt'}
    ],
    'instructions': '1. Mix soups, sour cream, shredded cheese, and seasonings.\n2. Fold in the hash browns.\n3. Spray 9x13 pan with cooking spray. Put potatoes in pan. Top with cheese, crushed potato chips, or crushed corn flakes with melted butter.\n4. Bake at 350 deg. F. for 1 hour.',
    'name': 'Cheesy Hot Potatoes'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 2.75, unit: CUPS, name: 'flour'},
     {unitQuantity: 2, unit: CUPS, name: 'sugar'},
     {unitQuantity: 2, unit: TEASPOONS, name: 'baking soda'},
     {unitQuantity: 0.5, unit: CUPS, name: 'cocoa'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 2, unit: UNITLESS, name: 'eggs'},
     {unitQuantity: 0.75, unit: CUPS, name: 'oil'},
     {unitQuantity: 1, unit: CUPS, name: 'sour cream'},
     {unitQuantity: 1, unit: TABLESPOONS, name: 'vanilla'},
     {unitQuantity: 1, unit: CUPS, name: 'boiling water'}
    ],
    'instructions': '1. Mix dry ingredients\n2. Add all liquid ingredients, except boiling water. Boil 1 c. water, add immediately, and mix all ingredients immediately.\n3. Bake at 350 deg. F. for 35-40 min. (or 20-25 min. for cupcakes).',
    'name': 'Favorite Chocolate Cake'
  }, {
    'author': 'lesliewoodward',
    'ingredients': [
     {packageQuantity: 2, package: 'bags', name: 'hash browns'},
     {unitQuantity: 1, unit: POUNDS, name: 'bacon'},
     {unitQuantity: 1, unit: UNITLESS, name: 'large onions, chopped'},
     {unitQuantity: 12, unit: UNITLESS, name: 'eggs'},
     {unitQuantity: 1, unit: UNITLESS, name: 'cheese, grated'},
     {packageQuantity: 1, package: 'to taste', name: 'seasonings'}
    ],
    'instructions': '1. Cook bacon and onion in Dutch oven.\n2. Break up bacon pieces and add hash browns. Stir in and season.\n3. Add eggs and cook until done.\n4. Top with grated cheese and cook unitl cheese is melted.',
    'name': 'Cheesy Dutch Oven Potatoes'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 1, unit: CUPS, name: 'applesauce'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'baking soda'},
     {unitQuantity: 1, unit: CUPS, name: 'sugar'},
     {unitQuantity: 0.5, unit: CUPS, name: 'shortening'},
     {unitQuantity: 2, unit: UNITLESS, name: 'eggs'},
     {unitQuantity: 2, unit: CUPS, name: 'flour'},
     {unitQuantity: 1, unit: CUPS, name: 'oatmeal'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'cinnamon'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'cloves'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'nutmeg'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 1, unit: CUPS, name: 'nuts'},
     {unitQuantity: 6, unit: OUNCES, name: 'chocolate chips'}
    ],
    'instructions': '1. Mix applesauce and baking soda.\n2. Mix sugar, shortening and eggs. Add to applesauce mixture.\n3. Add flour and spices that have been sifted.\n4. Add nuts and chocolate chips.\n5. Drop by spoonful on greased cookie sheet and bake at 400 deg. F. for 9-12 min.',
    'name': 'Applesauce Cookies'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 1, unit: CUPS, name: 'butter'},
     {unitQuantity: 1, unit: CUPS, name: 'sugar'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'vanilla'},
     {unitQuantity: 1, unit: CUPS, name: 'cooked pumpkin'},
     {unitQuantity: 1, unit: UNITLESS, name: 'eggs'},
     {unitQuantity: 2, unit: CUPS, name: 'flour'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'baking powder'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'baking soda'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'cinnamon'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'allspice'},
     {unitQuantity: 1.25, unit: CUPS, name: 'chocolate chips'}
    ],
    'instructions': '1. Mix all ingredients. Bake at 375 deg. F. for about 13 min.',
    'name': 'Pumpkin Chocolate Chip Cookies'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 1, unit: UNITLESS, name: 'ribs'},
     {unitQuantity: 1, unit: UNITLESS, name: 'barbecue sauce'}
    ],
    'instructions': '1. Place ribs in crock pot - frozen or thawed. Cook on high for 4-5 hours or on low about 8 hours.\n2. One hour before serving, drain and pour barbecue sauce over meat.\nVariation: Use boneless chicken breasts',
    'name': 'Boneless Barbecue Ribs'
  }, {
    'author': 'pauladeen',
    'ingredients': [
     {unitQuantity: 6, unit: OUNCES, name: 'bittersweet chocolate squares'},
     {unitQuantity: 2, unit: OUNCES, name: 'semisweet chocolate baking squares'},
     {unitQuantity: 10, unit: TABLESPOONS, name: 'butter'},
     {unitQuantity: 0.5, unit: CUPS, name: 'flour'},
     {unitQuantity: 2, unit: TABLESPOONS, name: 'orange juice'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'orange extract'},
     {unitQuantity: 3, unit: UNITLESS, name: 'large eggs'},
     {unitQuantity: 3, unit: UNITLESS, name: 'large egg yolks'},
     {unitQuantity: 1, unit: TABLESPOONS, name: 'vanilla'},
     {unitQuantity: 2, unit: TABLESPOONS, name: 'Grand Marnier'}
    ],
    'instructions': '1. Preheat oven to 425 deg. F.\n2. Grease 6 (6 oz.) custard cups.\n3. Melt chocolates and butter in the microwave or in a double boiler.\n4. Add flour and sugar to chocolate mixture.\n5. Stir in eggs until smooth.\n6. Stir in vanilla and Grand Marnier (can substitute 1 1/2 c. powdered sugar for 2 Tbsp Grand Marnier).\n7. Divide batter evenly among custard cups.\n8. Bake for 14 min. Edges should be firm but the center will be runny.\n9. Run a knife around the edge to loosen and invert into dessert plate. Top with vanillla ice cream or raspberry sauce (optional).',
    'name': 'Molten Lava Cake'
  }, {
    'author': 'spencerashby',
    'ingredients': [
     {unitQuantity: 1, unit: UNITLESS, name: 'chicken'},
     {unitQuantity: 1, unit: UNITLESS, name: 'mayonnaise'},
     {unitQuantity: 1, unit: UNITLESS, name: 'ketchup'},
     {unitQuantity: 1, unit: UNITLESS, name: 'salami'},
     {unitQuantity: 1, unit: UNITLESS, name: 'broccoli'},
     {unitQuantity: 1, unit: UNITLESS, name: 'dark bread'}
    ],
    'instructions': '1. Put chicken in bread.\n2. Put mayonnaise on chicken.\n3. Put ketchup on mayonnaise.\n4. Put four pieces of broccoli on.\n5. Put on salami.\n6. Put dark bread on top.',
    'name': "Spencer's Chicken Sandwich"
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 2, unit: UNITLESS, name: 'devil food cake mixes'},
     {unitQuantity: 4, unit: UNITLESS, name: 'eggs'},
     {unitQuantity: 1.5, unit: CUPS, name: 'shortening, melted'},
     {unitQuantity: 8, unit: OUNCES, name: 'cream cheese, softened'},
     {unitQuantity: 4, unit: CUPS, name: 'powdered sugar'},
     {packageQuantity: 1, package: 'cubes', name: 'margarine, softened'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'vanilla'}
    ],
    'instructions': 'COOKIES:\n1. Mix cookie ingredients (mixes, eggs, shortening) until consistency of cookie dough.\n2. Roll dough into 25-cent sized balls, and space them on cookie sheets; they spread. Bake at 375 deg. F. for 7-10 min. Cool.\nFILLING:\nMix all filling ingredients thoroughly (po. Frost equal size.\nNote: Can substitute lemon cake mixes for devil food cake mixes.',
    'name': 'Chocolate Sandwich Cookies'
  }, {
    'author': 'faytruman',
    'ingredients': [
     {unitQuantity: 1, unit: CUPS, name: 'butter, melted'},
     {unitQuantity: 2, unit: CUPS, name: 'onions, chopped'},
     {unitQuantity: 2, unit: CUPS, name: 'celery, chopped'},
     {unitQuantity: 1, unit: UNITLESS, name: 'carrots, shredded'},
     {packageQuantity: 1, package: '8 oz. cans', name: 'mushrooms'},
     {packageQuantity: 1, package: '8 oz. cans', name: 'water chestnuts'},
     {unitQuantity: 2, unit: CUPS, name: 'broth'},
     {unitQuantity: 2, unit: UNITLESS, name: 'eggs, beaten'},
     {unitQuantity: 13, unit: CUPS, name: 'dry bread crumbs'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'marjoram'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'poultry seasoning'},
     {unitQuantity: 1.5, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 1.5, unit: TEASPOONS, name: 'sage'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'thyme'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'pepper'}
    ],
    'instructions': 'Mix all ingredients and put in slow cooker on low for 6-8 hours',
    'name': 'Slow Cooker Dressing'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 1, unit: POUNDS, name: 'Ricotta cheese'},
     {unitQuantity: 0.25, unit: POUNDS, name: 'Mozzarella cheese'},
     {unitQuantity: 1, unit: UNITLESS, name: 'eggs'},
     {unitQuantity: 18, unit: UNITLESS, name: 'jumbo pasta shells'},
     {unitQuantity: 1, unit: TABLESPOONS, name: 'parsley, chopped'},
     {packageQuantity: 1, package: 'to taste', name: 'salt'},
     {packageQuantity: 1, package: 'to taste', name: 'pepper'},
     {unitQuantity: 0.334, unit: CUPS, name: 'Parmesan cheese'},
     {packageQuantity: 1, package: 'jars', name: 'spaghetti sauce'}
    ],
    'instructions': '1. Mix Ricotta, Mozzarrella, egg, Parmesan, parsley, and salt and pepper.\n2. Cook jumbo pasta shells according to directions. Drain and cool.\n3. Fill shells with cheese mixture.\n3. Put 2/3 spaghetti sauce in pan, put filled shells in and cover with remaining sauce.\n4. Bake at 350 deg. F. for 25 min, covered.\n5. Sprinkle extra Mozzarella cheese on top and bake an additional 5 min.\nNote: 1/4 lb. Mozzarella is about 1 c. Mozzarella shredded',
    'name': 'Manicotti'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 4, unit: UNITLESS, name: 'eggs'},
     {unitQuantity: 1, unit: CUPS, name: 'flour'},
     {unitQuantity: 0.5, unit: CUPS, name: 'milk'},
     {unitQuantity: 0.5, unit: CUPS, name: 'water'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 2, unit: TABLESPOONS, name: 'butter, melted'},
     {unitQuantity: 2, unit: TEASPOONS, name: 'sugar'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'vanilla'}
    ],
    'instructions': '1. Blend well and let sit for 30 min.\n2. Pour batter in pie pan and cook with crepe maker. Fill with choice of dessert filling.',
    'name': 'Basic Dessert Crepes'
  }, {
    'author': 'jaceeashby',
    'ingredients': [
     {packageQuantity: 1, package: 'cans', name: 'cream of celery soup'},
     {packageQuantity: 1, package: 'cans', name: 'cream of mushroom soup'},
     {unitQuantity: 1, unit: UNITLESS, name: 'chicken, cut up'},
     {packageQuantity: 0.5, package: 'cans', name: 'water'},
     {packageQuantity: 1, package: 'packages', name: 'dry onion soup mix'},
     {unitQuantity: 1, unit: CUPS, name: 'uncooked rice'}
    ],
    'instructions': '1. Put half of soup mixture in casserole. Sprinkle with half of rice, put chicken in layer over rice, then add rest of rice.\n2. Pour rest of soup mixture over top.\n3. Bake covered in 350 deg. F. oven about 1 hour until done.',
    'name': 'Chicken Rice Casserole'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 1.5, unit: POUNDS, name: 'hamburger'},
     {unitQuantity: 1, unit: PINTS, name: 'IMO sour cream'},
     {packageQuantity: 1, package: 'packages', name: 'dry onion soup mix'},
     {unitQuantity: 1, unit: UNITLESS, name: 'eggs'},
     {unitQuantity: 0.5, unit: CUPS, name: 'soft bread crumbs'},
     {unitQuantity: 1, unit: CUPS, name: 'water'},
     {unitQuantity: 1, unit: CUPS, name: 'flour'}
    ],
    'instructions': '1. Mix California dip:IMO sour cream and onion soup mix.\n2. Beat egg and mix with bread crumbs, meat and 1/2 of the California dip.\n3. Roll into 1 inch balls. Roll in flour, brown in 2 Tbsp. Butter.\n4. Mix other half of dip with water and let it warm up while browning meatballs.\n5. Pour over meatballs and simmer till serving. Can serve over noodles or rice.',
    'name': 'Swedish Meatballs'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 0.75, unit: CUPS, name: 'oil'},
     {unitQuantity: 1, unit: CUPS, name: 'sugar'},
     {unitQuantity: 1, unit: UNITLESS, name: 'eggs'},
     {unitQuantity: 0.25, unit: CUPS, name: 'molasses'},
     {unitQuantity: 2, unit: CUPS, name: 'flour'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'cinnamon'},
     {unitQuantity: 2, unit: TEASPOONS, name: 'baking soda'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'ginger'}
    ],
    'instructions': '1. Beat liquid ingredients together.\n2. Mix dry ingredients together.\n3. Roll in balls and roll in sugar.\n4. Bake at 350 deg. F. for 8 min.',
    'name': 'Soft Gingersnaps'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 2, unit: CUPS, name: 'sugar'},
     {unitQuantity: 0.75, unit: CUPS, name: 'vegetable oil'},
     {unitQuantity: 0.75, unit: CUPS, name: 'cocoa'},
     {unitQuantity: 4, unit: UNITLESS, name: 'eggs'},
     {unitQuantity: 1, unit: UNITLESS, name: 'powdered sugar'},
     {unitQuantity: 2, unit: TEASPOONS, name: 'vanilla'},
     {unitQuantity: 2.334, unit: CUPS, name: 'flour'},
     {unitQuantity: 2, unit: TEASPOONS, name: 'baking powder'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'salt'}
    ],
    'instructions': '1. Combine sugar and vegetable oil in large mixing bowl. Add cocoa; blend well.\n2. Beat in eggs and vanilla.\n3. Combine flour, baking powder and salt; add to cocoa mixture, blending well.\n4. Cover, chill for several hours or overnight. Shape dough into 2-inch balls. Roll in powdered sugar.\n5. Place about 3 inches apart on greased cookie sheet.\n6. Bake at 350 deg. F. for 16-18 min. or until almost no indentation remains when touched.',
    'name': 'Chocolate Crinkle Cookies'
  }, {
    'author': 'violet2flame',
    'ingredients': [
     {unitQuantity: 6, unit: TABLESPOONS, name: 'butter'},
     {unitQuantity: 0.75, unit: CUPS, name: 'onions, diced'},
     {packageQuantity: 1, package: '30 oz. bags', name: 'frozen, shredded hashbrown potatoes'},
     {packageQuantity: 1, package: '10.5 oz. cans', name: 'condensed cream of chicken soup'},
     {unitQuantity: 1, unit: CUPS, name: 'sour cream'},
     {unitQuantity: 0.25, unit: CUPS, name: 'Parmesan cheese, grated'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'pepper'},
     {unitQuantity: 2, unit: CUPS, name: 'sharp Cheddar cheese, shredded and firmly packed'},
     {unitQuantity: 1.5, unit: CUPS, name: 'crushed cornflake cereal'}
    ],
    'instructions': '1. Preheat oven to 350 degrees. In a medium sized skillet, add 2 tablespoons butter and saute until the onions are translucent. Add the garlic and cook until fragrant. Remove from heat and set aside. \n2. In a large bowl, mix together the cooked onions, garlic, hashbrowns, condensed soup, sour cream, Parmesan cheese, salt, pepper, and 1 1/2 cups Cheddar cheese.\n3. Spread into a greased 9x13 inch baking pan. Top with remaining 1/2 cup Cheddar cheese.\n4. Melt the remaining 4 tablespoons of butter and mi with the crushed cornflake crumbs. Sprinkle evenly over the top of the casserole.\n5. Bake for 50-60 minutes or until cooked throughout and bubbly.\nNote: Hashbrowns should be thawed. \nNote: 12 small potatoes parboiled and shredded can be substituted for a 30 oz. bag of frozen, shredded hashbrown potatoes.\nNote: Plain greek yogurt can be substituted for sour cream.\nNote: Panko bread crumbs can be used in place of crushed cornflake cereal.',
    'name': 'Funeral Potatoes'
  }, {
    'author': 'anikaashby',
    'ingredients': [
     {unitQuantity: 1, unit: CUPS, name: 'flour'},
     {unitQuantity: 0.5, unit: CUPS, name: 'shortening'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 0.25, unit: CUPS, name: 'cold water'}
    ],
    'instructions': '1. Mix flour, shortening and salt with pastry mixer.\n2. Add water and mix with fork.\n3. Roll into circle and put in pie pan. Makes one pie crust.',
    'name': "Anika's Famous Pie Crust"
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 2, unit: CUPS, name: 'zucchini, grated'},
     {unitQuantity: 2, unit: CUPS, name: 'flour'},
     {unitQuantity: 1.25, unit: CUPS, name: 'sugar'},
     {unitQuantity: 0.5, unit: CUPS, name: 'nuts, chopped'},
     {unitQuantity: 2, unit: TEASPOONS, name: 'vanilla'},
     {unitQuantity: 0.75, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 1.5, unit: TEASPOONS, name: 'baking soda'},
     {unitQuantity: 0.5, unit: CUPS, name: 'cocoa'},
     {unitQuantity: 0.5, unit: CUPS, name: 'oil'},
     {unitQuantity: 2, unit: UNITLESS, name: 'eggs, beaten'}
    ],
    'instructions': '1. Mix well. Spread in 11x15 greased jelly roll pan.\n2. Bake 18-20 min. at 350 deg. F.',
    'name': 'Zucchini Brownies'
  }, {
    'author': 'kyleashby',
    'ingredients': [
     {unitQuantity: 0.5, unit: CUPS, name: 'granulated sugar'},
     {unitQuantity: 0.5, unit: CUPS, name: 'brown sugar'},
     {unitQuantity: 0.25, unit: CUPS, name: 'butter'},
     {unitQuantity: 0.25, unit: CUPS, name: 'shortening'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'baking soda'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'cinnamon'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'vanilla'},
     {unitQuantity: 0.25, unit: TEASPOONS, name: 'baking powder'},
     {unitQuantity: 0.25, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 1, unit: UNITLESS, name: 'eggs'},
     {unitQuantity: 1.5, unit: CUPS, name: 'quick oats'},
     {unitQuantity: 1, unit: CUPS, name: 'flour'}
    ],
    'instructions': '1. Heat oven to 375 deg. F.\n2. Mix all ingredients except oats, flour and raisins or chocolate chips, etc.\n3. Stir oats, flour, raisins etc.\n4. Drop by rounded teaspoon 2 inches apart on ungreased cookie sheet.\n5. Bake about 10 min.',
    'name': 'Oatmeal Cookies'
  }, {
    'author': 'violet2flame',
    'ingredients': [
     {packageQuantity: 1, package: '20 oz. bags', name: 'shredded hash browns'},
     {unitQuantity: 1, unit: TABLESPOONS, name: 'olive oil'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'black pepper'},
     {unitQuantity: 2, unit: CUPS, name: 'fiesta blend cheese'},
     {unitQuantity: 12, unit: OUNCES, name: 'bacon, cooked and chopped'},
     {unitQuantity: 9, unit: UNITLESS, name: 'extra large eggs'},
     {unitQuantity: 0.5, unit: CUPS, name: 'red bell peppers, diced'},
     {unitQuantity: 0.5, unit: CUPS, name: 'orange bell peppers, diced'},
     {unitQuantity: 1, unit: UNITLESS, name: 'parsley'},
     {unitQuantity: 0.5, unit: CUPS, name: 'two percent milk'}
    ],
    'instructions': '1. Preheat oven to 400 degrees.\n2. Spray 24 muffin tins with cooking spray.\n3. Combine one egg with hashbrowns, olive oil, 1 cup cheese and half each of the salt and pepper.\n4. Divide mixture evenly between 24 muffin tins and press down.\n5. Sprinkle each with parsley. \n6. Bake at 400 degrees for about 10-15 minutes or until potatoes are crispy.\n7. Meanwhile, whisk remaining 8 eggs in a large mixing bowl. \n8. Add remaining 1 cup cheese, remaining salt and pepper, cooked bacon, red and orange bell peppers and milk. \n9. Stir to combine.\n10. Pour mixture evenly over each potato muffin crust. \n11. Sprinkle with additional salt, pepper and parsley if desired. \n12. Bake an additional 10-15 minutes or until eggs are cooked through.\nNote: Cream can be substituted for milk.',
    'name': 'Breakfast Muffins'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 1.5, unit: CUPS, name: 'butter'},
     {unitQuantity: 1.5, unit: CUPS, name: 'brown sugar'},
     {unitQuantity: 1.5, unit: CUPS, name: 'sugar'},
     {unitQuantity: 4, unit: UNITLESS, name: 'eggs'},
     {unitQuantity: 1.5, unit: CUPS, name: 'peanut butter'},
     {unitQuantity: 3, unit: CUPS, name: 'flour'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'baking powder'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'baking soda'},
     {unitQuantity: 0.25, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 3, unit: CUPS, name: 'rolled oats'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'vanilla'}
    ],
    'instructions': '1. Mix butter, sugar, eggs, and peanut butter. Mix well.\n2. Stir in flour, baking soda, baking powder, salt, rolled oats and vanilla. Spread on buttered sheet.\n3. Bake at 350 deg. F. for 10 min. only.\n4. Remove from oven, cool slightly. Frost with chocolate frosting.',
    'name': 'Chocolate Peanut Butter Fingers'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 4, unit: UNITLESS, name: 'eggs'},
     {unitQuantity: 2.5, unit: CUPS, name: 'sugar'},
     {unitQuantity: 7, unit: CUPS, name: 'milk'},
     {unitQuantity: 3, unit: CUPS, name: 'whipping cream'},
     {unitQuantity: 2.5, unit: TABLESPOONS, name: 'vanilla'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'salt'}
    ],
    'instructions': '1. Beat eggs till light.\n2. Add sugar gradually, beating till thick.\n3. Add remaining ingredients; mix well.\n4. Freeze in a 5-quart ice cream freezer. Makes 1 gal.',
    'name': 'Vanilla Ice Cream'
  }, {
    'author': 'samashby',
    'ingredients': [
     {unitQuantity: 2, unit: CUPS, name: 'sliced rhubarb in 1 inch pieces'},
     {unitQuantity: 2, unit: TABLESPOONS, name: 'water'},
     {unitQuantity: 1, unit: CUPS, name: 'sugar'},
     {unitQuantity: 2, unit: TABLESPOONS, name: 'butter'},
     {unitQuantity: 0.334, unit: CUPS, name: 'flour'},
     {unitQuantity: 2, unit: PINTS, name: 'whole strawberries'}
    ],
    'instructions': '1. Combine rhubarb, sugar, water, flour, and butter together and cook until rhubarb is soft.\n2. Cool about 5 min. and then add strawberries.\n3. Pour into baked pie shell and serve with whipped cream on top.',
    'name': 'Strawberry-Rhubarb Pie'
  }, {
    'author': 'samashby',
    'ingredients': [
     {packageQuantity: 1, package: '4-serving size packages', name: 'orange gelatin'},
     {unitQuantity: 1, unit: CUPS, name: 'boiling water'},
     {unitQuantity: 1, unit: PINTS, name: 'soft vanilla ice cream'},
     {unitQuantity: 1, unit: UNITLESS, name: 'chocolate crumb crust'},
     {unitQuantity: 1, unit: UNITLESS, name: 'whipped topping'},
     {unitQuantity: 1, unit: UNITLESS, name: 'candy corn'}
    ],
    'instructions': '1. Dissolve gelatin mix into boiling water, and stir in ice cream. Chill until slightly thickened, about 10 min.\n2. Pour mixture into crust and chill firm, about 2 hours.\n3. Garnish with whipped topping, and use candy corn (can substitute black licorice) to make a face on top.',
    'name': "Jack-o'-Lantern Pie"
  }, {
    'author': 'violet2flame',
    'ingredients': [
     {unitQuantity: 1.5, unit: CUPS, name: 'all-purpose flour'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'baking powder'},
     {unitQuantity: 0.25, unit: TEASPOONS, name: 'baking soda'},
     {unitQuantity: 0.5, unit: TEASPOONS, name: 'salt'},
     {unitQuantity: 0.25, unit: CUPS, name: 'butter, melted'},
     {unitQuantity: 0.25, unit: CUPS, name: 'olive oil'},
     {unitQuantity: 0.5, unit: CUPS, name: 'sugar'},
     {unitQuantity: 0.667, unit: CUPS, name: 'greek yogurt'},
     {unitQuantity: 1, unit: UNITLESS, name: 'lemon, zested and juiced'},
     {unitQuantity: 1, unit: UNITLESS, name: 'eggs'},
     {unitQuantity: 1, unit: TEASPOONS, name: 'vanilla extract'},
     {unitQuantity: 2, unit: TABLESPOONS, name: 'chia seeds'}
    ],
    'instructions': '1. Preheat oven to 400 degrees. Grease or line 12 muffin cups.\n2. In a medium bowl, whisk together flour, baking powder, baking soda, and salt. Set aside.\n3. In a large bowl, mix together olive oil, sugar, yogurt, and lemon juice and zest (or almond extract) until fully combined. Add egg and vanilla, and mix thoroughly. \n4. Add dry ingredients to wet ingredients in two additions, stirring until just combined. Fold in chia seeds. \n5. Pour batter into muffin liners, filling 3/4 of the way full. Bake for 13 to 15 minutes, until muffins are golden on top and a toothpick inserted in the center comes out clean.\nNote: Use lemon yogurt for lemon flavored muffins or vanilla yogurt for almond flavored muffins. Accordingly, substitute 1 lemon, zested and juiced for 2 tsp. almond extract.',
    'name': 'Chia Seed Muffins'
  }, {
    'author': 'kevinashby',
    'ingredients': [
     {packageQuantity: 2, package: 'Kevin blue cups', name: 'rice'},
     {packageQuantity: 4, package: 'Kevin blue cups', name: 'water'},
     {unitQuantity: 1.5, unit: TABLESPOONS, name: 'butter'},
     {unitQuantity: 12, unit: UNITLESS, name: 'eggs'},
     {packageQuantity: 1, package: 'cans', name: 'sweetened condensed milk'},
     {packageQuantity: 1, package: 'cans', name: 'evaporated milk'},
     {unitQuantity: 0.5, unit: CUPS, name: 'brown sugar'},
     {unitQuantity: 6, unit: CUPS, name: 'milk'},
     {unitQuantity: 1, unit: UNITLESS, name: 'cinnamon'},
     {unitQuantity: 1, unit: UNITLESS, name: 'nutmeg'},
     {unitQuantity: 1, unit: UNITLESS, name: 'pumpkin spice'},
     {unitQuantity: 1, unit: UNITLESS, name: 'vanilla'},
     {unitQuantity: 1, unit: UNITLESS, name: 'ginger'},
     {unitQuantity: 1, unit: UNITLESS, name: 'yogurt'},
     {unitQuantity: 1, unit: UNITLESS, name: 'raisins'}
    ],
    'instructions': '1. Cook rice in water and butter for about 20 min.\n2. Mix everything but milk for 5 min. with beater until bubbly.\n3. Add milk and beat again.\n4. Pour into large microwave bowl and add rice.\n5. Cook in microwave for 10-15 min, stirring occasionally.',
    'name': "Rice Pudding (Kevin's never the same)"
  }
]
