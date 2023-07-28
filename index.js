// console.log("It,s Not Working");
const express = require ('express')
const app = express();

require('dotenv').config();
// console.log(process.env.PORT)

//Middle Ware
app.get('/student',(req,res,next)=>{
    console.warn(req.query)
    console.warn(req.query.name)
    // req.query.name = req.query.name.toUpperCase();
    req.query.name = req.query.name.reverse();
    // req.query.name = "Payal"
    next();
}, function (req, res){
    console.log(req.query.name)
    let name = req.query.name;
    res.json({'msg':`Hello ${name}`})
})

let PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.warn('The server port is '+PORT)
})
