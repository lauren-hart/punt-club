exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, resulted: 'rowValue1', txn_time: 'rowValue1', channel: 'rowValue1', description: 'rowValue1', bet_type: 'rowValue1', sub_type: 'rowValue1', amount: 'rowValue1', selections: 'rowValue1', total: 'rowValue1', result: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ])
    })
}
