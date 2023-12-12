const Sequelize = require('sequelize')

const dbConfig = require('../config/database')

const connection = new Sequelize(dbConfig)

try{
    connection.authenticate();
    console.log("conectado");
} catch(error){
    console.error("erro". error)
}