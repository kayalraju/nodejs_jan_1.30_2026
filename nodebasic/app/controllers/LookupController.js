const Category = require("../models/Category");
const { $where } = require("../models/csvModel");
const SubCategory = require("../models/SubCategory");

class LookupController {
  async CreateCategory(req, res) {
    try {
      const data = await Category.create(req.body);
      return res.status(200).json({
        message: "Category created successfully",
        data: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  async getCategory(req, res) {
    try {
      const data = await Category.find();
      return res.status(200).json({
        message: "Category get successfully",
        data: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  async CreatesubCategory(req, res) {
    try {
      const { subCategoryName, categoryId } = req.body;
      const data = new SubCategory({
        subCategoryName,
        categoryId,
      });
      await data.save();
      return res.status(200).json({
        message: "subCategory created successfully",
        data: data,
      });
    } catch (error) {
      logger.error(error);
    }
  }

  async CreatesubCategorywithCategory(req, res) {
    try {

        const lookupQuery=[
        {
          $lookup: {
            from: "categories",
            localField: "categoryId",
            foreignField: "_id",
            as: "category",
          },
        },
       
        {
          $project: {
            subCategoryName: 1,
            "category.categoryName": 1,
          },
        },
        // {
        //     $unwind:"$category"
        // }
        //group category
        {
          $group: {
            _id: "$category.categoryName",
            subCategories: {
              $push: {
                subCategoryName: "$subCategoryName",
              },
            },
            total: {
              $sum: 1,
            },
          },
        },
        
      ]

      
      const Subcategory = await SubCategory.aggregate(lookupQuery);

      return res.status(200).json({
        message: "subCategory created successfully",
        data: Subcategory,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = new LookupController();
