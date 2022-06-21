module.exports = function(sequelize, dataTypes) {
    let alias = "users";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        userName: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.BINARY(20)
        },
        admin: {
            type: dataTypes.STRING
        },
        
    }

    let config = {
        tableName: "users",
        timetamps: false
    }

    let users = sequelize.define(alias, cols, config);

    return users;
}