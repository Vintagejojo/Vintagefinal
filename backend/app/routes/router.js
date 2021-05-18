const express = require("express");
const router = express.Router(); //express has its own internal router.  We are using express' internal ability to chain routers together

// api/ blah blah

router.use("/console_synopsis", require("./api/synopsisRoutes")); 
router.use("/console_table", require("./api/mastertableRoutes")); 
router.use("/email_list", require("./api/contactRoutes")); 
router.use("/rarity_table", require("./api/rarityRoutes")); 

module.exports = router;