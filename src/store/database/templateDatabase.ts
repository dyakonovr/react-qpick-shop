import IDatabase from "@interfaces/store/IDatabase";

export const templateDatabase: IDatabase = {
  categories: { 1: "Телефоны", 2: "Наушники", 0: "Беспроводные зарядки" },
  products: [
    {id: 1, categoryId: 1, name: "Iphone 11 Pro", info: {"Тип зарядки": "USB", "Время работы": "12 часов", "Количество кнопок": "15 шт", "Характеристика": "4 чирика"}, currentPrice: 141, images: [], rating: 4.3},
    {id: 2, categoryId: 1, name: "Iphone 11 Pro Max", info: {"Тип зарядки": "Type-C", "Время работы": "128 часов", "Количество кнопок": "23 шт", "Характеристика": "3 чирика"}, currentPrice: 3551, oldPrice: 12424, images: [], rating: 4.9},
    {id: 3, categoryId: 1, name: "Iphone 12 Pro", info: {"Тип зарядки": "Type-C", "Время работы": "0 часов", "Количество кнопок": "2 шт", "Характеристика": "1 чирика"}, currentPrice: 35551, images: [], rating: 3.9},
    {id: 4, categoryId: 1, name: "Iphone 12 Pro Max", info: { "Тип зарядки": "Проводом", "Время работы": "18 часов", "Количество кнопок": "35 шт", "Характеристика": "ё чирика" }, currentPrice: 551, images: [], rating: 2.9 },
    
    {id: 5, categoryId: 2, name: "AirPods 1", info: { "Тип зарядки": "USB", "Время работы": "12 часов", "Количество кнопок": "15 шт", "Характеристика": "4 чирика" }, currentPrice: 141, images: [], rating: 4.3 },
    {id: 6, categoryId: 2, name: "AirPods 2", info: {"Тип зарядки": "Type-C", "Время работы": "128 часов", "Количество кнопок": "23 шт", "Характеристика": "3 чирика"}, currentPrice: 1, oldPrice: 12424, images: [], rating: 4.9},
    {id: 7, categoryId: 2, name: "AirPods 3", info: {"Тип зарядки": "Type-C", "Время работы": "0 часов", "Количество кнопок": "2 шт", "Характеристика": "1 чирика"}, currentPrice: 851, oldPrice: 242222, images: [], rating: 3.9},
    {id: 8, categoryId: 2, name: "AirPods 4", info: { "Тип зарядки": "Проводом", "Время работы": "18 часов", "Количество кнопок": "35 шт", "Характеристика": "ё чирика" }, currentPrice: 335354, oldPrice: 2222222, images: [], rating: 2.9 },
    
    {id: 9, categoryId: 0, name: "Беспроводная зарядка 1", info: { "Тип зарядки": "USB", "Время работы": "12 часов", "Количество кнопок": "15 шт", "Характеристика": "4 чирика" }, currentPrice: 102, images: [], rating: 1 },
    {id: 10, categoryId: 0, name: "Беспроводная зарядка 2", info: {"Тип зарядки": "Type-C", "Время работы": "128 часов", "Количество кнопок": "23 шт", "Характеристика": "3 чирика"}, currentPrice: 51, images: [], rating: 5},
    {id: 11, categoryId: 0, name: "Беспроводная зарядка 3", info: {"Тип зарядки": "Type-C", "Время работы": "0 часов", "Количество кнопок": "2 шт", "Характеристика": "1 чирика"}, currentPrice: 5111, images: [], rating: 0.8},
    {id: 12, categoryId: 0, name: "Беспроводная зарядка 4", info: {"Тип зарядки": "Проводом", "Время работы": "18 часов", "Количество кнопок": "35 шт", "Характеристика": "ё чирика"}, currentPrice: 367, images: [], rating: 2.1},
  ],
};