
const Student = require("../models/student");

class StudentController {
  async index(req, res) {
    try{
    const data = await Student.find();
    res.render("student/list", {
      title: "student list",
      total: data.length,
      data: data,
    });
    }catch(err){
        console.log(err);
    }
    //res.render("student/list");
  }
  async add(req, res) {
    res.render("student/add");
  }
  async store(req, res) {
    //console.log(req.body);
    
    try {
      const { name, email, city } = req.body;
      const data = new Student({
        name,
        email,
        city,
      });
      const student = await data.save();
     if(student){
        res.redirect("/student/list");
     }else{
        res.redirect("/student/add");
     }
    } catch (err) {
      console.log(err);
    }
  }

  async editStudent(req, res) {
    try {
      const id=req.params.id
      const edit=await Student.findById(id)
      res.render("student/edit", {
        title: "edit student",
       data:edit
      });
    } catch (err) {
      console.log(err);
    }
  }
  async UpdateStudent(req, res) {
    try {
      const id=req.params.id
      const edit=await Student.findByIdAndUpdate(id,req.body,{new:true})
      res.redirect("/student/list");
     
    } catch (err) {
      console.log(err);
    }
  }
  async deleteStudent(req, res) {
    try {
      const id=req.params.id
      await Student.findByIdAndDelete(id)
      res.redirect("/student/list");
     
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new StudentController();
