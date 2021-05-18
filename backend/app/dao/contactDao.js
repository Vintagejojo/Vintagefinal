const pool = require("../config/dbconfig");

class ContactDao {
    constructor() {
        this.pool = pool;
    }


findAll(req, res) {
    // let sql = "SELECT * FROM consoles where deleted_at is NULL"; // simple statement unless you have a lot of joins.
    let sql = "SELECT * FROM email_list";
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
    let sql = "SELECT * FROM email_list where id =?";
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

create(req, res) {
    // let sql idk;
    let fields = Object.keys(req.body);
    // fields[ fields.indexOf('condition')] = 'condition'; 
    let values = Object.values(req.body);
    //Required Min Data
    if (!req.body.first_name || !req.body.last_name || !req.body.email_address || !req.body.phone_number) {
        res.json({
            error: true,
            message: "ERROR! There is missing data in this form!",
        });
    }
    //dynamically. dont send in NULLS using this!
    let sql = `INSERT INTO email_list(${fields.join(",")})VALUES(${Array(
  values.length
)
.fill("?")
.join(",")});`;
  this.pool.query(
      sql,
      values, //req.body.title, req.body.year, req.body.director_id, req.body.genre_id
      (err, rows) => {
          if (err) {
              res.json({
                  error: true,
                  message: err,
              });
          }
          res.json(rows);
      }
  );
}
}
module.exports = ContactDao;