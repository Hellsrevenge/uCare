'use strict';
module.exports = (sequelize, DataTypes) => {
    const Doctors = sequelize.define('Doctors', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        doctype: DataTypes.STRING,
    }, {});
    Doctors.associate = function (models) {
        // associations can be defined here
    };
    return Doctors;
};
