'use strict';

var bcrypt = require("bcrypt-nodejs");

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
    //Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    Patients.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    Patients.hook("beforeCreate", function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
    return Patients;
};
