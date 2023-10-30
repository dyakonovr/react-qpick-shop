import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { PagePaths } from "@/enum/PagePaths";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setUser } from "@/store/user/UserSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as z from "zod";
import login from "./api/login";

const profileFormSchema = z.object({
  email: z.string().email({message: "Введите валидный почтовый адрес"}),
  password: z
    .string()
    .min(4, { message: "Пароль должен содержать хотя бы 4 символа" })
    .max(15, { message: "Пароль может максимум содержать 15 символов" })
})

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export function AuthForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  })

  async function onSubmit(data: ProfileFormValues) {
    const response = await login(data.email, data.password);

    if (typeof response === "string") {
      toast({
        title: "Ошибка",
        description: (
          <span>{response}</span>
        ),
      });
    } else {
      dispatch(setUser(response));
      navigate(PagePaths.HOME);
    }
  }

  return (
    <div className="flex flex-col w-full max-w-[500px] m-auto">
      <h1 className="text-3xl mb-7 text-center">Авторизация</h1>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-6">
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
          
        <Button type="submit" className="max-w-[200px] w-full mx-auto">Войти</Button>
      </form>
    </Form>
    </div>
  )
}


export default AuthForm;