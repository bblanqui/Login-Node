// importación de los modelos
const { User } = require("../models/index")
// Dependencia para encriptar
const bcrypt = require("bcrypt")
// Dependecia para el manejo de los tokens
const jwt = require("jsonwebtoken")

/*--------------------------------*/
 /*funcion para registrar usuario*/
/*--------------------------------*/
const register = async (req, res)=>{
    //Encriptación de la contraseña
    const psw  = bcrypt.hashSync(req.body.password,Number.parseInt(10))
    const users = {
        name : req.body.name,
        password :psw,
        email : req.body.email,
    }
    // Validación de correo unico en BD. 
    const validEmail = await User.findOne({
        where: {
          email: users.email
        }
      })
      if (validEmail) {
        return res
          .status(400)
          .json({ error: 'El correo electrónico ya esta registrado.' })
      }

     //Creacion de usuario en la BD 
     User.create(users)
     .then((data)=>{
        return res.json({
             user:data,
             message:"registrado ok"
        })
    })
    // Respuesta por si falla.
    .catch((error)=>{
        res.status(500).json(error)
    })
}

/*-------------------------------------------*/
 /*funcion para consultar todos los usuario*/
/*-----------------------------------------*/
const getUser = async (req, res)=>{
    const user =  await User.findAll()
    res.json(user)
}

/*-------------------------------------*/
   /*funcion para loguear un usuario*/
/*------------------------------------*/
const login = async (req, res)=>{
    const {email, password} = req.body
    //buscar usuario
    User
    .findOne({
      where: {
        email: email
      }
    })
    .then(user => {
        if (!user) {
          res.status(404).json({ msg: 'Usuario con este correo no encontrado' })
        } else {
            // comparamos la contraseña de ingreso conicida con la de la BD
          if (bcrypt.compareSync(password, user.password)) {
            // Creamos el token
            const token = jwt.sign(
              { user: user },
              "authConfig.secret"
            )
            res.json({
              user: user,
              token: token
            })
          } else {
            // Si falla mandamos error por error en la contraseña
            res.status(401).json({ msg: 'Contraseña incorrecta' })
          }
        }
      })
      .catch(err => {
        res.status(500).json(err)
      })
    
}


module.exports = {
    register,getUser, login

}