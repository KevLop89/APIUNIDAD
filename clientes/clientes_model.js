
const autoIncrement = require("mongoose-auto-increment");
const { Timestamp } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

autoIncrement.initialize(mongoose.connection);
const equiposEstructura = new Schema({
        Tipo_equipo:{
            type:String,
            required:false,
        },
        Usuario_asignado:{
            type:String,
            required:false,
        },
        Serial:{
            type:String,
            required:false,
        },
        Marca:{
            type:String,
            required:false,
        },
        Modelo:{
            type:String,
            required:false,
        }
        ,
        Puesto:{
            type:String,
            required:false,
        },
        Piso:{
            type:String,
            required:false,
        },
        Area:{
            type: String, 
            required:false,
        },
        Sede:{
            type:String,
            required:false,
        },
        Ciudad_Municipio:{
            type:String,
            required:false,
        },
        
},

{
timestamps:true
});
equiposEstructura.plugin(autoIncrement.plugin, {
    model: "info_equipos", // collection or table name in which you want to apply auto increment
    field: "_id", // field of model which you want to auto increment
    startAt: 100, // start your auto increment value from 1
    incrementBy: 1, // incremented by 1
  });
  


module.exports = equiposEstructura;
