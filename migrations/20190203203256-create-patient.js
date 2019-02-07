'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Patients', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            firstName: {
                type: Sequelize.STRING
            },
            lastName: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING
            },
            image: {
                type: Sequelize.STRING
            },
            age: {
                type: Sequelize.INTEGER
            },
            conditions: {
                type: Sequelize.STRING
            },
            medications: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            doctorId: {
                type: Sequelize.INTEGER,
                references: {model: 'Doctors', key: 'id'}
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Patients');
    }
};
