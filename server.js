var express = require("express");
var cors = require("cors");
var app = express();
var session = require("express-session");
var PORT = process.env.PORT || 3001;
var db = require("./models");



// body parser
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());

// Require routes here
var Users = require("./routes/Users");
app.use("/users", Users);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
  

db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("listening on: " + PORT);
    });
});

