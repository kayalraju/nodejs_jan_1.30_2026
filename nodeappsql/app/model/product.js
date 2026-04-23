const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');


const Product = sequelize.define('product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    // image: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },
    description: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: true
})

module.exports = Product;