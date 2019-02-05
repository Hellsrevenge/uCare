'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Patients', [
            {
                id: 1,
                password: "$2a$10$teXLz5E76.F7vIICoMmi4eDQawMddikhYMM6yUc2CxEgEKKIKu9o2",
                email: "leo@ucare.dev",
                createdAt: new Date(),
                updatedAt: new Date(),
                firstName: 'Leonardo',
                lastName: 'DiCaprio',
                image: 'http://www.gstatic.com/tv/thumb/persons/435/435_v9_bb.jpg',
                age: 44,
                conditions: 'Diarrhea',
                medications: 'Loperamide',
            },
            {
                id: 2,
                password: "$2a$10$teXLz5E76.F7vIICoMmi4eDQawMddikhYMM6yUc2CxEgEKKIKu9o2",
                email: "johnny@ucare.dev",
                createdAt: new Date(),
                updatedAt: new Date(),
                firstName: 'Johnny',
                lastName: 'Depp',
                image: 'http://www.gstatic.com/tv/thumb/persons/33623/33623_v9_bc.jpg',
                age: 55,
                conditions: 'ADHD',
                medications: 'Aderral',
            },
            {
                id: 3,
                password: "$2a$10$teXLz5E76.F7vIICoMmi4eDQawMddikhYMM6yUc2CxEgEKKIKu9o2",
                email: "lindsay@ucare.dev",
                createdAt: new Date(),
                updatedAt: new Date(),
                firstName: 'Lindsay',
                lastName: 'Lohan',
                image: 'https://www.google.com/search?tbm=isch&q=Lindsay+O%27Lohan',
                age: 44,
                conditions: 'Depression',
                medications: 'Paxil',
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
