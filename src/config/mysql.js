const mysql = require("mysql")
const { Client } = require('pg');
const fs = require('fs')

let connection
const config = {
    connectionString: 'postgres://hndfwvytitbxwh:e4d9f063b83ae5acb3b98893630196f4d0b119247a75887aac2139c84f7de079@ec2-52-201-124-168.compute-1.amazonaws.com:5432/dd6bv3h3r9dolu?sslmode=require',
    // Beware! The ssl object is overwritten when parsing the connectionString
    ssl: {
        rejectUnauthorized: false,
        ca: fs.readFileSync('/path/to/server-certificates/root.crt').toString(),
    },
}

if (process.env.DATABASE == "mysql") {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    })

    connection.connect((error) => {
        if (error) {
            throw error
        }
        console.log("You are now conected ...")
    })
} else {

    const connection = new Client(config)

    connection.connect(err => {
        if (err) {
            console.error('error connecting', err.stack)
        } else {
            console.log('connected')
            connection.end()
        }
    })
}




module.exports = connection
