'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
}

exports.up = function (db) {
  return db.addColumn('users', 'password', {
    type: 'string',
    notNull: true,
    defaultValue: ''
  }).then(() => {
    return db.addColumn('users', 'salt', {
      type: 'string',
      notNull: true,
      defaultValue: ''
    })
  }).then(() => {
    return db.addColumn('users', 'expires', {
      type: 'timestamp',
      notNull: true,
      defaultValue: 'now()'
    })
  })
}

exports.down = function (db) {
  return db.removeColumn('users', 'password')
    .then(() => db.removeColumn('users', 'salt'))
    .then(() => db.removeColumn('users', 'timestamp'))
}

exports._meta = {
  "version": 1
};
