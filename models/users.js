const sha256 = require("js-sha256");

module.exports = dbPool => {
    const registerSuccess = (input, callback) => {
        let query = `SELECT * FROM users WHERE username = '${input.username}';`;

        dbPool.query(query, (error, result) => {
            if (result.rows.length === 0) {
                let query2 = ` INSERT INTO users (username, name, password) VALUES ($1, $2, $3) RETURNING id, username;`;
                let values = [
                    input.username,
                    input.name,
                    sha256(input.password)
                ];

                dbPool.query(query2, values, (error, result) => {
                    callback (error, result.rows[0])
                }) 
            } else {
                let check = true;
                callback (error, result.rows[0].username, check)
            }
        })
    }

    const loginSuccess = (input, callback) => {
        
        let query = `SELECT * FROM users WHERE username = '${input.username}' AND password = '${sha256(input.password)}';`

        dbPool.query (query,  (error, result) => {
            if (result.rows.length === 0) {
                callback (error);
            } else {
                callback (error, result.rows[0])
            }
        })
    }

    return {
        registerSuccess,
        loginSuccess,
    }
}