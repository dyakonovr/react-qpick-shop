import { faker } from "@faker-js/faker";

import { Product, ProductCharacteristic, ProductImage } from "../../models/models.js";

export async function seedProducts(length, categoriesLength) {
  try {
    for (let i = 0; i < length; i++) {
      const product = await Product.create({
        name: faker.commerce.productName(),
        price: faker.number.int({ min: 20, max: 10000 }),
        rating: faker.number.float({ min: 0, max: 5, precision: 0.1 }),
        image: getImage(),
        category_id: Math.floor(Math.random() * categoriesLength) + 1
      });

      for (let j = 0; j < faker.number.int({ min: 3, max: 5 }); j++) {
        await ProductImage.create({
          url: getImage(),
          product_id: product.id
        });

        await ProductCharacteristic.create({
          ...getCharacteristic(),
          product_id: product.id
        });
      }
    }

    console.log('Products seeded successfully!');
  } catch (error) {
    console.error('Error seeding products:', error);
  }
};

function getImage() {
  const size = faker.number.int({ min: 300, max: 450, precision: 10 });
  return faker.image.urlLoremFlickr({ category: 'goods', width: size, height: size });
}

function getCharacteristic() {
  return {
    name: faker.commerce.productAdjective(),
    value: faker.commerce.productDescription(),
  };
}