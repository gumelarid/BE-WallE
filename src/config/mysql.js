const mysql = require("mysql")
const { Client } = require('pg');

let connection
const data = 'postgres://hndfwvytitbxwh:e4d9f063b83ae5acb3b98893630196f4d0b119247a75887aac2139c84f7de079@ec2-52-201-124-168.compute-1.amazonaws.com:5432/dd6bv3h3r9dolu'

if (process.env.DATABASE == "mysql") {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    })
} else {

    connection = new Client(data);
}


connection.connect((error) => {
    if (error) {
        throw error
    }
    console.log("You are now conected ...")
})

module.exports = connection
