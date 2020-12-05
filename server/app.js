const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const port = 8000
const userRoutes = require("./route/user")

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

try{
    mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true,useUnifiedTopology: true },)
    console.log("Database connected successfully !!")
}catch(err){
    console.log("Error connecting Database " + err)
}

app.get('/',(req,res) =>{
    res.json({"message" : "New Server !!"})
})

app.use("/api",userRoutes)

app.listen(port,()=>{
    console.log("Server started in port 8000")
})