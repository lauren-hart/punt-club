exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('rawdata').del()
    .then(function () {
      // Inserts seed entries
      return knex('rawdata').insert([
        {id: 4401, resulted: '27/08/2018', txn_time: '26/08/2018  9:12:00 PM', channel: 'I', description: 'Fulham v Burnley 3667 Head to Head', bet_type: 'FPW', sub_type: '', amount: 7, selections: '2 Burnley @$4.10', total: 7, result: 'Not winner'},
        {id: 4402, resulted: '26/08/2018', txn_time: '26/08/2018  9:10:00 PM', channel: 'I', description: 'Watford v Crystal Palace 3755 Head to Head-Live betting', bet_type: 'FPW', sub_type: '', amount: 5, selections: '3 Draw @$3.10', total: 5, result: 'Not winner'}

      ])
    })
}
