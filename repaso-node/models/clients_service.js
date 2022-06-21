module.exports = function(sequelize, dataTypes) {
    let alias = "clients_service";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        service_id: {
            type: dataTypes.INTEGER
        },
        client_id: {
            type: dataTypes.INTEGER
        },

    }

    let config = {
        tableName: "clients_service",
        timetamps: false
    }

    let clients_service = sequelize.define(alias, cols, config);

    return clients_service;
}