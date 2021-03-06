/**
 * Created by lixuc on 2017/5/2.
 */
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var session = require("express-session");

var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: "blockchain dashboard",
    resave: true,
    saveUninitialized: false,
    unset: "destroy",
    cookie: { maxAge: 24*60*60*1000 }
}));
app.use(express.static(path.join(__dirname, "public")));
app.use("/api", require("./routes/api"));
app.use("/", require("./routes/index"));
app.use("/dashboard", require("./routes/dashboard/filter"));
app.use("/dashboard", require("./routes/dashboard/home"));
app.use("/dashboard", require("./routes/dashboard/chain"));
app.use("/dashboard", require("./routes/dashboard/contract"));
app.use("/dashboard", require("./routes/dashboard/analytics"));
app.use("/dashboard", require("./routes/dashboard/store"));
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
});
app.listen(8080, function() {
    console.log("Server started>>>");
});