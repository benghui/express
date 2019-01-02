const sha256 = require('js-sha256');
const Salt = 'hypeno';

module.exports = db => {
    const home = (req, res) => {
        db.users.home (req.params, (err, result) => {
            res.render ('home', { test: result.rows })
        })
    }

    return {
        home,
    }
}

