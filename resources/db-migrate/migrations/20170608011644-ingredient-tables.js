
let dbm

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate
}

exports.up = function (db) {
  return db.createTable('ingredients', {
    id: { type: 'int', unsigned: true, primaryKey: true, autoIncrement: true },
    name: { type: 'string', unique: true, notNull: true }
  })
  .then(() => {
    return db.removeColumn('recipes', 'ingredients')
  })
  .then(() => {
    return db.createTable('units', {
      id: { type: 'int', unsigned: true, primaryKey: true, autoIncrement: true },
      name: { type: 'string', notNull: true },
      abbr: { type: 'string' }
    })
  })
  .then(() => {
    return db.createTable('recipe_ingredients', {
      recipe_id: {
        type: 'int',
        unsigned: true,
        foreignKey: {
          name: 'recipe_ingredients_recipe_id_fk',
          table: 'recipes',
          rules: {
            onDelete: 'CASCADE'
          },
          mapping: 'id'
        }
      },
      ingredient_id: {
        type: 'int',
        unsigned: true,
        foreignKey: {
          name: 'recipe_ingredients_ingredient_id_fk',
          table: 'ingredients',
          rules: {
            onDelete: 'CASCADE'
          },
          mapping: 'id'
        }
      },
      unit_id: {
        type: 'int',
        unsigned: true,
        foreignKey: {
          name: 'recipe_ingredients_unit_id_fk',
          table: 'units',
          rules: {
            onDelete: 'CASCADE'
          },
          mapping: 'id'
        }
      },
      quantity: { type: 'decimal', unsigned: true, default: 1 }
    })
  })
}

exports.down = function (db) {
  return db.dropTable('recipe_ingredients')
    .then(() => db.dropTable('units'))
    .then(() => db.addColumn('recipes', 'ingredients', 'string'))
    .then(() => db.dropTable('ingredients'))
}

exports._meta = {
  'version': 1
}
