'use strict'
const { Model } = require('sequelize') ;

module.exports = (sequelize, DataTypes) => {
    class Cart extends Model {
        static associate(models) {
            Cart.belongsTo(models.Product ,{
                foreignKey: 'productId',
                as: 'cart'
            })
        }
    }
    Cart.init (
        {
            quantity :{
                type: DataTypes.INTEGER,
                defaultValue : 1,
            },
            userId : {
                type: DataTypes.INTEGER,
            } ,
            productId : {
                type: DataTypes.INTEGER,
            }
        },
        {
            sequelize ,
            modelName : 'Cart' ,
            tableName: 'carts'
        }
    )
    return Cart ;
}