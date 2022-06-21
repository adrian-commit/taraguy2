module.exports = function(sequelize, dataTypes) {
    let alias = "users_service";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        service_id: {
            type: dataTypes.INTEGER
        },
        users_id: {
            type: dataTypes.INTEGER
        },

    }

    let config = {
        tableName: "users_service",
        timetamps: false
    }

    let users_service = sequelize.define(alias, cols, config);

    return users_service;
}