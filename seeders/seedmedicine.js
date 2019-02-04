'use strict';

module.exports = (sequelize, db, DataTypes) => {
    const test = () => {
        const sync = ()=> {
            return db.sync({force: true});
        }
        sync()
            .then(() => {
            return Promise.all([]);
        })
    }
    return test;
}
