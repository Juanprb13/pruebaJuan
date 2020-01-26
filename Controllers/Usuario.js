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
        let newEmail = ''
        query.query('SELECT email from usuario',[email],(err,result)=>{
            if (err) {
                throw err
            }
            if (result.lenght > 0) {
                newEmail = result.email
            }
        })

        query.query('UPDATE  usuario  SET nombre = ? , apellido = ?,telefono = ?  ,email= ? ',[nombre,apellido,telefono,newEmail],(err,result)=>{
            if (err) {
                throw err
            }
            res.status(200).json({message:"Usuario creado correctamente"},result.insertId)
        })
    }
}

module.exports = Usuario