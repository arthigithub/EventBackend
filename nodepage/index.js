const fs = require('fs');
const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

mongoose.connect("mongodb://admin:admin123@ds119489.mlab.com:19489/venyou");

let app=express();

let feedbackSchema=new mongoose.Schema({
  email:String,
  feedback:String
});


let feedbackModel=mongoose.model("feedback",feedbackSchema);


let RegistrationSchema=new mongoose.Schema({
  name:String,
  email:String,
  phone:Number,
  password:String,
  cpassword:String
  });

let RegistrationModel=mongoose.model("Registration",RegistrationSchema);


let billingSchema=new mongoose.Schema({
  firstname:String,
  email:String,
  address:String,
  city:String,
  state:String,
  zip:Number
  });

let billingModel=mongoose.model("billing",billingSchema);


let paymentSchema=new mongoose.Schema({
  cardname:String,
  credit_card_no:Number,
  exp_month:String,
  exp_year:Number,
  cvv:Number
  });

let paymentModel=mongoose.model("payment",paymentSchema);


let indexSchema=new mongoose.Schema({
username:String,
  password:String
  });

let indexModel=mongoose.model("index",indexSchema);


app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.get("/about",function(req,res){
      res.writeHead(200,{"Content-Type":"text/html"});
       fs.createReadStream(__dirname+"/about.html").pipe(res);
    });

app.post("/feedback",function(req,res){
  console.log(req.body);
feedbackModel(req.body).save(function(err,data){
  if(err) throw err;
  res.json({"message":"Thank you for feedback"});
});
});

app.post("/index",function(req,res){
  console.log(req.body);
indexModel(req.body).save(function(err,data){
  if(err) throw err;
  res.json({"message":"Thank you"});
});

});

app.post("/Registration",function(req,res){
  console.log(req.body);
RegistrationModel(req.body).save(function(err,data){
  if(err) throw err;
  res.json({"message":"Thank you"});
});

});


    app.get("/contact",function(req,res){
        res.writeHead(200,{"Content-Type":"text/html"});
         fs.createReadStream(__dirname+"/contact.html").pipe(res);
      });


      app.post("/billing",function(req,res){
            billingModel(req.body).save(function(err,data){
              if(err) throw err;
              res.json({"message":"Thank you"});
            });

      //     fs.createReadStream(__dirname+"/billing.html").pipe(res);
        });


        app.post("/payment",function(req,res){
          paymentModel(req.body).save(function(err,data){
            if(err) throw err;
            res.json({"message":"Thank you"});
          });
        });


app.listen(3000);

console.log("few lines of code");
console.log("few lines of code");
console.log("few lines of code");
