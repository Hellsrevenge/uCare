'use strict';
module.exports = (sequelize, DataTypes) => {
    const Appointments = sequelize.define('Appointments', {
        subject: DataTypes.STRING,
        date: DataTypes.DATE,
        status: DataTypes.INTEGER,
        doctorId: {
            type: DataTypes.INTEGER,
            references: {model: 'Doctors', key: 'id'}
        },
        patientId: {
            type: DataTypes.INTEGER,
            references: {model: 'Patients', key: 'id'}
        }
    }, {});
    Appointments.associate = function (models) {
        Appointments.belongsTo(models.Patients, {
            foreignKey: {
                allowNull: false
            }
        });
        Appointments.belongsTo(models.Doctors, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Appointments;
};
