const express = require("express");
const app = express();

app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res){
	res.render("home.ejs", {page_num: 0});
});

app.get("/about", function(req, res){
        res.render("about.ejs", {page_num: 0});
});

app.get("/contact", function(req, res){
        res.render("contact.ejs", {page_num: 0});
});

app.listen(process.env.port, process.env.IP, function(){
	console.log("Express server is running...")
});
