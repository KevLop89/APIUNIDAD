const Equipos = require('./clientes.dao');


exports.createCliente=(req,res,next)=>{
    const equipos={
        _id:req.body._id,
        Tipo_equipo:req.body.Tipo_equipo,
        Usuario_asignado:req.body.Usuario_asignado,
        Serial:req.body.Serial,
        Marca:req.body.Marca,
        Modelo:req.body.Modelo,
        Puesto:req.body.Puesto,
        Piso:req.body.Piso,
        Area:req.body.Area,
        Sede:req.body.Sede,
        Ciudad_Municipio:req.body.Ciudad_Municipio,
    };
    
    Equipos.create(equipos,(err,equipos)=>{
        if(err) return res.status(401).json({error:err});
        return res.status(200).json({mensaje:'Equipo creado exitosamente'});
    });
}

exports.getClientes=(req,res,next)=>{
    Equipos.get({},(err,equipos)=>{
        if (err) return res.status(401).json({error:err});
        return res.status(200).json({Equipos:equipos});
    });
}


exports.getCliente=(req,res,next)=>{
    Equipos.get({Serial:req.params.Serial},(err,equipos)=>{
        if(err) return res.status(401).json({error:err});
        return res.status(200).json({Equipos:equipos});
    });
}

exports.getCliente1=(req,res,next)=>{
    Equipos.get({_id:req.params._id},(err,equipos)=>{
        if(err) return res.status(401).json({error:err});
        return res.status(200).json({Equipos:equipos});
    });
}


exports.updateCliente=(req,res,next)=>{
    const equipos={
        _id:req.body._id,
        Tipo_equipo:req.body.Tipo_equipo,
        Usuario_asignado:req.body.Usuario_asignado,
        Serial:req.body.Serial,
        Marca:req.body.Marca,
        Modelo:req.body.Modelo,
        Puesto:req.body.Puesto,
        Piso:req.body.Piso,
        Area:req.body.Area,
        Sede:req.body.Sede,
        Ciudad_Municipio:req.body.Ciudad_Municipio,
    };
    Equipos.update({_id:req.params._id},equipos,(err,equipos)=>{
        if(err) return res.status(401).json({error:err});
        return res.status(200).json({mensaje:"Equipo Actualizado correctamente"});
    });
}

exports.updateCliente1=(req,res,next)=>{
    const equipos={
        _id:req.body._id,
        Tipo_equipo:req.body.Tipo_equipo,
        Usuario_asignado:req.body.Usuario_asignado,
        Serial:req.body.Serial,
        Marca:req.body.Marca,
        Modelo:req.body.Modelo,
        Puesto:req.body.Puesto,
        Piso:req.body.Piso,
        Area:req.body.Area,
        Sede:req.body.Sede,
        Ciudad_Municipio:req.body.Ciudad_Municipio,
    };
    Equipos.update({Serial:req.params.Serial},equipos,(err,equipos)=>{
        if(err) return res.status(401).json({error:err});
        return res.status(200).json({mensaje:"Resgistro Actualizado correctamente"});
    });
}

exports.deleteCliente=(req,res,next)=>{
    Equipos.delete({_id:req.params._id},(err,equipos)=>{
        if(err) return res.status(401).json({error:err});
        return  res.status(200).json({mensaje:"Resgistro Eliminado correctamente"});
    });
}