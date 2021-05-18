const express = require("express"); // gives us access to express
const app = express(); 

const router = require("./app/routes/router");
const cors = require("cors");         //gives us access to cors
     //all more flexible for api to. calls router file


app.use(express.json());
app.use(express.urlencoded({extended: true}));//formly now as "body-parser. Body-parser is now depreciated and built into the express package."
app.use(cors());


app.get("/", (req, res) => {
    res.json({
        "Console Synopsis": "http://localhost:3075/api/console_synopsis",
        "Console Table Master": "http://localhost:3075/api/console_table",
        "Email List": "http://localhost:3075/api/email_list",
        "Rarity TAble": "http://localhost:3075/api/rarity_table",
    });
});

const PORT = 3075;
app.listen(PORT, () => {
    console.log(`Server on PORT: ${PORT}`);
});




app.use("/api", router);