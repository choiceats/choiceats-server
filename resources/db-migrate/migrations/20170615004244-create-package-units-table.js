let dbm

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate
}

exports.up = function(db) {
  return db.createTable('package_units', {
    id: { type: 'int', unsigned: true, primaryKey: true, autoIncrement: true },
    name: { type: 'string', unique: true, notNull: true },
    quantity: { type: 'decimal', unsigned: true, default: 1 },
    unit_id: {
      type: 'int',
      unsigned: true,
      foreignKey: {
        name: 'package_units_unit_id_fk',
        table: 'units',
        rules: {
          onDelete: 'NO ACTION'
        },
        mapping: 'id'
      }
    }
  })
}

exports.down = function(db) {
  return db.dropTable('package_units')
}

exports._meta = {
  "version": 1
}
