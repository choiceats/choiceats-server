let dbm

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
};

exports.up = function(db) {
  return db.createTable('user_recipe_likes', {
    recipe_id: {
      type: 'int',
      unsigned: true,
      foreignKey: {
        name: 'user_recipe_likes_recipe_id_fk',
        table: 'recipes',
        mapping: 'id',
        rules: {
          onDelete: 'CASCADE'
        },
      }
    },
    user_id: {
      type: 'int',
      unsigned: true,
      foreignKey: {
        name: 'user_recipe_likes_user_id_fk',
        table: 'users',
        mapping: 'id',
        rules: {
          onDelete: 'CASCADE'
        },
      }
    },
  })
    .then(() => {
      return db.addColumn('recipes', 'description', {
        type: 'string',
        defaultValue: ''
      })
    })
    .then(() => {
      return db.addColumn('recipes', 'image_url', {
        type: 'string',
        defaultValue: ''
      })
    })
}

exports.down = function(db) {
  return db.dropTable('user_recipe_likes')
    .then(() => db.removeColumn('recipes', 'description'))
    .then(() => db.removeColumn('recipes', 'image_url'))
};

exports._meta = {
  "version": 1
};
