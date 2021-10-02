const express = require('express');
const bodyParser = require('body-parser');



const app = express();
app.use(bodyParser.urlencoded({extended:true}));

function riskCalculation(symptoms,travelHistory,covidContact) {
    this.symptoms = symptoms;
    this.travelHistory = travelHistory;
    this.covidContact = covidContact;

    return "5%"; 
}

app.post('/registerUser', (req, res) =>{
    let id = "1"; 
    let name = req.body.name;
    let mobile = req.body.mobile;
    let pincode = req.body.pincode;
    res.send(id);
})

app.post('/selfAssessment',(req, res) => {
let id = req.body.id; 
let travelHistory = req.body.travelHistory;
let covidContact = req.body.covidContact;
let symptoms = req.body.symptoms;

let covidRiskPercentage = riskCalculation(symptoms,travelHistory,covidContact);
res.send(covidRiskPercentage);

})

app.listen(3000,(req,res) => {
    console.log("Connected")
})


