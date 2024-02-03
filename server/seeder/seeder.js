import { seedCategories } from "./seeders/category.seeder.js";
import { seedProducts } from "./seeders/product.seeder.js";
import { seedUsers } from "./seeders/user.seeder.js";

const categoriesLength = 7;

seedUsers();
seedCategories(categoriesLength - 1);
seedProducts(15, categoriesLength);