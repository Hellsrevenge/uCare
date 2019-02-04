'use strict';
module.exports = (sequelize, DataTypes) => {
    const Medicine = sequelize.define('Medicine', {
        name: DataTypes.STRING,
        sideEffects: DataTypes.STRING, 
        usedFor: DataTypes.STRING
    }, {});
    Medicine.associate = function (models) {
        // associations can be defined here

    };
    return Medicine;
};
