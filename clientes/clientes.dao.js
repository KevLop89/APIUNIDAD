const mongoose = require ('mongoose');
const equiposEstructura=require('./clientes_model');

equiposEstructura.statics={
    create: function(data, cb){
        const cliente = new this(data);
        cliente.save(cb);
    },
    get: function(query,cb){
        this.find(query,cb);
    },
    getByNombre: function(query,cb){
        this.find(query,cb) ;
    }
    ,
    update:function(query,updateData,cb){
        this.findOneAndUpdate(query,{$set:updateData},{new:true},cb);
    }
    ,
    delete:function(query,cb){
        this.findOneAndDelete(query,cb);
    }

    
}

const equiposModel = mongoose.model('info_equipos',equiposEstructura);
module.exports = equiposModel;
