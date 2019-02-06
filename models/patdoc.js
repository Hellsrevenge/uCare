
'use strict';

module.exports = (sequelize, DataTypes) => {
    const PatDoc = sequelize.define('PatDoc', {
    }, {});
    PatDoc.associate = function (models) {
        PatDoc.belongsTo(models.Patients, {
            foreignKey: {
                allowNull: false
            }
        });

        PatDoc.hasMany(models.Appointments,{
            foreignKey: {
                allowNull: false
            }
        });

        PatDoc.belongsTo(models.Doctors, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return PatDoc;
};
