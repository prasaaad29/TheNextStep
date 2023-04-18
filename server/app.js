const express = require("express");
const app = express();
const Port = process.env.PORT || 8000;
require("./src/database/database")

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const admin = require("./src/admin/home")

app.use("/admin",admin);


app.listen(Port,()=>{
    console.log("Server connected !!!")
});
