const pool = require("../config/dbconfig");

class rarityDao {
    constructor() {
        this.pool = pool;
    }


findAll(req, res) {
    // let sql = "SELECT * FROM consoles where deleted_at is NULL"; // simple statement unless you have a lot of joins.
    let sql = "SELECT * FROM rarity_table";
    this.pool.query(sql, function(err, rows) {
        if (err) {
            res.json({
                //error and message suppose to look like: "error", "message". It works withou
                error: true,
                message: err,
            });
        }
        res.json(rows);
    });
}
findID(req, res, id) {
    // let sql = "SELECT * FROM movies where deleted_at is NULL"; // simple statement unless you have a lot of joins.
    let sql = "SELECT * FROM rarity_table where id =?";
    this.pool.query(sql, [id], function(err, rows) {
        if (err) {
            res.json({
                //error and message suppose to look like: "error", "message". It works withou
                error: true,
                message: err,
            });
        }
        res.json(rows[0]);
    });
}

}


module.exports = rarityDao;