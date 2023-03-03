const express = require('express');
const bodyParser= require('body-parser')
const properties = require('./config/properties');
const db = require('./config/database');
const clientesRoutes= require('./clientes/clientes_routes');
db();
const bodyParserJSON=bodyParser.json();
const bodyParserURLEncoded= bodyParser.urlencoded({extended:true});
const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

const router = express.Router();
app.use('/api',router);
clientesRoutes(router);



app.listen(process.env.PORT || properties.PORT,()=>console.log(`El servidor esta corriendo en el puerto: ${properties.PORT}`));