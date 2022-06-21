module.exports = function(sequelize, dataTypes) {
    let alias = "Cliente";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        name: {
            type: dataTypes.STRING
        },
        businessName: {
            type: dataTypes.STRING
        },
        typePerson: {
            type: dataTypes.STRING
        },
        cuit: {
            type: dataTypes.STRING
        },
        officesQuantity: {
            type: dataTypes.INTEGER 
        },
        staffQuantity: {
            type: dataTypes.INTEGER
        },
        typeActivity: {
            type: dataTypes.STRING
        },
        timeExerciseEnd: {
            type: dataTypes.DATE
        },

    }

    let config = {
        tableName: "clients",
        timetamps: false
    }

    let Cliente = sequelize.define(alias, cols, config);

    return Cliente;
}