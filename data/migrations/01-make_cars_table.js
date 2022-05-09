exports.up = function (knex) {
  return knex.schema.createTable('cars', t => {
    t.increments()
    t.string('vin').notNullable().unique()
    t.string('make').notNullable()
    t.string('model').notNullable()
    t.integer('mileage').notNullable()
    t.string('title')
    t.string('transmission')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars')
}
