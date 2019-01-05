module.exports = db => {
    const data = (req, res) => {
        
        const page = req.query.page || 1
        const offset = (page - 1) * 10;

        db.data.data (offset, (error, result) => {
        
            if (error) {
                console.error("Error getting data", error)
                res.status(500).render("error/error500");
            } else {
                res.render ('data/data', { data: result.rows });
            }
        })
    }

    const getFromId = (req, res) => {
        db.data.getFromId(req.params.id, (error, result) => {
            if (error) {
                console.error("Error getting data", error)
                res.status(500).render("error/error500");
            } else {
                res.render('data/getfromid' , { data: result.rows })
            }
            
        })
    }

    return {
        data,
        getFromId,
    }
}