'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Contacts', [
            {
                firstName: 'David',
                lastName: 'Jones',
                email: 'aaa@gmail.com',
                phone: '12345678',
                createdAt: new Date(),
                updatedAt: new Date(),
                patientId: 1,
            },
            {
                firstName: 'Barbara',
                lastName: 'Smith',
                email: 'bbb@gmail.com',
                phone: '987654',
                createdAt: new Date(),
                updatedAt: new Date(),
                patientId: 2,
            },
            {
                firstName: 'Max',
                lastName: 'Davids',
                email: 'ccc@gmail.com',
                phone: '123459876',
                createdAt: new Date(),
                updatedAt: new Date(),
                patientId: 3,
            }
        ]);
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('People', null, {});
        */
    }
};
