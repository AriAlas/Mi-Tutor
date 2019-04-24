var express = require("express");
var users = express.Router()
var db = require("../models")

const AWS = require('aws-sdk');
const fs = require('fs');
const fileType = require('file-type');
const bluebird = require('bluebird');
const multiparty = require('multiparty');
// email feature dependencies
const sgMail = require("@sendgrid/mail");
//configure API key for Sendgrid
sgMail.setApiKey(process.env.SGMAIL_KEY);

users.get("/send=email", (req, res)=>{
    const {recipient, name, sender, text} = req.query;
// sendgrid requirements
    const msg = {
        to: recipient,
        from: sender,
        subject: name,
        text: text
    }
      sgMail.send(msg).then(msg => console.log(msg));
})



// configure the keys for accessing AWS
AWS.config.update({
 accessKeyId: "AKIAIVGVNBJMRYCMPPUQ",
 secretAccessKey: "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"
});

// configure AWS to work with promises
AWS.config.setPromisesDependency(bluebird);

// create S3 instance
const s3 = new AWS.S3();

// abstracts function to upload a file returning a promise
const uploadFile = (buffer, name, type) => {
 const params = {
   ACL: 'public-read',
   Body: buffer,
   Bucket: process.env.S3_BUCKET,
   ContentType: type.mime,
   Key: `${name}.${type.ext}`
 };
 return s3.upload(params).promise();
};





//get one tutor by email to display in profile when they sign in
users.get("/tutor/:email", (req, res)=>{
    db.User.findOne({
        where: {
            email: req.params.email
        }
    }).then(tutor => res.json(tutor));
})
//get me a tutor by id
users.get("/tutor/:id", (req, res)=>{
    db.User.findOne({
        where: {
            id: req.params.email
        }
    }).then(tutor => res.json(tutor));
})
// get all tutors that can work remotely
users.get("/remote", (req, res)=> {
    db.User.findAll({
        where: {
            remote: true
        }
    }).then(tutors => res.json(tutors)).catch(err => console.log(err));
})
// get one tutor by id to update information
users.put("/tutor/:id", (req, res)=>{
    db.User.update(req.body,{where:{id:req.params.id}})
    .then(tutor => res.json(tutor)).catch(err => console.log(err))
})
// get all tutors that work in person
users.get("/inperson", (req, res)=> {
    db.User.findAll({
        where: {
            inperson: true
        }
    }).then(tutors => res.json(tutors)).catch(err => console.log(err));
})



users.post("/imageupload/", (req, res)=>{
    
    const form = new multiparty.Form();
   form.parse(req, async (error, fields, files) => {
     if (error) throw new Error(error);
    //  try {
       const path = files.file[0].path;
       const buffer = fs.readFileSync(path);
       const type = fileType(buffer);
       const timestamp = Date.now().toString();
       const fileName = `mitutor/${timestamp}-lg`;
       const data = await uploadFile(buffer, fileName, type);
    //    Sending to data base
   
       return res.status(200).send(data);
    //  } catch (error) {
    //    return res.status(400).send(error);
    //  }
   });
 
})


module.exports = users;