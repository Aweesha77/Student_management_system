const mongoose=require("mongoose");

const schema=mongoose.Schema;

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

const student=mongoose.model(student,studentSchema);
moduld.exports=student;