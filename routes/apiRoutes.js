var express = require("express");
var users = express.Router()
var db = require("../models")


//get one tutor by email to display in profile when they sign in
users.get("/tutor/:email", (req, res)=>{
    db.User.findOne({
        where: {
            email: req.params.email
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

module.exports = users;