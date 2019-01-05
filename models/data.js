module.exports = dbPool => {
    const data = (offset, callback) => {
        const query = `SELECT * FROM data ORDER BY id LIMIT 10 OFFSET ${offset};`;

        dbPool.query (query, (error, result) => {
            callback(error, result);
        });
    }

    const getFromId = (id, callback) => {
        const query = `SELECT * FROM data WHERE id = ${id}`;

        dbPool.query (query, (error, result) => {
            callback (error, result);
        })
    }
    return {
        data,
        getFromId,
    }
}