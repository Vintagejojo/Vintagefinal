let domain = 'http://localhost:3075/api/'

let apiRoutes = {
	getProducts: domain.concat('console_table'),
	getProductsById: (id) => domain.concat(`console_table/${id}`),
	postEmailList: domain.concat('/email_list/create')
};


/* 
router.use("/console_synopsis", require("./api/synopsisRoutes")); 
router.use("/console_table", require("./api/mastertableRoutes")); 
router.use("/email_list", require("./api/contactRoutes")); 
router.use("/rarity_table", require("./api/rarityRoutes")); 
*/




export default apiRoutes