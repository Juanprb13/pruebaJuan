const query = require('../Database/connection')

const Usuario = {
    getUsuarios:(req,res)=>{
        query.query('select * from usuario',(err,result)=>{
            if (err) {
                throw err
            }
            res.status(200).json(result)
        })
    },
    storeUsuario:(req,res)=>{
        const {nombre,apellido,telefono,email} = req.body
        let emailFlag = false
        query.query('SELECT * from usuario where email = ?',[email],(err,result)=>{
            if (err) {
                res.status(200).json({message:"Verifica que todos los campos hayan sido enviados"})
            }
            if (result.length) {
                emailFlag = true
            }
            
        })
        if (emailFlag == false) {
            query.query('Insert  usuario  SET nombre = ? , apellido = ?,telefono = ?  ,email= ? ',[nombre,apellido,telefono,email],(err,result)=>{
                if (err) {
                    res.status(500).json({message:"Verifica que todos los campos hayan sido enviados"})
                }
                res.status(200).json({message:"Usuario creado correctamente"})
            })
            
        }else{
            res.status(200).json({message:"Este correo ya esta en uso"})
        }
    },
    updateUsuario:(req,res)=>{
        const {nombre,apellido,telefono,email} = req.body
        
        const {id } = req.params
        let emailFlag = false
        query.query('SELECT * from usuario where email = ?',[email],(err,result)=>{
            if (err) {
                throw err
            }
            if (result.length) {
                emailFlag = true
            }  
        })
        if (emailFlag == false) {
            query.query('UPDATE usuario    SET nombre = ? , apellido = ?,telefono = ?  ,email= ?  where id = ? ', [nombre,apellido,telefono,email,id],(err,result)=>{
                if (err) {
                    throw err
                }
                res.status(200).json({message:'Datos actualizados correctamente'})
            })
        }else{
            res.status(200).json({message:"Este correo ya esta en uso"})
        }
    },
}

module.exports = Usuario