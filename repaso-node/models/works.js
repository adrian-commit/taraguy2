module.exports = function(sequelize, dataTypes) {
    let alias = "works";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        Name: {
            type: dataTypes.STRING
        },
        type: {
            type: dataTypes.STRING
        },
        date: {
            type: dataTypes.STRING
        },
        timeBeginning: {
            type: dataTypes.DATE
        },
        timeEnd: {
            type: dataTypes.DATE
        },
        timePause: {
            type: dataTypes.DATE
        },
        timeContinue: {
            type: dataTypes.DATE
        },
        
    }

    let config = {
        tableName: "works",
        timetamps: false
    }

    let works = sequelize.define(alias, cols, config);

    return works;
}