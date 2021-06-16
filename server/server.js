const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/',function(req,res){
    res.send("Hello from the server")
});

app.post('/enroll',urlencodedParser,function(req,res){
    console.log(req.body);
    res.status(200).send({"message":"Data recieved"});
});

app.listen(PORT, function(){
    console.log("Server running on localHost:", PORT);
});