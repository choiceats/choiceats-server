'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('tags', {
    id: {
      type: 'int',
      unsigned: true,
      primaryKey: true, 
      autoIncrement: true
    },
    name: {
      type: 'string'
    }
  })
    .then(() => {
      db.createTable('recipe_tags', {
        recipe_id: {
          type: 'int',
          unsigned: true,
          foreignKey: {
            name: 'recipe_tags_recipe_id_fk',
            table: 'recipes',
            mapping: 'id',
            rules: {
              onDelete: 'CASCADE'
            },
          }
        },
        tag_id: {
          type: 'int',
          unsigned: true,
          foreignKey: {
            name: 'recipe_tags_user_id_fk',
            table: 'tags',
            mapping: 'id',
            rules: {
              onDelete: 'CASCADE'
            },
          }
        },
    })
  });
};

exports.down = function(db) {
  return db.dropTable('recipe_tags')
    .then(() => db.dropTable('tags'))
};

exports._meta = {
  "version": 1
};
