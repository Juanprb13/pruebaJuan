'use strict'

const query = require('../Database/connection')

const Pedido = {

    getPedido: (req,res)=>{
        query.query('select * from pedido',(err,result)=>{
            if (err) {
                console.log('error :'+err);
                res.status(400).json({error:'Lo sentimos no se pudo realizar la operación'})
            }
            res.status(200).json(result)
        })
    },
    storePedido:(req,res)=>{
        const {fechaEntrega,Franja_horaria} = req.body
        const {direccion} = req.params
        console.log(direccionE,fechaEntrega,desde,hasta);
        
        query.query('insert into pedido set ?',{fechaEntrega:fechaEntrega,desde:desde,hasta:hasta,direccion_id:direccion},(err,result)=>{
            if (err) {
                res.status(400).json({error:'Lo sentimos no se pudo realizar la operación',err})
                throw err;
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
    getPedido: (req,res)=>{
        query.query('select * from pedido where id = ?',[req.params.id],(err,result)=>{
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
