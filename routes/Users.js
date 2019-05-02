var express = require("express");
var users = express.Router()
var cors = require("cors");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
var db = require("../models")
var User = require("../models/User");

users.use(cors());

process.env.SECRET_KET = "secret";

    //Routes
    users.post("/register", (req, res)=>{
        const today = new Date()
        const userData = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            age: req.body.age,
            remote: req.body.remote,
            inperson: req.body.inperson,
            subjects: req.body.subjects,
            bio: req.body.bio,
            created: today,
        }

        db.User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user=> {
            if(!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    db.User.create(userData)
                    .then(user => {
                        res.json({status: user.email + "registered"})
                    })
                    .catch(err => {
                        res.send("error: " + err)
                    })
                })

            }else{
                res.json({error: "User already exists"})
            }
        })
        .catch(err => {
            res.send("error " + err)
        })

    })
    users.post("/login", (req, res)=>{
        db.User.findOne({
            where : {
                email : req.body.email
            }
        })
        .then(user => {
            if(user) {
                if(bcrypt.compareSync(req.body.password, user.password)) {
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KET, {
                        expiresIn: 1440
                        
                    })
                    res.send(token);
                }
            }else{
                res.status(400).json({error: "User does not exist"})
            }
        })
        .catch(err => {
            res.status(400).json(err);
        })
    })
 module.exports = users;