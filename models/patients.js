'use strict';
module.exports = (sequelize, DataTypes) => {
    const Patients = sequelize.define('Patients', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
        age: DataTypes.INTEGER,
        conditions: DataTypes.STRING,
        medications: DataTypes.STRING,
    }, {});
    Patients.associate = function (models) {
        Patients.hasMany(models.Appointments, {
            onDelete: "cascade"
        });
        Patients.hasMany(models.Contacts, {
            onDelete: "cascade"
        });
    };
    return Patients;
};
