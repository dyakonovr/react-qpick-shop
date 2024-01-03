import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PagePaths } from '@/enum/PagePaths';
import { useAuth } from '@/hooks/features/useAuth';
import { useActions } from '@/hooks/general/useActions';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthFormSchema } from './auth.constants';
import { AuthFormValuesType, AuthType } from './auth.types';

export function AuthForm() {
  const navigate = useNavigate();
  const { isLoading } = useAuth(); // Для лоадера
  const { auth } = useActions();
  const [type, setType] = useState<AuthType>('login');

  const form = useForm<AuthFormValuesType>({
    resolver: zodResolver(AuthFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  // Функции
  async function onSubmit(data: AuthFormValuesType) {
    auth({ type, data });
    navigate(PagePaths.HOME);
  }
  // Функции END

  return (
    <div className="flex flex-col w-full max-w-[500px] m-auto">
      <h1 className="text-3xl mb-7 text-center">Авторизация</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="mail@mail.ru" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Пароль</FormLabel>
                <FormControl>
                  <Input placeholder="password" {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="max-w-[200px] w-full mx-auto">
            Войти
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default AuthForm;
