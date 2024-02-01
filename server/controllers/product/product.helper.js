import { Op } from "sequelize";

import { Category } from "../../models/models.js";
import { generateSlug } from "../../helpers/generate-slug.helper.js";

export const formatProductsForCard = (data) => {
  if (data instanceof Array) return data.map(p => ({ id: p.id, name: p.name, price: p.price, img: p.imgs[0], rating: p.rating }));
  return { id: data.id, name: data.name, price: data.price, img: data.imgs[0], rating: data.rating };
}

export const getFilters = async (oldFilters, searchTerm) => {
  const filters = {};

  if (oldFilters) {
    if (oldFilters.price) {
      if (oldFilters.price.min) {
        filters.price = {
          [Op.gte]: oldFilters.price.min,
        };
      }

      if (oldFilters.price.max) {
        filters.price = {
          [Op.lte]: oldFilters.price.max
        };
      }
    }

    if (oldFilters.rating) {
      if (oldFilters.rating.min) {
        filters.rating = {
          [Op.gte]: oldFilters.rating.min,
        };
      }

      if (oldFilters.rating.max) {
        filters.rating = {
          [Op.lte]: oldFilters.rating.max
        };
      }
    }
  }

  if (searchTerm) {
    filters.slug = {
      [Op.like]: `%${generateSlug(searchTerm)}%`
    }
  }


  let categoriesFilter = {};
  if (oldFilters && oldFilters.categories && oldFilters.categories.length !== 0) {
    categoriesFilter = {
      model: Category,
      where: {
        id: {
          [Op.in]: oldFilters.categories
        }
      }
    }
  }

  return [filters, categoriesFilter];
};