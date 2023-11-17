import { sequelize } from "../db.js";
import { DataTypes, STRING } from "sequelize";

export const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

export const Product = sequelize.define('product', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  rating: { type: DataTypes.DOUBLE, defaultValue: 0 },
  imgs: { type: DataTypes.ARRAY(STRING), allowNull: false },
  info: { type: DataTypes.ARRAY(STRING), allowNull: false },
}, { timestamps: false });

export const BasketProduct = sequelize.define('basket_product', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 }
}, { timestamps: false });

export const Basket = sequelize.define('basket', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
}, { timestamps: false });

export const Category = sequelize.define('category', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
}, { timestamps: false });

export const Order = sequelize.define('order', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  orderDate: { type: DataTypes.DATE, allowNull: false },
  status: { type: DataTypes.STRING, allowNull: false, defaultValue: "Order in assembly" },
  recipientPhone: { type: DataTypes.STRING, allowNull: false },
  orderedProducts: { type: DataTypes.JSONB, allowNull: false },
}, { timestamps: false });

const Discount = sequelize.define('discount', {
  discountType: { type: DataTypes.ENUM('percentage', 'currency'), allowNull: false },
  value: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      isValidPercentage(value) {
        if (this.discountType === 'percentage' && (value < 0 || value > 100)) {
          throw new Error('Invalid percentage value');
        }
      },
    },
  },
  expiryDate: { type: DataTypes.DATE, allowNull: false },
}, {timestamps: false});

export const models = {Product, BasketProduct, Basket, Category, User, Discount, Order};

// Связи

User.hasOne(Basket);
Basket.belongsTo(User);

Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);

Category.hasMany(Product);
Product.belongsTo(Category);

Product.hasMany(BasketProduct);
BasketProduct.belongsTo(Product);

User.hasMany(Order);
Order.belongsTo(User);

Discount.hasOne(Product, { allowNull: true });
Product.belongsTo(Discount);