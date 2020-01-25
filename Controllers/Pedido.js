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
        const {direccionE,fechaEntrega,Franja_horaria} = req.body
        console.log(direccionE,fechaEntrega,Franja_horaria);
        
        query.query('insert into pedido set ?',{direccionE:direccionE,fechaEntrega:fechaEntrega,Franja_horaria:Franja_horaria},(err,result)=>{
            if (err) {
                res.status(400).json({error:'Lo sentimos no se pudo realizar la operación',err})
                throw err;
            }
            res.status(200).json(result) 
        })
    }
}
module.exports = Pedido
