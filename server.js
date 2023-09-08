const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3500;
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", express.static(path.join(__dirname, "/public")));

app.use("/", require("./routes/root"));
app.use("/employees", require("./routes/api/employees"));

app.all('*',(req,res)=>{
    res.status(404)
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname,'views','404.html'))
    }else if(req.accepts('json')){
        res.json({"error":"404 Not Found"})
    }else{
        res.type('txt').send("404 Not Found")
    }
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
