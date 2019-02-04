'use strict';
module.exports = (sequelize, DataTypes) => {
    const Contacts = sequelize.define('Contacts', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        patientId: {
            type: DataTypes.INTEGER,
            references: {model: 'Patients', key: 'id'}
        }
    }, {});
    Contacts.associate = function (models) {
        Contacts.belongsTo(models.Patients, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Contacts;
};
