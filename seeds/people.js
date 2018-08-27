exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        {id: 1, Name: 'Lauren', Couple: 'Bielby/Hart', Email: ''},
        {id: 2, Name: 'Thomas', Couple: 'Bielby/Hart', Email: ''},
        {id: 3, Name: 'Steven', Couple: 'Scags', Email: ''},
        {id: 4, Name: 'Hannah', Couple: 'Scags', Email: ''},
        {id: 5, Name: 'Saul', Couple: 'Burningham/Sim', Email: ''},
        {id: 6, Name: 'Lucy', Couple: 'Burningham/Sim', Email: ''}
      ])
    })
}
