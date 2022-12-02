const express = require("express");
const port = process.env.PORT || 5500;
const host = '0.0.0.0';

let app = express();



app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("view engine","ejs");


// Routes
app.post("/",(request,response)=>{
    let {name} = request.body;

    response.render("greetings",{name : name});
})



app.listen(port, host, ()=>{
    console.log("Server is running...");
})