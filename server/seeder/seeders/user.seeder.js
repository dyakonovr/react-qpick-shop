import { hash } from "argon2";
import { User } from "../../models/models.js";

export async function seedUsers () {
  try {
    const users = [
      {
        "email": "root@mail.ru",
        "password": await hash("root"),
        "role": "ADMIN"
      },
      {
        "email": "user@mail.ru",
        "password": await hash("user"),
      }
    ];
    
    await User.bulkCreate(users);
    console.log('Users seeded successfully!');
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};