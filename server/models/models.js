import { DataTypes } from "sequelize";

import { customCreatedAndUpdatedFields, idSettingsObject } from "./models.constants.js";
import { sequelize } from "../db.js";

export const User = sequelize.define('user', {
  id: idSettingsObject,
  email: {
    type: DataTypes.STRING, allowNull: false,
    unique: { msg: 'Email уже используется' },
    validate: {
      isEmail: { msg: 'Некорректный формат email' },
    },
  },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, defaultValue: 'USER' },
}, customCreatedAndUpdatedFields);

export const Product = sequelize.define('product', {
  id: idSettingsObject,
  name: {
    type: DataTypes.STRING,
    unique: { msg: 'Такое имя уже существует' },
    allowNull: false,
  },
  slug: { type: DataTypes.STRING, allowNull: false },
  price: {
    type: DataTypes.INTEGER, allowNull: false,
    validate: {
      min: { args: [0], msg: 'Цена должна быть не менее 0' },
    },
  },
  rating: {
    type: DataTypes.DOUBLE, defaultValue: 0,
    validate: {
      min: { args: [0], msg: 'Рейтинг не должен быть менее 0' },
      max: { args: [5], msg: 'Рейтинг не должен быть более 5' },
    }
  },
  image: { 
    type: DataTypes.STRING,
    allowNull: false,
   },
}, { timestamps: false });

export const ProductImage = sequelize.define('product_image', {
  id: idSettingsObject,
  url: DataTypes.STRING
}, { timestamps: false });

export const ProductCharacteristic = sequelize.define('product_characteristic', {
  id: idSettingsObject,
  name: DataTypes.STRING,
  value: DataTypes.STRING,
}, { timestamps: false });

export const Category = sequelize.define('category', {
  id: idSettingsObject,
  name: {
    type: DataTypes.STRING,
    unique: { msg: 'Такое название категории уже существует' },
    allowNull: false,
  },
  slug: { type: DataTypes.STRING, unique: true, allowNull: false },
}, { timestamps: false });

export const Basket = sequelize.define('basket', {
  id: idSettingsObject,
}, { timestamps: false });

export const BasketItem = sequelize.define('basket_item', {
  id: idSettingsObject,
  quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 }
}, { timestamps: false });

export const Order = sequelize.define('order', {
  id: idSettingsObject,
}, customCreatedAndUpdatedFields);

export const OrderSellingItem = sequelize.define('order_selling_item', {
  quantity: { type: DataTypes.INTEGER, allowNull: false }
}, { timestamps: false });

export const SellingItem = sequelize.define('selling_item', {
  id: idSettingsObject,
  old_product_name: { type: DataTypes.STRING, allowNull: false },
  old_product_price: { type: DataTypes.INTEGER, allowNull: false },
  old_product_image: { type: DataTypes.STRING, allowNull: false },
  is_active: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true }
}, { timestamps: false });

export const models = { Product, ProductImage, ProductCharacteristic, BasketItem, Basket, Category, User, Order, SellingItem, OrderSellingItem };

// Связи

User.hasOne(Basket, { foreignKey: 'user_id' });
Basket.belongsTo(User, { foreignKey: 'user_id' });

Basket.hasMany(BasketItem, { foreignKey: 'basket_id' });
BasketItem.belongsTo(Basket, { foreignKey: 'basket_id' });

Product.hasMany(BasketItem, { foreignKey: 'product_id' });
BasketItem.belongsTo(Product, { foreignKey: 'product_id' });

Product.hasMany(ProductImage, { foreignKey: 'product_id' });
ProductImage.belongsTo(Product, { foreignKey: 'product_id' });

Product.hasMany(ProductCharacteristic, { foreignKey: 'product_id' });
ProductCharacteristic.belongsTo(Product, { foreignKey: 'product_id' });

Category.hasMany(Product, { foreignKey: 'category_id' });
Product.belongsTo(Category, { foreignKey: 'category_id' });

User.hasMany(Order, { foreignKey: 'user_id' });
Order.belongsTo(User, { foreignKey: 'user_id' });

User.belongsToMany(Product, { through: "favourites" });
Product.belongsToMany(User, { through: "favourites" });

User.hasMany(Order, { foreignKey: 'user_id' });
Order.belongsTo(User, { foreignKey: 'user_id' });

// SellingItem.hasMany(OrderItem, { foreignKey: 'selling_item_id' });
// OrderItem.belongsTo(SellingItem, { foreignKey: 'selling_item_id' });

Order.belongsToMany(SellingItem, {
  through: OrderSellingItem, foreignKey: "order_id"
});
SellingItem.belongsToMany(Order, {
  through: OrderSellingItem, foreignKey: "selling_item_id"
});

Product.hasMany(SellingItem, { foreignKey: 'product_id' });
SellingItem.belongsTo(Product, { foreignKey: 'product_id' });
