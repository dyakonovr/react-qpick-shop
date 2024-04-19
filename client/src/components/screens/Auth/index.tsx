import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { unwrapResult } from "@reduxjs/toolkit";
import { AuthFormSchema } from "./auth.constants";
import type { AuthFormValuesType, AuthType } from "./auth.types";
import { useActions } from "@/hooks/general/useActions";
import { PagePaths } from "@/enum/PagePaths";
import { Input } from "@/components/ui/shadcn/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/shadcn/form";
import { Button } from "@/components/ui/shadcn/button";

const textFields = {
  login: {
    title: "Авторизация",
    buttonSubmitText: "Авторизироваться",
    buttonChangeTypeText: "регистрации"
  },
  registration: {
    title: "Регистрация",
    buttonSubmitText: "Зарегистрироваться",
    buttonChangeTypeText: "авторизации"
  }
};

export function Auth() {
  const navigate = useNavigate();
  const { auth } = useActions();
  const [type, setType] = useState<AuthType>("login");

  const form = useForm<AuthFormValuesType>({
    resolver: zodResolver(AuthFormSchema),
    defaultValues: {
      email: "",
      password: ""
    },
    mode: "onBlur"
  });

  // Функции
  async function onSubmit(data: AuthFormValuesType) {
    try {
      // "await" ВЛИЯЕТ на тип этого выражения =)
      const result = await auth({ type, data });
      // Это нужно, чтобы отловить ошибку при авторизации
      // @ts-ignore
      unwrapResult(result);
      navigate(PagePaths.HOME, { replace: true });
    } catch (error) {
      console.log(error);
    }
  }

  function handleChangeType() {
    if (type === "login") setType("registration");
    else setType("login");
  }
  // Функции END

  return (
    <div className="flex flex-col w-full max-w-[500px] m-auto">
      <h1 className="text-3xl mb-7 text-center">{textFields[type].title}</h1>
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

          <Button type="submit" className="max-w-[200px] w-full mx-auto">
            {textFields[type].buttonSubmitText}
          </Button>

          <button type="button" onClick={handleChangeType}>
            Перейти к {textFields[type].buttonChangeTypeText}
          </button>
        </form>
      </Form>
    </div>
  );
}

export default Auth;
