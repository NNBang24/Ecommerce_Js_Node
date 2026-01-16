'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize ,DataTypes) => {
    class Product extends Model {
        static associate(models) {
            Product.hasMany(models.Cart, {
                foreignKey: 'productId',
                as: 'carts'
            });

            Product.belongsTo(models.Category, {
                foreignKey: 'categoryId',
                as: 'category'
            });

            Product.hasMany(models.Product_Image, {
                foreignKey: 'productId',
                as: 'images'
            });
        }
    }

    Product.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
            },
            categoryId: {
                type: DataTypes.INTEGER,
            }
        },
        {
            sequelize,
            modelName: 'Product',
            tableName: 'products'
        }
    );

    return Product;
};
