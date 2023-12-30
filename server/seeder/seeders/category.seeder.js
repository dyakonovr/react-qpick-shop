import { generateSlug } from "../../helpers/generate-slug.helper.js";
import { Category } from "../../models/models.js";
import { faker } from "@faker-js/faker";

export async function seedCategories(length) {
  try {
    const categories = [];

    for (let i = 0; i < length; i++) {
      const name = faker.commerce.productName();

      categories.push({ name, slug: generateSlug(name) });
    }

    await Category.bulkCreate(categories);
    console.log('Categories seeded successfully!');
  } catch (error) {
    console.error('Error seeding categories:', error);
  }
}