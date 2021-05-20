const pool = require("../config/dbconfig");

class mastertableDao {
    constructor() {
        this.pool = pool;
    }


findAll(req, res) {
    // let sql = "SELECT * FROM consoles where deleted_at is NULL"; // simple statement unless you have a lot of joins.
    let sql = "SELECT * FROM console_table ct JOIN console_synopsis cs ON ct.game_id = cs.game_id JOIN rarity_table rt ON ct.game_id = rt.game_id";
    // let sql = "SELECT * FROM console_table ct JOIN console_synopsis cs ON ct.game_id = cs.game_id";

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
findbyID(req, res, id) {
    // let sql = "SELECT * FROM movies where deleted_at is NULL"; // simple statement unless you have a lot of joins.
    let sql = `SELECT * 
    FROM console_table ct
    JOIN console_synopsis cs ON ct.game_id = cs.game_id JOIN rarity_table rt ON ct.game_id = rt.game_id 
    WHERE ct.game_id =?`;
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


module.exports = mastertableDao;