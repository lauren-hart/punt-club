exports.up = (knex, Promise) => {
  return knex.schema.createTable('people', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('couple')
    table.string('email')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('people')
}
