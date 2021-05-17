const mysql = require("mysql2");

const productSchema = new mysql.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    countInStock: {
        type: Number,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
});

const Product = mysql.model("product", productSchema);

module.exports = Product;



// SCHEMAS (ORMS) VS NATIVE DRIVERS (I.E. RAW SQL WE LEARNED IN CLASS)
// ORM = OBJECT RELATIONAL MAPPERS == IT'S JOB IS TO MATCH JAVASCRIPT OBJECT TO SQL STATEMENTS


//MAIN ORM FOR MYSQL = SEQUELIZE;  FOR MONGO = MONGOOSE;
//CONST PRODUCTSCHEMA = NEW MONGOOSE.SCHEMA({

//Name : {
    // type String:
    // required: true,
    // validation: f =>
// }
// })

/* CREATE TABLE users(
id INT AUTO_INCREMENT,
   first_name VARCHAR(100),
   last_name VARCHAR(100),
   email VARCHAR(50),
   password VARCHAR(20),
   location VARCHAR(100),
   dept VARCHAR(100),
   is_admin TINYINT(1),
   register_date DATETIME,
   PRIMARY KEY(id)
); */


// GETTING STUFF
// Select * from TABLE.
//vs
// Mongose (or sequelize.find());

//FORM DATA SUBMISSIONS or other HTTP request via fetch or axios etc;
//{
// const [name, setName] = useState()
// <input value = {name} name="name" onChange={(event) => setName(event.target.value)} />
//async function onSubmit() {
// let response = await fetch(url)   //http::localhost:3030/api/xxx
//BACKEND RECEIVES THIS REQUEST @ router.verb(req, res)
        // let x = Select * from TABLE
        // if (ok) res.json() else res.json(error)
//FRONT
// let products = await response.json()
// [{stuff... }]
// }
// }
// router.get
// router.post