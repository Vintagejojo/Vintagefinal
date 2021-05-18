const daoClass = require("../../dao/synopsisDao");
const dao = new daoClass();

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    dao.findAll(req, res);
});

router.get("/:id", (req, res) => {
    dao.findbyID(req, res, req.params.id);
});

// /api/contactRoutes/create
// router.post("/create", (req, res) => {
//     console.log(req.body);

//     //res.json(req.body);
//     dao.create(req, res);
// });

module.exports = router;