const Employee = require("../models/employee");

class EmployeeController{


    async createEmp(req,res){
        try {
      const { firstName, lastName, gender, email, salary, department } =
        req.body;

      if (
        !firstName ||
        !lastName ||
        !gender ||
        !email ||
        !salary ||
        !department
      ) {
        return res.status(400).json({
          message: "Please fill all required fields",
        });
      }
      const employee = new Employee({
        firstName,
        lastName,
        gender,
        email,
        salary,
        department,
      });

      
      const savedEmployee = await employee.save();

      return res.status(200).json({
        message: "Employee created successfully",
        data: savedEmployee,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Error creating employee",
        error: err.message,
      });
    }

    }


    async getEmp(req,res){
        try {
            const employees = await Employee.find();
            return res.status(200).json({
              message: "Employees fetched successfully",
              data: employees,
            });
          } catch (err) {
            return res.status(500).json({
              message: "Error fetching employees",
              error: err.message,
            });
          }
    }

    async getEmpagg(req,res){
        try{
           
            const data= await Employee.aggregate([
                {
                    $match:{gender:"male"}
                },
                // {
                //     $limit:20
                // },
                // {
                //     $sort:{createdAt:-1}
                // },
                // {
                //     $project:{
                //         firstName:0,
                //         lastName:0,
                //         department:0
                //     }
                // }

                //group

                {
                    // $group:{
                    //     _id:"$gender",
                    //     count:{$sum:1}
                    // }

                    // $group:{
                    //     _id:"$department.name",
                    //     totalEmployees: { $sum:1 },
                    //     totalSalary : { $sum: "$salary" }
                    // },
                    //deperment wise employee name
                    
                        $group:{
                            _id:"$department.name",
                            employees:{$push:"$firstName"},
                            totalEmaloyee:{$sum:1},
                        }
                    
                },
                {
                    $addFields: {
                        company: "Google",
                      },
                },
                //sample
                // {
                //     $sample: {
                //       size: 2,
                //     },
                //   },

                //skip
                // {
                //     $skip:1
                // }

                //unwind
                {
                    $unwind:"$employees"
                }
            ])

            return res.status(200).json({
                message:"Employees fetched successfully",
                data:data
            })

        }catch(error){
            return res.status(500).json({
              message: "Error fetching employees",
              error: error.message,
            })
        }
    }

}




module.exports=new EmployeeController()