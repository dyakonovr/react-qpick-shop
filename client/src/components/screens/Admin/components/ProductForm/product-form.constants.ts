import * as z from 'zod';

export const profileFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Минимальная длина имени товара - 3 символа' }),
  categoryId: z
    .string()
    .min(0, { message: 'CategoryID не может быть меньше 0' }),
  price: z.string().min(0, { message: 'Минимальная цена продукта - 0' }),
  rating: z.string().min(0, { message: 'Минимальный рейтинг - 0' }),
  info: z
    .array(
      z.object({
        name: z.string().min(10, {
          message: 'Минимальная длина характеристики - 10 символов',
        }),
        value: z.string().min(10, {
          message: 'Минимальная длина характеристики - 10 символов',
        }),
      })
    )
    .min(1, { message: 'Минимум должна быть одна характеристика' }),
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

export type ProfileFormValues = z.infer<typeof profileFormSchema>;

export const productFormDefaultValues = {
  name: '',
  rating: '',
  price: '',
  info: [],
  categoryId: '',
  // imgs: [],
};