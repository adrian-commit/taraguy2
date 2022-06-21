module.exports = function(sequelize, dataTypes) {
    let alias = "Service";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        type: {
            type: dataTypes.STRING
        },
        tarea_id: {
            type: dataTypes.INTEGER
        },

    }

    let config = {
        tableName: "service",
        timetamps: false
    }

    let service = sequelize.define(alias, cols, config);

    return service;
}