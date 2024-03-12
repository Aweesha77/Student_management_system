const express=require ("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
const dotenv=require("dotenv");

const app=express();

const PORT=process.env.PORT || 8070;

app.use(corse());
app.use(bodyParser.json);

const URL=process.env.MOGODB_URL;

mongoose.connect(URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopologyL:true,
    useFindAndModify:false
})

const connection=mongoose.connection;
connection.once("open", ()=> {
    console.log("Monogodb conection succeed")
})

app.listen(PORT, () => {
    console.log(`server is up and running on port number: ${PORT}`)
})