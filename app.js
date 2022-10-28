//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

// Variables
var subject = "New user want to join BrainSeed ";

// Get requests
app.get("/", function(req, res){
    res.render("index.ejs");
});

app.get("/event", function(req, res){
    res.render("event.ejs");
});

app.get("/aboutUs", function(req, res){
    res.render("aboutUs.ejs");
});

// Post requests
app.post("/", function(req, res){
    senderName = req.body.userName;
    senderEmail = req.body.userEmail;
    senderPhone = req.body.userPhone;
    senderLinkedIn = req.body.userProfileLinkedIn;
    senderMessage0 = req.body.userInfo0;
    senderMessage1 = req.body.userInfo1;
    var body = "Name: " + senderName + ",       Email: " + senderEmail + ",       Phone no.: " + senderPhone + ",        Sender's LinkedIn Link: " + senderLinkedIn + ",        How do sender want's to contribute to our community: " + senderMessage0 + ",        Sender Past Experiences: " + senderMessage1;

    var transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'node-123-123-112233-321@outlook.com',
            pass: 'newPassword123'
        }
    });
    
    var mailOptions = {
        from: 'node-123-123-112233-321@outlook.com',
        to: 'brainseednetworks931@gmail.com',
        subject: subject,
        text: body,  
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            res.send(error);
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    res.redirect("/");
});

// Serving listening on Port
let port = process.env.PORT;
if(port == null || port == ""){
    port = 3000;
};

app.listen(port , function () {
    console.log("Server started Successfully");
});