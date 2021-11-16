const Web3 = require("web3");
const express = require('express');
const app = express();
const port = 8000;
var bodyParser = require('body-parser');  
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var cors = require('cors')

app.use(cors())

var w3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));


//connection with node
var fs = require('fs');
var { response } = require("express");
//const { body } = require("express-validator");
var jsonFile = "./Verification_Diploma/build/contracts/Validation.json";
var parsed= JSON.parse(fs.readFileSync(jsonFile));
var abi = parsed.abi;

// contractAddress and abi are setted after contract deploy
var contract_address = "0x5966Db98B5611926b9d4fD146035a424a10e8959";

//contract instance
var contract = new w3.eth.Contract(abi, contract_address);
console.log(w3.eth.net.isListening());
//express app

app.use(express.json());

// app.get('/',function(req,res) {
//     res.sendFile(__dirname + '/index.html');
//   });
app.post('/process_post', function (req, res) {  
    // Prepare output in JSON format  
    response = {  
        first_name:req.body.first_name,  
        last_name:req.body.last_name,
        birth_date:req.body.birth_date,
        Cin:req.body.cin,
        Diploma:req.body.Diploma,
        School:req.body.school,
        Graduation:req.body.year
    };
    var Given_name = req.body.first_name;
    var Family_name =  req.body.last_name;
    var National_identification_number = parseInt(req.body.cin);
    var Date_of_birth = req.body.birth_date;
    var Scientific_discipline = req.body.Diploma;
    var Diploma_issue_date = req.body.year;
    var Diploma_issued_by = req.body.school;
    console.log(response);
    var id = National_identification_number.toString();
    console.log(National_identification_number);
    console.log(id);

    contract.methods.generateCertificate(id, Given_name, Family_name, National_identification_number, Date_of_birth,
        Scientific_discipline, Diploma_issue_date, Diploma_issued_by).send({from: '0xc718C4998FD72054767B0d081Ec71d5a472B5EDE', gas: 800000}).then(console.log);

    res.end(JSON.stringify(response))});  

//now get data function

// app.get('/verify.html',function(req,res) {
//     res.sendFile(__dirname + '/verify.html');
//   });

app.post('/verify_post', urlencodedParser, function (req, res) {  
    // Prepare output in JSON format  
    response = {  
        id:req.body.cin
    };
    var user_id = req.body.cin;
    

    contract.methods.getData(user_id.toString()).call().then(console.log);

    res.end(JSON.stringify(response))});  

 app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });
