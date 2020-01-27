'use strict'
const query  = require('../Database/connection')
const Direccion = {
    DireccionByUser:(req,res)=>{
        query.query('Select * from direccion where usuario_id = ? ',[req.params.id],(err,result)=>{
            if (err) {
                res.status(500).json({message:"Vertifica que el dato enviado sea numerico "})
            }
            res.status(200).json(result)
        })
    },
    save:(req,res)=>{
        const {id} = req.params
        const {direccion} = req.body
        query.query('select * from usuario where id = ? ',[id],(err,response)=>{
            if (err){
                res.status(500)
            } 

            if (response.length == true) {
                
                query.query('INSERT direccion SET usuario_id = ? , direccion = ? ',[id,direccion],(error,result)=>{
                    if (err) res.status(500)

                    res.status(200).json({message:"Dirrecion asignada correctamente"})
                })
            }else{

                res.status(200).json({message:"este usuario no existe"})
            }
        })
    }
}
 module.exports = Direccion