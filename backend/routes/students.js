const express=require("express");
let Student=require("../models/student");

router.route("/add").post((req,res) => {
    const name=req.body.name;
    const age=Number(req.body.age);
    const gender=req.body.gender;


    const newStudent=new Student({
        name,
        age,
        gender
    })

    newStudent.save().then(() => {       //js promises ***
        res.json("Student added");       //js arrow functions ***
    }).catch((err) => {
        console.log(err);
    })

})

router.route("/").get((req,res) => {
    Student.find().then((students) => {
        res.json(students);
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/update/:id").put(async(req,res) => {
    let userId=req.params.id;
    const {name,age,gender}=req.body;     //new feature in js called destructuring
    const updateStudent={
        name,
        age,
        gender
    }

    const update=await Student.findByIdAndUpdate(userId,updateStudent)
    .then(()=>{
        res.status(200).send({status:"User updated",user:update})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })

})

router.route("/update/:id").delete(async(req,res) => {
    let userId=req.params.id;

    await Student.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status:"User deleted"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with deleting data",error:err.message});
    })
})

module.exports=router;