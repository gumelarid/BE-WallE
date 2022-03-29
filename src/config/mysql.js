const mysql = require("mysql")
const { Client } = require('pg');
const fs = require('fs')

let connection

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

    connection = new Client({
        user: "hndfwvytitbxwh",
        password: "e4d9f063b83ae5acb3b98893630196f4d0b119247a75887aac2139c84f7de079",
        database: "dd6bv3h3r9dolu",
        port: 5432,
        host: "ec2-52-201-124-168.compute-1.amazonaws.com",
        ssl: { rejectUnauthorized: false }
    });

    connection.connect(err => {
        if (err) {
            console.error('error connecting', err.stack)
        } else {
            console.log('connected')

        }
    })
}




module.exports = connection