module.exports = dbPool => {
    const home = (users, callback) => {
        const query = "SELECT * FROM users";

        dbPool.query(query, (err, result) => {
            callback(err, result)
        });
    }

    return {
        home,
    }
}