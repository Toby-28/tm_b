const mysql= require('mysql')

const pool= mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'tm_b',
    // port: process.env.dbport,
    password: '',
    connectionLimit: 10
})

module.exports= pool