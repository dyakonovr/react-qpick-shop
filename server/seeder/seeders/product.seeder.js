import { Product } from "../../models/models.js";
import { faker } from "@faker-js/faker";
import { generateSlug } from './../../helpers/generate-slug.helper.js';

export async function seedProducts(length, categoriesLength) {
  try {
    const products = [];

    for (let i = 0; i < length; i++) {
      const name = faker.commerce.productName();

      products.push({
        name,
        slug: generateSlug(name),
        price: faker.number.int({ min: 20, max: 1000 }),
        rating: faker.number.float({ min: 0, max: 5, precision: 0.1 }),
        imgs: getImages(4),
        info: JSON.stringify(getInfoArray(4)),
        category_id: Math.floor(Math.random() * categoriesLength) + 1
      });
    }

    await Product.bulkCreate(products);
    console.log('Products seeded successfully!');
  } catch (error) {
    console.error('Error seeding products:', error);
  }
};

function getImages(length) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(faker.image.urlLoremFlickr({ category: 'technics', width: 300, height: 300 }));
  }
  return arr;
}

function getInfoArray(length) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push({
      name: faker.commerce.productAdjective(),
      value: faker.commerce.productDescription(),
    })
  }
  return arr;
}