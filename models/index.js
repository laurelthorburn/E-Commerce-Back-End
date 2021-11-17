// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// https://sequelize.org/master/manual/assocs.html

// Products belongsTo Category -- Product is the source model & Category is the target model.  Belongs to: P defines the foreign key
Product.belongsTo(Category, { 
  foreignKey: "product_id"
});

// Categories have many Products  Has Many: Product holds foreign key
Category.hasMany(Product, { 
  foreignKey: "product_id"
});
// Products belongToMany Tags (through ProductTag). BelongsToMany: I think foreign keys go on Product and Tag (A/B)
Product.belongsToMany(Tag, {through: ProductTag }, {
  foreignKey: "ProductTag_id"
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {through: ProductTag}, {
  foreignKey: "TagProduct_id"
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
