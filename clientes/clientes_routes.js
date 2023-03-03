const Equipos = require ('./clientes_controller');
module.exports=(router)=>{
    //RUTA PARA AGREGAR REGISTROS
    router.post('/agregar',Equipos.createCliente);
    //RUTA PARA BUSCAR TODOS LOS REGISTROS REGISTROS
    router.get('/info_total',Equipos.getClientes);
    //RUTA PARA BUSCAR UN REGISTRO POR CEDULA REGISTROS
    router.get('/buscar_info_serial/:Serial',Equipos.getCliente);
    //RUTA PARA BUSCAR UN REGISTRO POR CEDULA REGISTROS
    router.get('/buscar_info/:_id',Equipos.getCliente1);
    //RUTA PARA ACTUALIZAR REGISTROS
    router.put('/update/:numero_documento',Equipos.updateCliente);
     //RUTA PARA ACTUALIZAR REGISTROS
    router.put('/update_Serial/:Serial',Equipos.updateCliente1);
    //RUTA PARA ELIMINAR REGISTROS
    router.delete('/delete/:_id',Equipos.deleteCliente);
}