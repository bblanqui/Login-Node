const { User } = require("../models/index")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")



const register = (req, res)=>{

    const psw  = bcrypt.hashSync(req.body.password,Number.parseInt(10))
    const users = {
        name : req.body.name,
        password :psw,
        email : req.body.email,


    }

     User.create(users)
     .then((data)=>{
        return res.json({
             user:data,
             message:"registrado ok"
        })
    })
    .catch((error)=>{
        res.status(500).json(error)
    })
    
  

}


const getUser = async (req, res)=>{

    const user =  await User.findAll()

    res.json(user)

}

const login = async (req, res)=>{
  
    const {email, password} = req.body
    //buscar usuario
    User.findOne({where:{email:email}})
    .then((user)=>{
     if(!user){
        res.status(400).json({msg:"usuario no encontrado"})
     }else{
         if(bcrypt.compareSync(psw,password)){
            const token = jwt.sign({user},'sdfsdfsdfs')
            res.json({user,token})
         }else{
             res.status(401).json({msg:"pass incorrecta"})
         }
     }
      
    }).catch((error)=>{
        res.status(500).json(error)
    })
    
}


module.exports = {
    register,getUser, login

}