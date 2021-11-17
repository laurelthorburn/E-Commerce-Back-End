const { Model, DataTypes } = require('sequelize');
const { Product, Tag } = require('.');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      // references the Product model's ID
      references: {
        model: Product,
        key: id
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      //references the Tag model's id
      references: {
        model: Tag,
        key: id
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
