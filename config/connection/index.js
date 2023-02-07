// const mysql         = require('mysql')
const config        = require('../config.json')
const { Sequelize } = require('sequelize')

// const db = async() => {

//     const connection=  mysql.createConnection({
//         host        : config.development.host,
//         user        : config.development.username,
//         password    : config.development.password,
//         database    : config.development.database
//     });

//     await connection.connect(function(error){
//         if(!error){
//             console.log('Database connected successfully')
//         }else{
//             console.log(`Cannot Connect to the database!`,error)
//             process.exit()
//         }
//     });
// }

const sequelize     = new Sequelize(config.development.database, config.development.username, config.development.password,
    {
        host: config.development.host,
        dialect: config.development.dialect,
        operatorsAliases: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        define: {
            underscored: true,
            freezeTableName: true, //use singular table name
            timestamps: false,  // I do not want timestamp fields by default
        },
        dialectOptions: {
            useUTC: false, //for reading from database
            dateStrings: true,
            typeCast: function (field, next) { // for reading from database
                if (field.type === 'DATETIME') {
                    return field.string()
                }
                return next()
            },
        },
        // timezone: '+07:00'
        timezone: "Asia/Jakarta",
    }
);

module.exports = sequelize