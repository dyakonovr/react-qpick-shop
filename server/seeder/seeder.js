import { seedCategories } from "./seeders/category.seeder.js";
import { seedProducts } from "./seeders/product.seeder.js";
import { seedUsers } from "./seeders/user.seeder.js";

const categoriesLength = 5;

seedUsers();
seedCategories(categoriesLength);
seedProducts(10, categoriesLength);