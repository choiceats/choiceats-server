'use strict'

var dbm
var type
var seed

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate
  type = dbm.dataType
  seed = seedLink
}

exports.up = function (db) {
  return db.createTable('users', {
    id: { type: 'int', unsigned: true, primaryKey: true, autoIncrement: true },
    first_name: 'string',
    last_name: 'string',
    access_token: 'string',
    email: { type: 'string', notNull: true, unique: true }
  })
  .then(() => {
    return db.createTable('recipes', {
      id: { type: 'int', unsigned: true, notNull: true, primaryKey: true, autoIncrement: true },
      name: 'string',
      author_id: {
        type: 'int',
        unsigned: true,
        foreignKey: {
          name: 'recipes_users_id_fk',
          table: 'users',
          mapping: 'id',
          rules: {
            onDelete: 'NO ACTION'
          }
        }
      },
      ingredients: 'string',
      instructions: 'string'
    })
  })
}

exports.down = function (db) {
  return db.dropTable('recipes')
    .then(() => db.dropTable('users'))
}

exports._meta = {
  "version": 1
}
