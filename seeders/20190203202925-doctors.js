'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Doctors', [
          {
              id: 1,
              password: "$2a$10$teXLz5E76.F7vIICoMmi4eDQawMddikhYMM6yUc2CxEgEKKIKu9o2",
              email: "doc1@ucare.dev",
              createdAt: new Date(),
              updatedAt: new Date(),
              firstName: 'Genrietta',
              lastName: 'Shmu',
              doctype: 'gastroenterologist',
          },

          {
              id: 2,
              password: "$2a$10$teXLz5E76.F7vIICoMmi4eDQawMddikhYMM6yUc2CxEgEKKIKu9o2",
              email: "doc2@ucare.dev",
              createdAt: new Date(),
              updatedAt: new Date(),
              firstName: 'Gasel',
              lastName: 'Umami',
              doctype: 'psychiatrist',
          },

          {
              id: 3,
              password: "$2a$10$teXLz5E76.F7vIICoMmi4eDQawMddikhYMM6yUc2CxEgEKKIKu9o2",
              email: "doc3@ucare.dev",
              createdAt: new Date(),
              updatedAt: new Date(),
              firstName: 'Doctor',
              lastName: 'Who',
              doctype: 'gastroenterologist',
          },

          {
              id: 4,
              password: "$2a$10$teXLz5E76.F7vIICoMmi4eDQawMddikhYMM6yUc2CxEgEKKIKu9o2",
              email: "doc4@ucare.dev",
              createdAt: new Date(),
              updatedAt: new Date(),
              firstName: 'Chao',
              lastName: 'Lin',
              doctype: 'psychiatrist',
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
