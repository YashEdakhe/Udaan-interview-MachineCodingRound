const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.post('/admin',(req,res)=>{
    let adminId = req.body.id; 
    let name = req.body.name;
    let mobile = req.body.mobile;
    let pincode = req.body.pincode;
})

app.get('/getDetails/:userId', (req, res)=>{
    let userId = req.body.userId;
    let adminId = req.body.adminId;
    let result = req.body.result;

    res.render(userId,adminId,result);
})