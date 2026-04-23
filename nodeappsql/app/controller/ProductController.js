
const {Product} = require("../model/product");
class ProductController{
    async createProduct(req,res){
        try{
            const{name,price,description}=req.body;

            const product=new Product({
                name,
                price,
                description
            })
            await product.save();
            return res.status(201).json({
                success:true,
                message:"Product created successfully",
                data:product
            })
        }catch(err){
            return res.status(500).json({
                success:false,
                message:err.message
            })
        }

    }

    async getProduct(req,res){
        try{
            const product=await Product.findAll();
            return res.status(201).json({
                success:true,
                message:"Product get successfully",
                data:product
            })
        }catch(err){
            return res.status(500).json({
                success:false,
                message:err.message
            })
        }
    }
}



module.exports=new ProductController();