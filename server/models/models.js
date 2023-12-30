import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";
import { customCreatedAndUpdatedFields, idSettingsObj } from "./models.constants.js";

export const User = sequelize.define('user', {
  id: idSettingsObj,
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
  id: idSettingsObj,
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
  imgs: { 
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    validate: {
      notEmpty: {
        args: true,
        msg: 'Массив ссылок на фотографии не должен быть пустым',
      },
      isArray: function (data) {
        if (!Array.isArray(data)) throw new Error('Это поле должно быть массивом');
      },
      isValidLinksArray(value) {
        if (!Array.isArray(value) || value.length === 0) {
          throw new Error('Массив ссылок не должен быть пустым');
        }

        for (let i = 0; i < value.length; i++) {
          if (!this.isUrl(value[i])) {
            throw new Error(`Элемент ${i + 1} не является допустимым URL`);
          }
        }
      },
      hasMinimumLength(data) {
        if (!Array.isArray(data) || data.length < 1) {
          throw new Error('Минимальная длина массива должна быть 1 элемент');
        }
      },
    },
   },
  info: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
}, { timestamps: false });

export const Category = sequelize.define('category', {
  id: idSettingsObj,
  name: {
    type: DataTypes.STRING,
    unique: { msg: 'Такое название категории уже существует' },
    allowNull: false,
  },
  slug: { type: DataTypes.STRING, unique: true, allowNull: false },
}, { timestamps: false });


export const Order = sequelize.define('order', {
  id: idSettingsObj,
  ordered_products: { type: DataTypes.JSONB, allowNull: false },
}, customCreatedAndUpdatedFields);


export const Basket = sequelize.define('basket', {
  id: idSettingsObj,
}, { timestamps: false });

export const BasketItem = sequelize.define('basket_item', {
  id: idSettingsObj,
  quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 }
}, { timestamps: false });

const Discount = sequelize.define('discount', {
  id: idSettingsObj,
  discount_type: { type: DataTypes.ENUM('percentage', 'currency'), allowNull: false },
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
  expiry_date: { type: DataTypes.DATE, allowNull: false },
}, {timestamps: false});

export const models = {Product, BasketItem, Basket, Category, User, Discount, Order};

// Связи

User.hasOne(Basket, { foreignKey: 'user_id' });
Basket.belongsTo(User, { foreignKey: 'user_id' });

Basket.hasMany(BasketItem, { foreignKey: 'basket_id' });
BasketItem.belongsTo(Basket, { foreignKey: 'basket_id' });

Product.hasMany(BasketItem, { foreignKey: 'product_id' });
BasketItem.belongsTo(Product, { foreignKey: 'product_id' });

Category.hasMany(Product, { foreignKey: 'category_id' });
Product.belongsTo(Category, { foreignKey: 'category_id' });

User.hasMany(Order, { foreignKey: 'user_id' });
Order.belongsTo(User, { foreignKey: 'user_id' });

User.belongsToMany(Product, { through: "favourites" });
Product.belongsToMany(User, { through: "favourites" });

Discount.hasOne(Product, { foreignKey: 'discount_id', allowNull: true });
Product.belongsTo(Discount, { foreignKey: 'discount_id' });