module.exports = function(sequelize, dataTypes) {
    let alias = "DataUsers";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        firstName: {
            type: dataTypes.STRING
        },
        LastName: {
            type: dataTypes.STRING
        },
        dni: {
            type: dataTypes.INTEGER
        },
        telephone: {
            type: dataTypes.INTEGER
        },
        birthDay: {
            type: dataTypes.DATE 
        },
        profession: {
            type: dataTypes.STRING
        },
        hobbie: {
            type: dataTypes.STRING
        },
        childrens: {
            type: dataTypes.STRING
        },
        teams: {
            type: dataTypes.STRING
        },
        user_id: {
            type: dataTypes.INTEGER
        },

    }

    let config = {
        tableName: "datausers",
        timetamps: false
    }

    let dataUsers = sequelize.define(alias, cols, config);

    return dataUsers;
}