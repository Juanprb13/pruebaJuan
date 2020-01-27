'use strict'

const query = require('../Database/connection')

const Pedido = {

    getPedido: (req,res)=>{
        query.query('select pedido.id,fechaEntrega,desde,hasta,direccion_id ,nombre,apellido,telefono,email,direccion from pedido,direccion INNER JOIN usuario ON usuario.id = direccion.usuario_id ',(err,result)=>{
            if (err) {
                res.status(400).json({error:'Lo sentimos no se pudo realizar la operación'})
            }
            let data = []
            // result.forEach((element,i) => {
            //     let direccionID = element.direccion_id
                
            //     query.query('SELECT FROM direccion ',[direccionID],(err,response)=>{
            //         if (err) {
            //             res.status(200).json({message:"no hay direcciones asignadas"})
            //         }
            //         result[i].user =response                    
            //     })
            // });
            console.log(result);     
            res.status(200).json(result)
        })
    },
    storePedido:(req,res)=>{
        const {fechaEntrega,desde,hasta} = req.body
        const {direccion} = req.params
        
        query.query('insert into pedido set ?',{fechaEntrega:fechaEntrega,desde:desde,hasta:hasta,direccion_id:direccion},(err,result)=>{
            if (err) {
                res.status(400).json({error:'Verifica que el id de la dirección exista y tambien el usuario'})
            }
            res.status(200).json(result) 
        })
    },
    updatePedido : (req,res)=>{
        console.log(req.params);
        
        const {id,address,date} = req.params

        query.query('UPDATE pedido SET  direccionE= ?, Franja_horaria = ?  where id = ? ', [address,date,id],(err,result)=>{
            if (err) {
                throw err
            }
            res.status(200).json({message:'Datos actualizados correctamente'})
        })
    },
    getPedidoById: (req,res)=>{
        query.query('select pedido.id,fechaEntrega,desde,hasta,direccion_id ,nombre,apellido,telefono,email,direccion from pedido,direccion INNER JOIN usuario ON usuario.id = direccion.usuario_id  where pedido.id = ?',[req.params.id],(err,result)=>{
            if (err) {
                throw err
            }            
            if (result.length ==0) {
                res.status(200).json({message:"El pedido que estas busacando no existe"})
            }else{
                res.status(200).json(result) 
            }   
        })
    }
}
module.exports = Pedido
