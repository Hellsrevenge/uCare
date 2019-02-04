

'use strict';

module.exports = (sequelize, DataTypes) => {
    const PatDoc = sequelize.define('Pat_DocRelation', {
    }, {});
    PatDoc.associate = function (models) {
        PatDoc.belongsTo(models.Patients, {
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
