import * as z from 'zod';

export const AuthFormSchema = z.object({
  email: z.string().email({ message: 'Введите валидный почтовый адрес' }),
  password: z
    .string()
    .min(4, { message: 'Пароль должен содержать хотя бы 4 символа' })
    .max(15, { message: 'Пароль может максимум содержать 15 символов' }),
});