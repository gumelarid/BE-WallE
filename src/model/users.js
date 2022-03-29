const connection = require("../config/mysql");

module.exports = {
    getAllUser: (sort, limit, offset) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM users WHERE user_status = 1 ORDER BY ? LIMIT ? OFFSET ?`, [sort, limit, offset], (error, result) => {
                !error ? resolve(result) : reject(new Error(error));
            });
        });
    },
    getUserByName: (search) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM users WHERE user_name LIKE '%${search}%'`, (error, result) => {
                !error ? resolve(result) : reject(new Error(error));
            });
        });
    },
    getUserCount: () => {
        return new Promise((resolve, reject) => {
            connection.query(
                "SELECT COUNT(*) as total FROM users ",
                (error, result) => {
                    !error ? resolve(result[0].total) : reject(new Error(error));
                }
            );
        });
    },

    getUserById: (id) => {
        return new Promise((resolve, reject) => {
            connection.query(
                "SELECT * FROM users WHERE user_id = ?",
                [id],
                (error, result) => {
                    if (!error) {
                        result.map(value => {
                            delete value.user_key
                            delete value.user_password
                        })
                        resolve(result)
                    } else {
                        reject(new Error(error))
                    }
                }
            );
        });
    },
    getUserByIdV2: (id) => {
        return new Promise((resolve, reject) => {
            connection.query(
                "SELECT * FROM users WHERE user_id = ?",
                id,
                (error, result) => {
                    !error ? resolve(result) : reject(new Error(error))
                }
            );
        });
    },
    checkPin: (id) => {
        return new Promise((resolve, reject) => {
            connection.query(
                "SELECT user_pin FROM users WHERE user_id = ?",
                id,
                (error, result) => {
                    if (!error) {
                        resolve(result)
                    } else {
                        reject(new Error(error))
                    }
                }
            );
        });
    },
    getPasswordById: (id) => {
        return new Promise((resolve, reject) => {
            connection.query(
                "SELECT user_password FROM users WHERE user_id = ?",
                id,
                (error, result) => {
                    if (!error) {
                        resolve(result)
                    } else {
                        reject(new Error(error))
                    }
                }
            );
        });
    },
    patchUser: (setData, id) => {
        return new Promise((resolve, reject) => {
            connection.query(
                "UPDATE users SET ? WHERE user_id = ?", [setData, id], (error, result) => {
                    if (!error) {
                        resolve(result);
                    } else {
                        reject(new Error(error));
                    }
                }
            )
        })
    },
    isUserExist: (email) => {
        return new Promise((resolve, reject) => {
            connection.query(
                "SELECT user_email FROM users WHERE user_email = $1",
                [email],
                (error, result) => {
                    !error ? resolve(result.rows) : reject(new Error(error));
                }
            );
        });
    },
    isPhoneExist: (phone) => {
        return new Promise((resolve, reject) => {
            connection.query(
                "SELECT user_phone FROM users WHERE user_phone = $1",
                [phone],
                (error, result) => {
                    !error ? resolve(result.rows) : reject(new Error(error));
                }
            );
        });
    },
    isPhone_OtherUserExist: (phone, user_id) => {
        return new Promise((resolve, reject) => {
            connection.query(
                "SELECT user_phone FROM users WHERE user_phone = ? AND user_id != ?",
                [phone, user_id],
                (error, result) => {
                    !error ? resolve(result) : reject(new Error(error));
                }
            );
        });
    },
    postUser: (setData) => {
        const { user_id, user_email, user_name, user_password, user_phone, user_picture, user_pin, user_role, user_status, user_balance, user_created_at } = setData
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO users(user_id,user_email,user_name,user_password,user_phone,user_picture,user_pin,user_role,user_status,user_balance,user_created_at) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10,$11)", [user_id, user_email, user_name, user_password, user_phone, user_picture, user_pin, user_role, user_status, user_balance, user_created_at], (error, result) => {
                if (!error) {
                    delete setData.user_password;
                    resolve(setData);
                } else {
                    reject(new Error(error));
                }
            });
        });
    },
    checkUser: (email) => {
        return new Promise((resolve, reject) => {
            connection.query(
                "SELECT * FROM users WHERE user_email = $1",
                [email],
                (error, result) => {
                    !error ? resolve(result.rows) : reject(new Error(error))
                }
            )
        })
    },
    checkKey: (keys) => {
        return new Promise((resolve, reject) => {
            connection.query(
                "SELECT * FROM users WHERE user_key = $1",
                [keys],
                (error, result) => {
                    !error ? resolve(result) : reject(new Error(error))
                }
            )
        })
    },
    updating: (setData, email) => {
        return new Promise((resolve, reject) => {
            connection.query(
                "UPDATE users SET ? WHERE user_email = ?",
                [setData, email],
                (error, result) => {
                    if (!error) {
                        const newResult = {
                            user_email: email,
                            ...setData,
                        }
                        resolve(newResult)
                    } else {
                        reject(new Error(error))
                    }
                }
            )
        })
    }
}