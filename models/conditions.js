'use strict';
module.exports = (sequelize, DataTypes) => {
    const Conditions = sequelize.define('Conditions', {
        name: DataTypes.STRING,
        symptoms: DataTypes.STRING,
    }, {});
    Conditions.associate = function (models) {
        // associations can be defined here
        Conditions.belongsToMany(models.Patients, {
            foreignKey: {
                allowNull: false
            }
        })
    };
    return Conditions;
};
