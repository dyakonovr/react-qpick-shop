import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { createCategory } from "../../api/createCategory";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { addCategory } from "@/store/categories/CategoriesSlice";

const profileFormSchema = z.object({
  name: z.string().min(3, {message: "Минимальная длина названия категории - 3 символа"}),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export function AdminCategoryForm() {
  const dispatch = useAppDispatch();
  
  // Валидация и настройка формы
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: "",
    },
    mode: "onChange",
  })
  // Валидация и настройка формы END

  // Функции
  async function onSubmit(data: ProfileFormValues) {
    const response = await createCategory(data.name);

    if (typeof response === "string") {
      toast({
        title: "Создание категории",
        description: (
          <span>Произошла ошибка: {response}</span>
        ),
      });
      return;
    } else {
      dispatch(addCategory(response));
      toast({
        title: "Создание категории",
        description: (
          <span>Успешно!</span>
        ),
      });
    }
  }
  // Функции END

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Наименование категории</FormLabel>
              <FormControl>
                <Input placeholder="Название..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Создать категорию</Button>
      </form>
    </Form>
  )
}
