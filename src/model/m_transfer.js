const connection = require("../config/mysql");

module.exports = {
    postTransfer: (setData) => {
        const { transfer_id, user_id_a, user_id_b, user_role, transfer_note, transfer_amount, transfer_created_at } = setData
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO transfer(transfer_id, user_id_a, user_id_b, user_role, transfer_note, transfer_amount, transfer_created_at) VALUES($1, $2, $3, $4, $5, $6, $7)", [transfer_id, user_id_a, user_id_b, user_role, transfer_note, transfer_amount, transfer_created_at], (error, result) => {

                if (!error) {
                    resolve(setData);
                } else {
                    reject(new Error(error));
                }
            })
        })
    },
    getTransferByUser: (id, limit, offset) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM transfer WHERE user_id_a = $1 ORDER BY transfer_created_at DESC LIMIT $2 OFFSET $3`, [id, limit, offset], (error, result) => {

                !error ? resolve(result.rows) : reject(new Error(error))
            })
        })
    },
    getWeekBalance: (user_id, user_role) => {
        return new Promise((resolve, reject) => {

            connection.query("SELECT SUM(transfer_amount) AS total FROM transfer WHERE transfer_created_at >= DATE(NOW()) - INTERVAL '7 DAY' AND user_id_a = $1 AND user_role = $2", [user_id, user_role], (error, result) => {

                !error ? resolve(result.rows) : reject(new Error(error))
            })
        })
    },
    getDailyBalance: (user_id, user_role) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT DATE(transfer_created_at) as date, SUM(transfer_amount) AS total FROM transfer WHERE transfer_created_at >= DATE(NOW()) - INTERVAL '7 DAY' AND user_id_a = $1 AND user_role = $2 GROUP BY DATE(transfer_created_at)", [user_id, user_role], (error, result) => {

                !error ? resolve(result.rows) : reject(new Error(error))
            })
        })
    },
    getTransferCount: (id) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT COUNT(*) AS total FROM transfer WHERE user_id_a = $1', [id], (error, result) => {
                !error ? resolve(result.rows[0].total) : reject(new Error(error))
            })
        })
    },
}