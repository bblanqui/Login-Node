const express = require("express") 
const dotenv = require("dotenv") 
const cors = require("cors") 
const morgan = require("morgan") 
dotenv.config()
const app = express()



//import database 
const { sequelize } = require('./models/index')
 //require('./models/index.js')  
//import routes

const rutas = require('./routes')  


// middleware

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set("port", process.env.PORT || 4000)

app.use('/api',rutas)

app.listen(app.get("port"), ()=>{
    console.log("servidor corriendo en http://localhost:" + app.get("port"))
   
  
    sequelize
    .authenticate()
    .then(() => {
      console.log('DB Connected')
    })
    .catch(err => {
      console.log('no se pudo conectar a la BD', err)
    })
    
})







