import { hash } from "argon2";
import { Basket, User } from "../../models/models.js";

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

    const baskets = [
      {
        id: 1,
        user_id: 1
      },
      {
        id: 2,
        user_id: 2
      }
    ];
    
    await User.bulkCreate(users);
    await Basket.bulkCreate(baskets);

    console.log('Users seeded successfully!');
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};