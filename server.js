var express = require("express");
var cors = require("cors");
var app = express();
var session = require("express-session");
var PORT = process.env.PORT || 3001;
var db = require("./models");
var path = require("path");



// body parser
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());

// Require routes here
var Users = require("./routes/Users");
app.use("/users", Users)
var Tutors = require("./routes/apiRoutes");
app.use("/api", Tutors);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
   };

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });
  


db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("listening on: " + PORT);
    });
});

