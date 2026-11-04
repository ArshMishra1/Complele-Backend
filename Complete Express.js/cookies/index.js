import express from 'express';
import cookieParser from 'cookie-parser';
const app=express();
app.use(cookieParser('secret'))

app.get('/',(req,res)=>{
    res.cookie("userID" ,99,
        {singed:true })
    res.send('Hello World');
}   );

app.get('/getcookies' ,(req,res)=>{
    console.log(req.cookies)
    console.log(req.signedCookies)

    if(req.cookies.name && req.cookies.name==="express")
    res.send({
        message:"helllo get the cookies",
        cookie: req.cookies
    })
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});