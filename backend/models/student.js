const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const studentSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    }
})

const student=mongoose.model("student",studentSchema);
module.exports=student;