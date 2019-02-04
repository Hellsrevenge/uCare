'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Appointments', [
            {
                subject: 'gastroenterologist',
                date: '2019-09-18 12:12:12',
                status: 1,
                patientId: 1,
                doctorId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                subject: 'psychiatrist',
                date: '2019-03-07 13:15:19',
                status: 2,
                patientId: 1,
                doctorId: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                subject: 'psychiatrist',
                date: '2019-03-07 13:15:19',
                status: 1,
                patientId: 2,
                doctorId: 4,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                subject: 'psychiatrist',
                date: '2019-05-06 16:15:25',
                status: 1,
                patientId: 3,
                doctorId: 4,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
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
