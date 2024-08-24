const express = require('express');
const con = require('../controllers/myController');
const routers = express.Router();

routers.get('/', con.defaultCon);
routers.post('/add', con.addCon);
routers.get('/update/:id', con.updateCon);
routers.post('/edit', con.editCon);
routers.get('/delete/:id', con.deleteCon);  
routers.get('/view/:id', con.viewCon); 

module.exports = routers;
