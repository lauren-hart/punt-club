exports.up = (knex, Promise) => {
  return knex.schema.createTable('rawdata', (table) => {
    table.increments('id').primary()
    table.string('resulted')
    table.string('txn_time')
    table.string('channel')
    table.string('description')
    table.string('bet_type')
    table.string('sub_type')
    table.string('amount')
    table.string('selections')
    table.string('total')
    table.string('result')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('rawdata')
}
