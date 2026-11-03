import express from 'express'
import publicRoutes from './routes/public.routes.js';
import privaterouter from './routes/private.routes.js';

const app=express()
const PORT=8000;

//*built in module
app.use(express.json())

//*middleware to Routes
app.use("/public" ,publicRoutes)
app.use("/private",privaterouter)

app.listen(PORT,()=>{
    console.log(`Server is runnig on ${PORT}`)
})