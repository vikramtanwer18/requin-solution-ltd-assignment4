const express = require("express")

const mongoose = require("mongoose");

const app = express()


const router = require('./routes/user.routes')

const path = require("path")

const bodyParser = require("body-parser")

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:false}))

mongoose.connect('mongodb://localhost/role_based_app',{
    useNewUrlParser: true,
  
}).then(()=>{
    console.log("connection established with mongodb")
}).catch(()=>{
    console.log("Error while connecting the mongodb")
})

const static_path = path.join(__dirname,"../public")

const template_path = path.join(__dirname,"../views")

app.use(express.static(static_path))

app.set('view engine', 'hbs');

// app.get("/",(req,res)=>{
//     res.render("index")
// })

app.use("",router)

const PORT =  8080


app.listen(PORT,()=>{
    console.log(`Server get started at port ${PORT}`)
})