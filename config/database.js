const mongoose = require('mongoose');
const chalk = require('chalk');
const dbURL =require('./properties').DB;


const connected = chalk.bold.cyan;
const error =chalk.bold.red;
const temination=chalk.bold.magenta;

module.exports =()=>{
mongoose.connect(dbURL,{useNewUrlParser: true})
.then(()=>console.log(connected('Mongo conectado :',dbURL)))
.catch( err =>console.log(error(`La conexion a tenido error: ${err}`)))
process.on('SIGINT',()=>{
    mongoose.connection.close(()=>{
        console.log('Mongoose esta desconectado');
        process.exit(0)
    });
});
}

