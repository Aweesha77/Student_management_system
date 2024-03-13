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


module.exports=router;