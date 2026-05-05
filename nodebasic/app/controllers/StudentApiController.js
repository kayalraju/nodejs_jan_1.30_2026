const Student = require("../models/student");

class StudentApiController {
    async createStudent(req, res) {
        //console.log(req.body);
        //console.log(req.file);
        
        try {
        const { name, email, city } = req.body;
        const data = new Student({
            name,
            email,
            city,
        });

        // if(req.file){
        //     data.image = req.file.path;
        // }
        const student = await data.save();
        return res.status(201).json({
            success: true,
            message: "student created successfully",
            data: student,
        });
        } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        });
        }
    }

    async getStudent(req, res) {
        try {
        const data = await Student.find();
        return res.status(200).json({
            success: true,
            message: "student list",
            total: data.length,
            data: data,
        });
        } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        });
        }
    }

    async getEditStudent(req, res) {
        try {
        const id = req.params.id;
        const data = await Student.findById(id);
        return res.status(200).json({
            success: true,
            message: "get student",
            data: data,
        });
        } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        });
        }
    }
    async updateStudent(req, res) {
        try {
        const id = req.params.id;

        if (!id) {
            return res.status(400).json({
            success: false,
            message: "student id is required",
            });
        }
        // const {name,email,city}=req.body
        //const data=await Student.findByIdAndUpdate(id,{name,email,city},{new:true})
        const data = await Student.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(200).json({
            success: true,
            message: "student updated successfully",
        });
        } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        });
        }
    }

    async deleteStudent(req, res) {
        try {
        const id = req.params.id;
       await Student.findByIdAndDelete(id);
        return res.status(200).json({
            success: true,
            message: "student deleted successfully",
        });
        } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        });
        }
    }
}

module.exports = new StudentApiController();
