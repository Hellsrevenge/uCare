'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Appointments', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            subject: {
                type: Sequelize.STRING
            },
            date: {
                type: Sequelize.DATE
            },
            status: {
                type: Sequelize.INTEGER
            },
            duration: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            patientId: {
                type: Sequelize.INTEGER,
                references: {model: 'Patients', key: 'id'},
            },
            skypeUrl: {
                type: Sequelize.STRING
            },
            doctorId: {
                type: Sequelize.INTEGER,
                references: {model: 'Doctors', key: 'id'}
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Appointments');
    }
};
