import * as z from "zod";

export const productFormSchema = z.object({
  name: z.string().min(3, { message: "Минимальная длина имени товара - 3 символа" }),
  categoryId: z.string().min(1, { message: "CategoryID не может быть меньше 1" }),
  price: z.number().min(0, { message: "Минимальная цена продукта - 0" }),
  rating: z.number().min(1, { message: "Минимальный рейтинг - 0" }),
  info: z
    .array(
      z.object({
        name: z.string().min(4, {
          message: "Минимальная длина характеристики - 4 символа"
        }),
        value: z.string().min(2, {
          message: "Минимальная длина характеристики - 2 символа"
        })
      })
    )
    .min(1, { message: "Минимум должна быть хотя бы три характеристики" }),
  image: z.string().url({ message: "Введите валидную ссылку на фотографию-превью." }),
  gallery: z
    .array(
      z.object({
        value: z.string().url({ message: "Введите валидную ссылку на фотографию." })
      })
    )
    .min(1, { message: "Галерея должна состоять хотя бы из одной фотографии" })
  // imgs: z
  //   .array(
  //     z.object({
  //       value: z
  //         .string()
  //         .url({ message: 'Введите валидную ссылку на фотографию.' }),
  //     })
  //   )
  //   .min(1, { message: 'Минимум должна быть одна ссылка на фотографию' }),
});

export type ProductFormValues = z.infer<typeof productFormSchema>;

// export const productFormDefaultValues: ProfileFormValues = {
//   name: "",
//   rating: "",
//   price: "",
//   info: [],
//   categoryId: "",
//   image: "",
//   gallery: []
// };

export const productFormDefaultValues: ProductFormValues = {
  name: "name",
  rating: 5,
  price: 200,
  info: [
    { name: "name", value: "value" },
    { name: "name2", value: "value2" }
  ],
  categoryId: "",
  image: "https://loremflickr.com/300/300",
  gallery: [
    { value: "https://loremflickr.com/300/300" },
    { value: "https://loremflickr.com/300/300" }
  ]
};
