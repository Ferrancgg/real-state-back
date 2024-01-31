require("dotenv").config()

const express=require("express")

const { connectDB } = require("./src/config/db")
const { housesRoutes } = require("./src/api/routes/houses")
const app=express()
app.use(express.json())
connectDB()


app.use("/api/v1/houses",housesRoutes)
app.use("*",(req,res,next)=>{
return res.status(400).json("route not found")
})
const PORT=4001
app.listen(PORT,()=>{console.log(`listen port ${PORT}`)})