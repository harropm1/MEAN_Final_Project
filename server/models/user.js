'use strict';
//I don't know why these are all in caps, because it shouldn't matter, but here we are
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('USER', {
        ID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        USERNAME: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        EMAIL: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        PASSWORD: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        ISADMIN: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'USER'
    });
};