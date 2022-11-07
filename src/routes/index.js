const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    
    alert("Aqui irá la pantall de inicio de Gester");
    res.send('Aqui irá la pantall de inicio de Gester.');
});


module.exports = router;