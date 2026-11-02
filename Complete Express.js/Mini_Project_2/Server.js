import express from 'express'
 const app=express();
 const PORT=8000;
 import publicRoutes from './routes/public.routes.js'
 import privateRoutes from './routes/private.routes.js'

 //in-built middleware
 app.use(express.json())

 //middleware to routes
 app.use("/public",publicRoutes)
 app.use("/private",privateRoutes)

 app.listen(PORT ,()=>{
    console.log(`Sever is running on ${PORT}`)
 })