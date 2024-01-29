import { Op } from "sequelize";

import { Category } from "../../models/models.js";

export const formatProductsForCard = (data) => {
  if (data instanceof Array) return data.map(p => ({ id: p.id, name: p.name, price: p.price, img: p.imgs[0], rating: p.rating }));
  return { id: data.id, name: data.name, price: data.price, img: data.imgs[0], rating: data.rating };
}

export const getFilters = async (oldFilters) => {
  console.log(oldFilters);
  if (!oldFilters || Object.keys(oldFilters).length === 0) return [{}, {}];
  
  const { categories, price, rating } = oldFilters;
  const filters = {};

  if (price) {
    if (price.min) {
      filters.price = {
        [Op.gte]: price.min,
      };
    }

    if (price.max) {
      filters.price = {
        [Op.lte]: price.max
      };
    }
  }

  if (rating) {
    if (rating.min) {
      filters.rating = {
        [Op.gte]: rating.min,
      };
    }

    if (rating.max) {
      filters.rating = {
        [Op.lte]: rating.max
      };
    }
  }

  let categoriesFilter;

  if (categories && categories.length !== 0) {
    categoriesFilter = {
      model: Category,
      where: {
        id: {
          [Op.in]: categories.map(id => +id)
        }
      }
    }
  }

  return [filters, (categoriesFilter || {})];
};