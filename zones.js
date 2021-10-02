const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/getZoneInfo/:pincode',(req,res)=>{
    res.render()
    
})