// title - text
// priority - integer
// description - text
// done- boolean
// date - datetime

exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('todo').del()
        .then(function() {
            // Inserts seed entries
            const todos = [{
                title: 'Build a CRUD App',
                priority: 1,
                date: new Date()
            }, {
                title: 'Wash clothes',
                priority: 3,
                date: new Date()
            }, {
                title: 'Render a view',
                priority: 2,
                date: new Date()
            }, {
                title: 'Walk Moca and Vanilla',
                priority: 5,
                date: new Date()
            }];

            return knex('todo').insert(todos);

        });
};